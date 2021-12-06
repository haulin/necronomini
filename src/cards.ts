export interface Card extends Partial<EffectOpponent>, Partial<EffectPlayer> {
  name: string;
  cost: number;
  description: string;
  effectRandom?: (EffectOpponent | EffectPlayer)[];
  quote: string | null;
  unlocksAt?: number;
}

const ActionOrder = [
  'player-card',
  '---------',
  'sanity-adjustment',
  'damage',
  'stat-adjustment',
  'summon',
  'banish',
  '---------',
  'game-over',
  '---------',
  'creature-retaliate',
  'heal',
  'taint',
  '---------',
  'opponent-card',
  'deal-card',
];

type CardType = 'natural' | 'buff' | 'damage' | 'summon' | 'stat-adjustment';

const Insanity: Record<string, InsanityProps> = {
  agoraphobia: {
    description: 'can only use 2 slots to play cards',
    effect: {
      disabledSlots: true,
    },
    minimumSanity: -10,
  },
  megalomania: {
    description: 'Gains 2 Arcane Power and 4 Taint each turn',
    effect: {
      arcanePower: 2,
      taint: 4,
    },
  },
  schizofrenia: {
    description: 'Arcane Power and Elder Defense reset to 0 each turn',
    effect: {
      arcanePower: {
        set: 0,
      },
      elderDefense: {
        set: 0,
      },
    },
    minimumSanity: -10,
  },
  xenophobia: {
    description: 'Summon cards have no effect',
    effect: {
      creature: null,
    },
  },
};

const Levels: Record<string, Level> = {
  Thug: [1, 40, 0],
  Hoodlum: [2, 45, 0],
  Mobster: [3, 50, 0],
  'Cult Priest': [6, 65, 0],
  'Cult Leader': [7, 70, 0],
  'Cult High Priest': [8, 75, 0],
  Necromancer: [10, 85, 0],
  'Deep One Spawn': [11, 90, 0],
  'Deep One Priest': [12, 95, 0],
  'Elder Deep One': [13, 100, 0],
  'Mi-Go Warrior': [15, 100, 0],
  'Mi-Go Surgeon': [16, 100, 0],
  'Yithian Peasant': [18, 100, 0],
  'Yithian Librarian': [19, 100, 0],
  'Yithian Scholar': [20, 100, 1],
  'Proto-Shoggoth': [21, 100, 2],
  'Slave Shoggoth': [22, 100, 3],
  'Rebel Shoggoth': [23, 100, 4],
  'Elder Thing': [24, 100, 5],
  'King in Yellow': [26, 100, 7],
  Nyarlatothep: [27, 100, 8],
  'The Unnameable': [28, 100, 9],
  'Spawn of Cthulhu': [29, 100, 10],
  'Great Cthulhu': [30, 100, 0],
};

export type Creature = null | {
  attack: number;
  ignoreCreatures?: boolean;
  ignoreDefense?: boolean;
};

export type Damage = number | 'sanity' | StatAdjustmentObjectBase;

export interface Effect extends EffectStatAdjustment {
  creature?: Creature;
  damage?: Damage;
  disabledSlots?: boolean;
  discardCard?: boolean;
  invulnerability?: boolean;
}

interface EffectOpponent {
  effectOpponent: Effect;
}

interface EffectPlayer {
  effectPlayer: Effect;
}

export interface EffectStatAdjustment {
  arcanePower?: StatAdjustment;
  elderDefense?: StatAdjustment;
  life?: StatAdjustment;
  sanity?: StatAdjustment;
  taint?: StatAdjustment;
}

interface InsanityProps {
  description: string;
  effect: Effect;
  minimumSanity?: number;
}

export type Condition = 'has-creature' | 'insane' | 'not-insane';
type Level = [Ordinal, Life, ArcanePower];
type Ordinal = number;
type Life = number;
type ArcanePower = number;

export type StatAdjustment =
  | number
  | StatAdjustmentObject
  | StatAdjustmentObject[];

export type StatAdjustmentObject =
  | StatAdjustmentObjectBase
  | StatAdjustmentObjectSet;

export interface StatAdjustmentObjectBase {
  add?: 'arcane-power';
  base: number | 'opponent-creature-attack';
  condition?: Condition;
  ignoreDefense?: boolean;
}

interface StatAdjustmentObjectSet {
  condition?: Condition;
  set: number | 'opponent';
}

export const adjustmentIsNumber = (
  adjustment?: StatAdjustment | Damage,
): adjustment is number => {
  return typeof adjustment === 'number';
};

