import { deepCopy } from './utils';
import {
  conditionIsMet,
  getRoles,
  initialState,
  InternalGameState,
} from './useGameState';

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
});
