# Useful resources

- https://mastery.games/post/state-machines-in-react/
- https://game-icons.net/
- https://lovecraft.fandom.com/wiki/Byakhee
- https://www.toptal.com/designers/subtlepatterns/tag/dark/page/7/
- https://github.com/yurkth/stsmapgen
- https://www.reddit.com/r/gamedev/comments/fedcvu/procedural_map_generation_inspired_by_slay_the/
- card games: Dream_Quest, Nowhere Prophet,
- hours spent: 17

# Quick game mode

- unlocks after defeating 1 boss
- similar to challenge mode
- only use unlocked cards
- get a combination of unlocked upgrades
- some challenges unlock after defeating more bosses
  - e.g. challenges using all cards

# Achievements

- defeat a boss
  - unlocks quick game
- win 10 battles
  - unlocks challenges
  - win 25 battles unlocks challenges with all cards?
- deal 25+ dmg in a single attack
- defeat opponent while insane
  - unlocks sanity skill tree
- defeat opponent with max life remaining
- opponent gets killed by a creature
  - unlocks creature skill tree
  - kill 20 creatures unlocks creature skill tree level 3?
- finish a career mode on high difficulty

# Career mode

- 3 levels of difficulty
  - easy
    - more gold drops
    - opponents have lower health and sanity
    - opponents use fewer upgrades
    - opponents play random cards
  - medium
    - opponents have some strategy
  - hard
    - less gold drops
    - opponents have more health and sanity
    - opoonents use more upgrades
    - opponents strategize
- procedurally generated map (similar to Inscryption)
  - player must go forward and make path choices
  - each map can have tasks to do
    - accumulate X gold / health / sanity
    - find 3 creature cards
    - kill a particular opponent
    - don't battle anyone else
    - similar to challenges
  - when task is complete before encountering boss, gain some upgrades
- start with 3 cards in hand
- start with ~15 cards in deck
- gain a free card after every win (pick from 3)
- gain gold after every win (equal to overflow damage?)
- persistent health / sanity?
- if you die, on the next run you can find your remains and pick up some cards and upgrades
- choose a starting character with different abilities and starting decks
  - characters unlock by succeeding in challenges
  - one with limited deck slots
  - any combination of upgrades
  - limited health and sanity
  - no arcane stuff / no physical damage
  - lets opponents go first
  - can pick two upgrades every time
  - upgrades are cheaper
  - gains more gold for every battle

## Path tiles

- gain a card for free or gold
- gain free gold
- buff a card
- make your own card
- combine 2 cards into one
- destroy a card in exchange for gold
- upgrades for free or gold
- sell an upgrade for gold
- restore health for free or gold
- restore sanity for free or gold
- minion encounter
  - skip a fight for gold
- special encounter
  - carry out a task
  - gives a specific card
  - play with a different pre-made/draft deck
  - opponent uses your deck
- unknown (any of the above - not boss)
- boss encounter

## Encounters

- some card slots might be obstructed
- might be given a special card just for this fight
- opponents have varying stats
- bosses have much more health and yield more gold & free card
  - have multiple lives
  - steals your gold
  - cannot take more than 5 damage at a time
  - every time they take damage, reduce 2 taunt
  - has an unkillable creature
- play 1 card or discard it for extra sanity

## Upgrades for gold

- buy a card
  - get more upgrades offered (3, 4, 6, 8?)
- upgrades only used once per fight might be used up and you have to buy them again
- start with 4 cards in hand
  - start with 5 cards in hand
    - start with 6 cards in hand
    - lower cost of all cards by 1
    - increase cost of all opponent's cards by 1
  - play additional card once per fight?
    - twice & thrice?
  - discard two cards each turn
  - discarding a card reduces the cost of the next draw
  - play the same card twice once per fight
  - enable 1 obstructed card slot once per fight
    - enable all
  - replace all starting cards with a new draw
  - steal random opponent's card once per fight
  - opponent has to discard a card once per fight
  - pick the next card to draw from 3 and shuffle the rest
    - from 4
      - from 5
  - draw an extra card once per fight
