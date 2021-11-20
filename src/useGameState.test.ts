import { cards, StatAdjustmentObject } from './cards';
import {
  conditionIsMet,
  getRoles,
  initialState,
  InternalGameState,
  processStatAdjustmentObject,
} from './useGameState';
import { deepCopy } from './utils';

const stateFixture: InternalGameState = deepCopy(initialState);

describe('useGameState', () => {
  describe('#conditionIsMet', () => {
    it('returns true if there is no condition', () => {
      expect(conditionIsMet(undefined, 'player', stateFixture)).toBe(true);
    });

    it('returns false for has-creature if no creature', () => {
      expect(conditionIsMet('has-creature', 'player', stateFixture)).toBe(
        false,
      );
    });

    it('returns true for has-creature if has creature', () => {
      const state = deepCopy(stateFixture);
      state.player.creature = {
        attack: 1,
      };
      expect(conditionIsMet('has-creature', 'player', state)).toBe(true);
    });

    it('returns false for has-creature if player has a creature, but challenger is opponent', () => {
      const state = deepCopy(stateFixture);
      state.player.creature = {
        attack: 1,
      };
      expect(conditionIsMet('has-creature', 'opponent', state)).toBe(false);
    });

    it('returns false for insane & true for not-insane if sanity is above 0', () => {
      expect(conditionIsMet('insane', 'player', stateFixture)).toBe(false);
      expect(conditionIsMet('not-insane', 'player', stateFixture)).toBe(true);
    });

    it('returns true for insane if sanity is 0 or less', () => {
      const state = deepCopy(stateFixture);
      state.player.sanity = 0;
      expect(conditionIsMet('insane', 'player', state)).toBe(true);
      expect(conditionIsMet('not-insane', 'player', state)).toBe(false);
      state.player.sanity = -5;
      expect(conditionIsMet('insane', 'player', state)).toBe(true);
      expect(conditionIsMet('not-insane', 'player', state)).toBe(false);
    });
  });

  describe('#getRoles', () => {
    it('returns opponent=opponent and player=player for challenger=player', () => {
      expect(getRoles('player')).toEqual({
        opponent: 'opponent',
        player: 'player',
      });
    });

    it('returns opponent=player and player=opponent for challenger=opponent', () => {
      expect(getRoles('opponent')).toEqual({
        opponent: 'player',
        player: 'opponent',
      });
    });
  });

  describe('#processStatAdjustmentObject', () => {
    it('adjusts unconditional stat', () => {
      const state = deepCopy(stateFixture);
      state.player.taint = 3;
      const statAdjustment = {
        set: 0,
      };
      const expectedState = deepCopy(stateFixture);
      expectedState.player.taint = 0;
      expect(
        processStatAdjustmentObject(statAdjustment, 'taint', 'player', state),
      ).toEqual(expectedState);
    });

    it('adjusts conditional stat with set', () => {
      const state = deepCopy(stateFixture);
      const statAdjustment: StatAdjustmentObject = {
        set: -5,
        condition: 'not-insane',
      };
      const expectedState = deepCopy(stateFixture);
      expectedState.opponent.sanity = -5;
      expect(
        processStatAdjustmentObject(
          statAdjustment,
          'sanity',
          'opponent',
          state,
        ),
      ).toEqual(expectedState);
    });

    it('adjusts conditional stat with base', () => {
      const state = deepCopy(stateFixture);
      state.opponent.arcanePower = 7;
      const statAdjustment: StatAdjustmentObject = {
        add: 'arcane-power',
        base: 5,
        condition: 'not-insane',
      };
      const expectedState = deepCopy(state);
      expectedState.opponent.sanity = stateFixture.opponent.sanity + 5 + 7;
      expect(
        processStatAdjustmentObject(
          statAdjustment,
          'sanity',
          'opponent',
          state,
        ),
      ).toEqual(expectedState);
    });

    it('does not adjust if condition is not met', () => {
      const state = deepCopy(stateFixture);
      const statAdjustment: StatAdjustmentObject = {
        set: 5,
        condition: 'insane',
      };
      const expectedState = deepCopy(stateFixture);
      expect(
        processStatAdjustmentObject(
          statAdjustment,
          'sanity',
          'opponent',
          state,
        ),
      ).toEqual(expectedState);
    });
  });
});
