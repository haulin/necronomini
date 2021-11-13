/* eslint @typescript-eslint/no-use-before-define: ["error", { "variables": false }] */
import React from 'react';
import { adjustmentIsObject, Card, Condition, Creature } from './cards';

type Challenger = 'player' | 'opponent';

export type GameAction = {
  card: Card;
  challenger: Challenger;
  type: 'play-card';
};

type ChallengerStats = {
  arcanePower: number;
  creature: Creature | null;
  health: number;
  sanity: number;
};

interface InternalGameState {
  log: string[];
  opponent: ChallengerStats;
  player: ChallengerStats;
}

const initialState: InternalGameState = {
  log: [],
  opponent: {
    arcanePower: 0,
    creature: null,
    health: 40,
    sanity: 25,
  },
  player: {
    arcanePower: 0,
    creature: null,
    health: 40,
    sanity: 25,
  },
};

export interface GameState extends InternalGameState {
  updateState: React.Dispatch<GameAction>;
}

const adjustHealth = (
  card: Card,
  challenger: Challenger,
  state: InternalGameState,
): InternalGameState => {
  let newState: InternalGameState = {
    ...state,
  };
  const { opponent } = getRoles(challenger);
  if (card.effectOpponent?.damage) {
    if (typeof card.effectOpponent.damage === 'number') {
      newState[opponent].health -= card.effectOpponent.damage;
    }
    if (
      adjustmentIsObject(card.effectOpponent.damage) &&
      conditionIsMet(card.effectOpponent.damage.condition, challenger, state)
    ) {
      const damage = calculateDamage(card, challenger, state);
      newState[opponent].health -= damage;
    }
  }
  return newState;
};

const calculateDamage = (
  card: Card,
  challenger: Challenger,
  state: InternalGameState,
): number => {
  const { opponent, player } = getRoles(challenger);
  if (
    card.effectOpponent?.damage &&
    adjustmentIsObject(card.effectOpponent.damage)
  ) {
    let damage =
      card.effectOpponent.damage.base === 'opponent-creature-attack'
        ? state[opponent].creature?.attack || 0
        : card.effectOpponent.damage.base || 0;
    damage +=
      card.effectOpponent.damage.add === 'arcane-power'
        ? state[player].arcanePower
        : 0;
    return damage;
  }
  return 0;
};

const conditionIsMet = (
  condition: Condition | undefined,
  challenger: Challenger,
  state: InternalGameState,
) => {
  const { player } = getRoles(challenger);
  return (
    condition === undefined ||
    (condition === 'has-creature' && state[player].creature) ||
    (condition === 'insane' && state[player].sanity <= 0) ||
    (condition === 'not-insane' && state[player].sanity > 0)
  );
};

const getRoles = (challenger: Challenger): Record<Challenger, Challenger> => {
  const opponent = challenger === 'opponent' ? 'player' : 'opponent';
  const player = challenger === 'opponent' ? 'opponent' : 'player';
  return { opponent, player };
};

const gameReducer: React.Reducer<InternalGameState, GameAction> = (
  state,
  { card, challenger, type },
) => {
  switch (type) {
    case 'play-card': {
      let newState: InternalGameState = {
        ...state,
      };
      newState = adjustHealth(card, challenger, newState);
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