- gain 5 starting health
  - gain 10 starting health
    - gain 20 starting health
      - gain 40 starting health
    - regenerate 1 health each turn
      - regenerate 2 health each turn
    - every successful arcane attack gives you 2 health
      - every successful arcane attack gives you 4 health
    - discarding a card adds +3 health
      - discarding a card adds +6 health
    - gain 5 health once per fight
      - gain 10 health once per fight
    - opponent loses 5 health once per fight
    - gain health when player/opponent/any creature is played/killed
- gain 2 starting sanity
  - gain 4 starting sanity
    - gain 8 starting sanity
      - gain 16 starting sanity
    - gain 1 sanity each turn
      - gain 2 sanity each turn
    - gain sanity when player/opponent/any creature is played/killed
    - increase minimum sanity to -5
    - gain 4 sanity once per fight
      - gain 8 sanity once per fight
    - opponent loses 4 sanity once per fight
  - discarding a card adds +1 sanity
    - discarding a card adds +3 sanity
- gain 1 starting ED / AP
  - gain 2 starting ED / AP
    - gain 4 starting ED / AP
      - gain 8 starting ED / AP
    - gain ED/AP when player/opoonent/any creature is played/killed
    - start game with invulnerability
    - gain 4 ED / EP once per fight
      - gain 8 ED / EP once per fight
    - remove opponent's ED / EP once per fight
      - remove opponent's ED & EP once per fight
    - increase all your damage dealt by 1
      - by 2
- opponent starts with 1 taint
  - opponent starts with 2 taint
    - opponent starts with 4 taint
    - lower taint by 1 each turn
    - remove taint every time you play/kill a creature
    - taint opponent every time you play/kill a creature
    - remove your taint once per fight
- reduce opponent's creature attacks by 1
  - by 2
    - by 4
  - increase player's creature attacks by 1
    - by 2
      - by 4
  - gain an extra creature slot
    - start fights with a creature X
      - creature Y
        - creature Z
  - your creature attacks twice
  - if you have two of the same creatures, they both get +2 attack
  - all your creatures ignore opponent's creatures
  - all your creatures ignore ED
  - return creature into opponent's hand once per fight
  - kill opponent's creature once per fight
  - summon creature X once per fight
- wins yield extra gold
  - even more gold
  - killing / banishing a creature yields extra gold
  - every arcane attack yields extra gold
  - gain gold when player/opoonent/any creature is played/killed
- see more tiles on the map
  - see type of unknown tiles on the map
  - reduce cost of upgrades
  - get more points to make better custom cards

# Extra cards

- play something and opponent skips turn
- attack without the creature retaliating
- draw a card and reduce its cost to 0
- creature attack enhanced by your AP
- when creature dies, gain ED
- creature that temporarily reduces your ED
- creature that cannot be ignored
- creature that attacks twice
- creature that gets back in your hand when killed
- creature that yields gold when it attacks
- creature that spawns another one when killed
- creature that improves after 1 turn / each turn
- creature that kills opponent creature if it blocks it
- creature that gives you another creature in your hand when
- creature with a random buff (resolved when drawn?)
- creature that gets stronger if it replaces another creature
- creature that automatically spawns from hand if previous creature gets killed
- creature that heals when damaged
- creature whose attack equals the amount of creatures that died this battle
- creature that dies after the first counter-attack
- creature that dies after N turns
- creature with enhanced/lowered defense
- creature that damages opponent's creature each time it attacks
- return a creature into opponent's hand
- mix & match all the stats and mechanics
- deal damage and kill a creature if it has less than X damage
  - if player has less than X ED
- your creature gets +2 attack and opponent's -2
- damage opponent and his creature gets -2
- add invulnerability. if you already have it, add ED instead
- swap your AP with ED
- copy your ED to AP
- remove 5 health and add 10 ED
- deal damage multiple times, e.g. 3x2
- steal opponent's creature
- swap creatures between player and opponent
- one time use cards that get removed from your deck when you play them
- disable opponents card slot

# After run stats

- damage dealt
- damage received
- creatures summoned
- creatures destroyed
- maximum damage in one attack
- cards played
- cards discarded
- cards found
- fights won
- bosses defeated
- places visited
- abilities used
- gold received
- gold spent
- amount of upgrades taken

# Overall stats

- all after run stats combined
- things unlocked (challenges, upgrades, starting characters, ...)
- times quick game played
- times career mode finsihed
- times died
- times found remains
