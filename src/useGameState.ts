/* eslint @typescript-eslint/no-use-before-define: ["error", { "variables": false }] */
import React from 'react';
import {
  adjustmentIsArray,
  adjustmentIsNumber,
  adjustmentIsObject,
  adjustmentObjectIsBase,
  adjustmentObjectIsSet,
  Card,
  Condition,
  Creature,
  Effect,
  EffectStatAdjustment,
  StatAdjustmentObject,
  StatAdjustmentObjectBase,
} from './cards';
import { deepCopy } from './utils';

type Challenger = 'player' | 'opponent';

export type GameAction = {
  card: Card;
  challenger: Challenger;
  type: 'play-card';
};

type ChallengerStats = {
  arcanePower: number;
  creature: Creature | null;
  elderDefense: number;
  life: number;
  sanity: number;
  taint: number;
};

export interface InternalGameState {
  log: string[];
  opponent: ChallengerStats;
  player: ChallengerStats;
}

export const initialState: InternalGameState = {
  log: [],
  opponent: {
    arcanePower: 0,
    creature: null,
    elderDefense: 0,
    life: 40,
    sanity: 25,
    taint: 0,
  },
  player: {
    arcanePower: 0,
    creature: null,
    elderDefense: 0,
    life: 40,
    sanity: 25,
    taint: 0,
  },
};

export interface GameState extends InternalGameState {
  updateState: React.Dispatch<GameAction>;
}

const calculateDamage = (
  damageAdjustment: StatAdjustmentObjectBase,
  challenger: Challenger,
  state: InternalGameState,
): number => {
  const { opponent, player } = getRoles(challenger);
  let damage =
    damageAdjustment.base === 'opponent-creature-attack'
      ? state[opponent].creature?.attack || 0
      : damageAdjustment.base || 0;
  damage +=
    damageAdjustment.add === 'arcane-power' ? state[player].arcanePower : 0;
  return damage;
};

export const conditionIsMet = (
  condition: Condition | undefined,
  challenger: Challenger,
  state: InternalGameState,
) => {
  const { player } = getRoles(challenger);
  return (
    condition === undefined ||
    (condition === 'has-creature' && !!state[player].creature) ||
    (condition === 'insane' && state[player].sanity <= 0) ||
    (condition === 'not-insane' && state[player].sanity > 0)
  );
};

export const getRoles = (
  challenger: Challenger,
): Record<Challenger, Challenger> => {
  const opponent = challenger === 'opponent' ? 'player' : 'opponent';
  const player = challenger === 'opponent' ? 'opponent' : 'player';
  return { opponent, player };
};

const processAllStatAdjustments = (
  card: Card,
  challenger: Challenger,
  state: InternalGameState,
) => {
  let newState = deepCopy(state);
  ([
    'arcanePower',
    'elderDefense',
    'life',
    'sanity',
    'taint',
  ] as (keyof EffectStatAdjustment)[]).forEach((stat) => {
    newState = processStatAdjustment(
      card.effectOpponent,
      stat,
      challenger,
      newState,
    );
  });
  return newState;
};

const processDamage = (
  card: Card,
  challenger: Challenger,
  state: InternalGameState,
): InternalGameState => {
  let newState = deepCopy(state);
  const { opponent } = getRoles(challenger);
  if (card.effectOpponent?.damage) {
    const damageAdjustment = card.effectOpponent.damage;
    let damage = 0;
    if (adjustmentIsNumber(damageAdjustment)) {
      damage = damageAdjustment;
    }
    if (
      adjustmentIsObject(damageAdjustment) &&
      conditionIsMet(damageAdjustment.condition, challenger, state)
    ) {
      damage = calculateDamage(damageAdjustment, challenger, state);
    }
    newState[opponent].life -= Math.max(
      0,
      damage - state[opponent].elderDefense,
    );
    // TODO: invulnerability / items / physical defense
  }
  return newState;
};

const processStatAdjustment = (
  effect: Effect | undefined,
  stat: keyof EffectStatAdjustment,
  challenger: Challenger,
  state: InternalGameState,
) => {
  let newState = deepCopy(state);
  if (!!effect && effect[stat]) {
    let effectStat = effect[stat];
    if (adjustmentIsNumber(effectStat)) {
      newState[challenger][stat] += effectStat;
    }
    if (adjustmentIsObject(effectStat)) {
      newState = processStatAdjustmentObject(
        effectStat,
        stat,
        challenger,
        newState,
      );
    }
    if (adjustmentIsArray(effectStat)) {
      effectStat.forEach((effectStat) => {
        newState = processStatAdjustmentObject(
          effectStat,
          stat,
          challenger,
          newState,
        );
      });
    }
  }
  return newState;
};

export const processStatAdjustmentObject = (
  effectStat: StatAdjustmentObject,
  stat: keyof EffectStatAdjustment,
  challenger: Challenger,
  state: InternalGameState,
) => {
  let newState = deepCopy(state);
  const { opponent } = getRoles(challenger);
  if (conditionIsMet(effectStat.condition, challenger, newState)) {
    if (adjustmentObjectIsSet(effectStat)) {
      newState[challenger][stat] =
        effectStat.set === 'opponent'
          ? newState[opponent][stat]
          : effectStat.set;
    }
    if (adjustmentObjectIsBase(effectStat)) {
      // TODO: almost the same functionality as calculateDamage
      newState[challenger][stat] +=
        effectStat.base === 'opponent-creature-attack'
          ? state[opponent].creature?.attack || 0
          : effectStat.base;
      newState[challenger][stat] +=
        effectStat.add === 'arcane-power' ? state[challenger].arcanePower : 0;
    }
  }
  return newState;
};

const gameReducer: React.Reducer<InternalGameState, GameAction> = (
  state,
  { card, challenger, type },
) => {
  switch (type) {
    case 'play-card': {
      let newState = deepCopy(state);
      newState = processAllStatAdjustments(card, challenger, newState);
      newState = processDamage(card, challenger, newState);
      return newState;
    }
  }
};

export const useGameState = (): GameState => {
  const [state, updateState] = React.useReducer(gameReducer, initialState);
  return {
    ...state,
    updateState,
  };
};