export const adjustmentIsObject = (
  adjustment?: StatAdjustment | Damage,
): adjustment is StatAdjustmentObject => {
  return !['number', 'string'].includes(typeof adjustment);
};

export const adjustmentIsArray = (
  adjustment?: StatAdjustment | Damage,
): adjustment is StatAdjustmentObject[] => {
  return Array.isArray(adjustment);
};

export const adjustmentObjectIsBase = (
  adjustment?: StatAdjustment,
): adjustment is StatAdjustmentObjectBase => {
  return adjustment?.hasOwnProperty('base') || false;
};

export const adjustmentObjectIsSet = (
  adjustment?: StatAdjustment,
): adjustment is StatAdjustmentObjectSet => {
  return adjustment?.hasOwnProperty('set') || false;
};

export const cards: Card[] = [
  {
    name: 'Arkham Asylum',
    cost: 0,
    description: 'A much needed stay in the Arkham Asylum. Gain 15 Sanity.',
    effectPlayer: {
      sanity: 15,
      taint: {
        set: 0,
      },
    },
    quote: "Now settle down... you won't feel a thing.",
  },
  {
    name: 'Betrayed',
    cost: 0,
    description:
      "If Opponent has a creature in play, then deal damage to Opponent equal to his creature's Attack + Arcane Power.",
    effectOpponent: {
      damage: {
        add: 'arcane-power',
        base: 'opponent-creature-attack',
        condition: 'has-creature',
      },
    },
    quote: 'Controlling them is hard enough, without someone interfering.',
  },
  {
    name: 'Black Goat of the Woods',
    cost: 8,
    description: 'Summon Shub-Niggurath. Attack 10. Damage 8 + Arcane Power.',
    effectPlayer: {
      creature: {
        attack: 10,
      },
      damage: {
        base: 8,
        add: 'arcane-power',
      },
    },
    quote:
      'Ia! Shub-Niggurath - Black Goat of the Woods with a Thousand Young.',
    unlocksAt: 21,
  },
  {
    name: 'Blackmail',
    cost: 0,
    description: 'Opponent chooses and discards a card. Take another turn.',
    effectOpponent: {
      discardCard: true,
    },
    quote: "That's right! I want it all, creep.",
  },
  {
    name: "Blast 'em",
    cost: 0,
    description: 'Shotgun Damage 3. Ignores Elder Defense and Invulnerability.',
    effectOpponent: {
      life: -3,
    },
    quote: "It'll blow yer head clean off...",
  },
  {
    name: 'Blessing of Hastur',
    cost: 3,
    description: 'Remove your Taint. Opponent is Tainted for 2.',
    effectPlayer: {
      taint: {
        set: 0,
      },
    },
    effectOpponent: {
      taint: 2,
    },
    quote: 'The Unspeakable One grants you His blessing.',
  },
  {
    name: 'Byakhee',
    cost: 2,
    description: 'Summon Byakhee. Cannot be blocked by Creatures. Attack 3.',
    effectPlayer: {
      creature: {
        attack: 3,
        ignoreCreatures: true,
      },
    },
    quote: 'Winged beast from beyond the stars.',
  },
  {
    name: "City of R'lyeh",
    cost: 6,
    description:
      'Opponent goes insane. If already insane, Damage 20 + Arcane Power',
    effectOpponent: {
      sanity: {
        set: -5,
        condition: 'not-insane',
      },
      damage: {
        base: 20,
        add: 'arcane-power',
        condition: 'insane',
      },
    },
    quote:
      'As the ancient city rose from the depths, fear and madness struck the world.',
    unlocksAt: 27,
  },
  {
    name: 'Curse of Cthulhu',
    cost: 1,
    description: 'Opponent gains 1 Taint.',
    effectOpponent: {
      taint: 1,
    },
    quote: 'I will kill you slowly.',
  },
  {
    name: 'Dawn of a New Day',
    cost: 0,
    description:
      'Dispel everything in play. Both players gain 5 Sanity (or have 5 if below zero).',
    effectOpponent: {
      arcanePower: {
        set: 0,
      },
      creature: null,
      elderDefense: {
        set: 0,
      },
      invulnerability: false,
      sanity: [
        {
          set: 5,
          condition: 'insane',
        },
        {
          base: 5,
          condition: 'not-insane',
        },
      ],
      taint: {
        set: 0,
      },
    },
    effectPlayer: {
      arcanePower: {
        set: 0,
      },
      creature: null,
      elderDefense: {
        set: 0,
      },
      invulnerability: false,
      sanity: [
        {
          set: 5,
          condition: 'insane',
        },
        {
          base: 5,
          condition: 'not-insane',
        },
      ],
      taint: {
        set: 0,
      },
    },
    quote: 'As the new day rose, the terrors of the night fled',
    unlocksAt: 16,
  },
  {
    name: 'Dark Ritual',
    cost: 2,
    description: 'Damage 10 + Arcane Power. Gain 3 Life.',
    effectOpponent: {
      damage: {
        base: 10,
        add: 'arcane-power',
      },
    },
    effectPlayer: {
      life: 3,
    },
    quote: 'IA! CTHULHU FHTAGN!',
  },
  {
    name: 'Dark Young Charge',
    cost: 4,
    description: 'Damage 14 + Arcane Power',
    effectOpponent: {
      damage: {
        base: 14,
        add: 'arcane-power',
      },
    },
    quote: 'The monstrosity crushed everything in its way.',
  },
  {
    name: 'Dimensional Shambler',
    cost: 3,
    description:
      'Summon Dimensional Shambler. Attack 4. Ignores Elder Defense.',
    effectPlayer: {
      creature: {
        attack: 4,
        ignoreDefense: true,
      },
    },
    quote: 'It lurched through time and space... it was unstoppable.',
  },
  {
    name: 'Discreet Doctor',
    cost: 0,
    description: 'Gain 4 Life',
    effectPlayer: {
      life: 4,
    },
    quote: "I don't ask questions.",
  },
  {
    name: 'Dispel',
    cost: 1,
    description: "Remove Opponent's Elder Defense and Invulnerability.",
    effectOpponent: {
      elderDefense: {
        set: 0,
      },
      invulnerability: false,
    },
    quote: "That's enough outta you!",
  },
  {
    name: 'Doppelganger',
    cost: 1,
    description:
      "Mirror all of Opponent's attributes - Arcane Power, Elder Defense, and Taint",
    effectPlayer: {
      arcanePower: {
        set: 'opponent',
      },
      elderDefense: {
        set: 'opponent',
      },
      taint: {
        set: 'opponent',
      },
    },
    quote: "He's changed somehow. Acts odd... not himself.",
    unlocksAt: 11,
  },
  {
    name: 'Elder Sign',
    cost: 0,
    description: 'Invulnerable for next attack. Elder Defense +2.',
    effectPlayer: {
      elderDefense: 2,
      invulnerability: true,
    },
    quote: "It's the only defense we have",
  },
  {
    name: 'Elder Thing',
    cost: 1,
    description:
      'Summon Elder Thing. Attack 2. When summoned, remove Taint and gain +3 Elder Defense',
    effectPlayer: {
      creature: {
        attack: 2,
      },
      elderDefense: 3,
      taint: {
        set: 0,
      },
    },
    quote: 'An ancient race of beings that once ruled the Earth',
  },
  {
    name: 'Essence of the Soul',
    cost: 3,
    description: 'Gain 9 Life',
    effectPlayer: {
      life: 9,
    },
    quote: 'It tastes so vile, but feels so good...',
  },
  {
    name: 'From Beyond',
    cost: 3,
    description: 'Opponent loses 6 Sanity and is Damaged for 8 + Arcane Power.',
    effectOpponent: {
      damage: {
        base: 8,
        add: 'arcane-power',
      },
      sanity: -6,
    },
    quote: 'If you move, they will see you.',
  },
  {
    name: 'Hound of Tindalos',
    cost: 4,
    description: 'Damage 12 + Attack. Ignores Elder Defense.',
    effectOpponent: {
      damage: {
        base: 12,
        add: 'arcane-power',
        ignoreDefense: true,
      },
    },
    quote: "You can't hide from it.",
  },
  {
    name: 'Mad Experiment',
    cost: 3,
    description:
      'Random Effect. Summon Shogoth, or Damage 15 + Arcane Power, or +5 Arcane Power & Elder Defense, or go insane',
    effectRandom: [
      {
        effectPlayer: {
          creature: {
            attack: 6,
          },
        },
      },
      {
        effectOpponent: {
          damage: {
            base: 15,
            add: 'arcane-power',
          },
        },
      },
      {
        effectPlayer: {
          arcanePower: 5,
          elderDefense: 5,
        },
      },
      {
        effectPlayer: {
          sanity: {
            set: -5,
          },
        },
      },
    ],
    quote: "I'll show them who's mad now...",
    unlocksAt: 13,
  },
  {
    name: 'Mi-go Surgery',
    cost: 1,
    description: 'Gain 7 Life. Arcane Power -2.',
    effectPlayer: {
      life: 7,
      arcanePower: -2,
    },
    quote: 'The Mi-go deal with science, not magic.',
    unlocksAt: 8,
  },
  {
    name: 'Mind Burn',
    cost: 1,
    description: 'Damage 7 + Arcane Power',
    effectOpponent: {
      damage: {
        base: 7,
        add: 'arcane-power',
      },
    },
    quote: 'His head... just... eh... exploded!',
  },
  {
    name: 'Miskatonic University',
    cost: 0,
    description: 'Remove Taint, gain 5 Sanity, and 2 Arcane Power.',
    effectPlayer: {
      arcanePower: 2,
      sanity: 5,
      taint: {
        set: 0,
      },
    },
    quote: 'A haven, at the center of learning in Arkham.',
    unlocksAt: 6,
  },
  {
    name: 'Nameless Cults',
    cost: 3,
    description: 'Arcane Power +5.',
    effectPlayer: {
      arcanePower: 5,
    },
    quote: 'The nameless cults should remain unknown.',
    unlocksAt: 2,
  },
  {
    name: 'Pnakotic Manuscripts',
    cost: 2,
    description: 'Arcane Power +3',
    effectPlayer: {
      arcanePower: 3,
    },
    quote: 'No one knows where the manuscripts came from.',
    unlocksAt: 4,
  },
  {
    name: 'Powder of Ibn-Ghazi',
    cost: 1,
    description:
      "Banish opponent's creature. Opponent's Arcane Power becomes 0.",
    effectOpponent: {
      arcanePower: {
        set: 0,
      },
      creature: null,
    },
    quote: null,
  },
  {
    name: 'Professor Armitage',
    cost: 0,
    description: 'Remove Taint. +2 Arcane Power, +4 Elder Defense',
    effectPlayer: {
      arcanePower: 2,
      elderDefense: 4,
    },
    quote: "There's not much time! We must consult the Necronomicon",
    unlocksAt: 23,
  },
  {
    name: 'Raid',
    cost: 0,
    description: 'Damage 7. Ignores Elder Defense and Invulnerability.',
    effectOpponent: {
      life: -7,
    },
    quote: "We're shutting this operation down.",
  },
  {
    name: 'Rise of the Deep Ones',
    cost: 4,
    description:
      'Damage 10 + Arcane Power. +2 to Arcane Power & Elder Defense.',
    effectOpponent: {
      damage: {
        base: 10,
        add: 'arcane-power',
      },
    },
    effectPlayer: {
      arcanePower: 2,
      elderDefense: 2,
    },
    quote:
      'They swarmed out from the sea - took all they wanted and left us for dead.',
    unlocksAt: 15,
  },
  {
    name: 'Sacrificial Lamb',
    cost: 2,
    description: "Gain 5 Life. Banish Opponent's Creature.",
    effectPlayer: {
      life: 5,
    },
    effectOpponent: {
      creature: null,
    },
    quote: 'By the blood of this beast, we shall be spared.',
  },
  {
    name: 'Shoggoth',
    cost: 4,
    description:
      "Summon Shoggoth. When summoned, it devours opponent's Creature. Attack 6.",
    effectOpponent: {
      creature: null,
    },
    effectPlayer: {
      creature: {
        attack: 6,
      },
    },
    quote: 'Eyes, mouths, tentacles! It produced whatever it needed.',
  },
  {
    name: 'The King in Yellow',
    cost: 2,
    description: 'Opponent loses 5 Sanity and is Tainted for 2',
    effectOpponent: {
      sanity: -5,
      taint: 2,
    },
    quote: "It's just a stage play. What harm can it do?",
  },
  {
    name: 'Tommy Gun',
    cost: 0,
    description: 'Damage 5. Ignores Elder Defense and Invulnerability.',
    effectOpponent: {
      life: -5,
    },
    quote: 'Rat-a-tat-a-tat-a-tat...',
  },
  {
    name: 'Yog-Sothoth',
    cost: 0,
    description:
      'Opponent takes Damage equal to his current Sanity. You both go insane.',
    effectOpponent: {
      damage: 'sanity',
      sanity: {
        set: -5,
      },
    },
    effectPlayer: {
      sanity: {
        set: -5,
      },
    },
    quote: null,
    unlocksAt: 19,
  },
];
