# Useful resources

- https://game-icons.net/
- https://opengameart.org/art-search-advanced?keys=lovecraft
- https://unsplash.com/s/photos/noir
- https://app.wombo.art/
- https://www.starryai.com/
- https://www.toptal.com/designers/subtlepatterns/tag/dark/page/7/

- https://lovecraft.fandom.com/wiki/Byakhee
- https://en.wikipedia.org/wiki/List_of_mental_disorders
- https://www.giantbomb.com/necronomicon/3055-2430/games/
- https://www.youtube.com/watch?v=azBJXksPvzU - Construct 3 trading card game
- card games: Dream_Quest, Nowhere Prophet, Tainted Grail

- https://mastery.games/post/state-machines-in-react/
- https://github.com/yurkth/stsmapgen
- https://www.reddit.com/r/gamedev/comments/fedcvu/procedural_map_generation_inspired_by_slay_the/

- play SWF online: https://ruffle.rs/demo/
  https://dagobah.net/flash/Necronomicon_Book_of_Dead_Names.swf
- hours spent: 29

# Quick game mode

- unlocks after defeating 1 boss
- **similar to challenge mode**
- only use unlocked cards
- get a combination of unlocked upgrades
- some challenges unlock after defeating more bosses
  - e.g. challenges using all cards
- puzzle challenges
  - e.g. see opponent's future cards, defeat them with yours
- able to share custom game config

# World modifiers

- 3 levels of difficulty
  - easy
    - more gold drops
    - opponents have lower health and sanity
    - opponents use fewer upgrades
    - **opponents play random cards**
  - medium
    - opponents have some strategy
  - hard
    - less gold drops
    - opponents have more health and sanity
    - opoonents use more upgrades
    - opponents strategize
- 50% of encounters are special
  - 100%
  - encounters are drafts
- always draw card X at start
- **start with different amount of gold / life / sanity**
- skip first N path tiles

# Achievements

- defeat a boss
  - unlocks quick game
- win 10 battles
  - unlocks challenges
  - win 25 battles unlocks challenges with all cards?
- deal 25+ dmg in a single attack
  - unlocks new opponents
- kill 5 opponents of the same class
- overkill an opponent by 10+ damage
- defeat opponent while insane
  - unlocks sanity skill tree
- defeat opponent with max life remaining
- opponent gets killed by a creature
  - unlocks creature skill tree
  - kill 20 creatures unlocks creature skill tree level 3?
- finish a career mode on high difficulty
- get 10 achievements

# Career mode

- **procedurally generated map (similar to Inscryption)**
  - player must go forward and make path choices
  - path made from an encounter deck? so it can be manipulated?
  - each map can have tasks to do
    - similar to challenges
    - accumulate X gold / health / sanity
    - find 3 creature cards
    - kill a particular opponent
    - don't battle anyone else
    - deliver message from one node to another
    - tasks that teach other cultists how to fight:
      - deal X damage with one card
      - summon shoggoth X times
      - finish a game with more sanity than you started
      - win a fight in X turns
      - get insane and recover in a fight
      - acquire a sum of 10 AP + ED
      - taint opponent for at least 5
      - win a fight with at least 20 cards in your deck
      - next time you encounter a cultist house, be given rewards + new tasks
      - if you haven't completed a task, don't be allowed to rest, unless you're a high level
  - when task is complete before encountering boss, gain some upgrades
  - when task is complete, discount upgrades in shops or get a special one
- **start with 3 cards in hand**
- **start with ~15 cards in deck**
- gain a free card after every win (pick from 3)
- **gain gold after every win (equal to overflow damage?)**
- persistent health / sanity?
- if you die, on the next run you can find your remains and pick up some cards and upgrades
- **choose a starting character with different abilities and starting decks**
  - characters unlock by succeeding in challenges
  - characters built up with a combination of upgrades
  - characters play on different difficulty levels
  - characters affect some cards functions
    - e.g. each heal heals +2
    - each physical damage +2
    - double numbers but 33% chance to do nothing
    - each creature summon gives you +1 ED
    - every taint decrease makes opponent skip turn
  - every character has a unique card?
  - randomly generated character
  - choose a difficulty
- finishing a run unlocks another level of difficulty

## Starting characters

- characters have ability slots
  - some cards allow you to use them
  - one taken by unique character card
  - put cards into the slots and remove from deck
- gold related
  - bad negotiator - items are more expensive
  - lucky guy - finds more gold
  - unable to pay off fights
  - all upgrades are free
- sanity related
  - cannot heal or restore sanity outside of fights
  - sadist - excess damage is turned to sanity
  - each card you play drains 2 extra sanity
  - cards cost double sanity
- life related
  - superstitious - starts with +13 life, if at exactly 13 life, dies
  - starts with different amount of health / sanity / card slots
  - every damage taken only takes 1 life, max life capped at 6
  - each time a creature is killed gain / lose 1 life
  - one with limited max deck slots / health / sanity
  - each card you play drains 1 life
  - heals 5hp after every fight
  - gaining ED also gains life
- card related
  - uses a different set of cards
    - e.g. each attack reduces AP to 0, but cards are cheap and add a lot of AP
  - steals / bans cards from opponent at the start of the fight
  - buffs a certain card in each fight (stacks over whole run)
  - has foresight - can see the next N cards in his deck
  - top decker - cards drawn this turn cost 1 less
  - forgets one card after every battle
  - always starts with card X in hand
  - always starts with the deck sorted alphabetically (or manually)
  - gambler - can reroll shop items
  - cannot use upgrades
- map related
  - explorer - longer maps with more alternatives
  - can see decks of opponents on map
  - all map tiles are unknown
- preserves his stats between the fights / does not
- starts as level 10 with deck and upgrades already built (badly)
- cannot get some insanities / unique insanities
- suicidal - if insane kill themselves
- always starts with taint
- mirrors opponent's passives each game
- no arcane stuff / no physical damage
- lets opponents go first
- can pick two upgrades every time
- upgrades are cheaper

## Path tiles

- can only see 1 column of tiles in front
  - increasable by an upgrade
  - path tiles should have special interactions with some characters or cards
- **gain a card for free or gold or life or sanity**
- **gain free gold**
- buff a card
- make your own card
- combine 2 cards into one
- destroy a card in exchange for gold
- get all the cards into your deck
- **upgrades for free or gold**
- sell an upgrade for gold
- **restore health for free or gold**
- **restore sanity for free or gold**
- **minion encounter**
  - skip a fight for gold
- cultist house - carry out a task
- special encounter
  - carry out a task
  - gives a specific card
  - play with a different pre-made/draft deck
  - opponent uses your deck
  - opponent leaves in 15 turns
- high point - allows to reveal more path tiles
- taxi - jump anywhere forward on the map
- unknown (any of the above - not boss)
- boss encounter
- remains of the previous play(s?) if defeated

## Encounters

- **opponents have varying stats and decks**
- **play 1 card or discard it for extra sanity / courage**
- choose a strategy before a fight
  - apply a buff from your deck
  - apply a nerf
  - heal 5 health
  - summon a creature
- losing all your sanity will randomly choose one of your insanity effects
  - e.g. shuffle negative cards into your deck (buff opponent, lose health, etc)
- have 2 slots for statuses that cards create (1 buff & 1 nerf)
  - like invulnerability or do double damage etc
  - playing another status card will replace current status
  - cards exist to remove opponent's status
  - preparation round draws 3 status cards and let players play one of them before the fight
- encounters can have modifiers
  - some card slots obstructed
  - players get a special card just for this fight
  - might win or lose a random card from your deck
  - limited max/min AP/ED/taint
  - limited max damage
  - no creatures
  - creature stats doubled
  - bans 2 cards from your deck
  - almost any buff cards
  - earlier/later/different sudden death
- bosses have much more health and yield more gold & free card
  - can be a party - must defeat one after another
  - steals your gold
  - cannot take more than 5 damage at a time
  - cannot take damage if it has a creature
  - if hit for more than 5 damage, summons a creature
  - can only take arcane/physical damage
    - the other type of damage buffs them
  - does not have life, can be killed by taking damage 20 times
  - every time they take damage, reduce 2 taint
  - has an unkillable creature
  - if their life gets below X, do Y
  - swap their AP & ED every turn
  - mix all other cards into your deck
  - start with megalomania, but have a lot of taint removal
  - shapeshifter - different effects based on their remaining life
  - cheater - different passive each turn
  - collector - has all the cards
  - final boss has mega health, but if you're losing, other characters you had positive encounters with come for help, e.g. heal you, give you powerful cards, unfreeze slots etc
- after turn 15 sudden death starts - each player increases taint, AP, and decreases ED each round by 1
- some encounters are only available if you have enough cards/hp/AP
- non-arcane stuff costs courage
  - you gain courage when your creature dies / when you take damage / change stat
- every N-th turn is a lucky turn?
- killing a creature / opponent yields souls

## Upgrades for gold/life/sanity

- **buy a card**
  - get more upgrades offered (3, 4, 6, 8?)
  - some upgrades are discounted (50% off?)
- upgrades only used once per fight might be used up and you have to buy them again
- you might need to unlock an upgrade tree first completing a task
- **start with 4 cards in hand**
  - start with 5 cards in hand
    - start with 6 cards in hand
    - lower cost of all cards by 1
    - increase cost of all opponent's cards by 1
  - increase hand limit
  - discard two cards each turn
  - enable 1 obstructed card slot once per fight
    - enable all
  - replace all starting cards with a new draw
  - steal random opponent's card once per fight
  - opponent has to discard a card once per fight
  - cards can be used only once per fight. when run out, highest life wins
  - **pick the next card to draw from 3 and shuffle the rest**
    - from 4
      - from 5
  - draw an extra card once per fight
  - **1 of opponent's cards is revealed at all times**
    - 2 cards
      - 3 cards
  - start fight over from the beginning
- **gain 5 maximum health**
  - gain 10 maximum health
    - gain 20 maximum health
      - gain 40 maximum health
    - each non-damage card played regenerates 1 health
      - 2 health
        - any card played
    - every successful arcane attack gives you 2 health
      - every successful arcane attack gives you 4 health
    - **discarding a card adds +3 health**
      - discarding a card adds +6 health
    - gain 5 health once per fight
      - gain 10 health once per fight
    - opponent loses 5 health once per fight
    - gain health when player/opponent/any creature is played/killed
    - do +5 damage if opponent's health is below 10
    - gain 20 health if about to die
- **gain 2 maximum sanity**
  - gain 4 maximum sanity
    - gain 8 maximum sanity
      - gain 16 maximum sanity
    - gain 1 sanity each turn
      - gain 2 sanity each turn
    - gain sanity when player/opponent/any creature is played/killed
    - **increase minimum sanity to -5**
    - gain 4 sanity once per fight
      - gain 8 sanity once per fight
    - opponent loses 4 sanity once per fight
  - **discarding a card adds +1 sanity**
    - discarding a card adds +3 sanity
- **gain 1 starting ED / AP**
  - gain 2 starting ED / AP
    - gain 4 starting ED / AP
      - gain 8 starting ED / AP
    - gain ED/AP when player/opoonent/any creature is played/killed
    - **start game with invulnerability**
    - ED / AP persists between matches
    - gain 4 ED / EP once per fight
      - gain 8 ED / EP once per fight
    - remove opponent's ED / EP once per fight
      - remove opponent's ED & EP once per fight
    - increase all your damage dealt by 1
      - by 2
  - 10% chance of a critical physical attack
    - 20%
      - 40%
        - 80%
- **opponent starts with 1 taint**
  - opponent starts with 2 taint
    - opponent starts with 4 taint
    - lower taint by 1 each turn
    - remove taint every time you play/kill a creature
    - taint opponent every time you play/kill a creature
    - remove your taint once per fight
    - each time your taint changes, apply same amount to opponent
- reduce opponent's creature attacks by 1
  - by 2
    - by 4
  - increase player's creature attacks by 1
    - by 2
      - by 4
  - gain an extra creature slot
    - **start fights with a creature X**
      - creature Y
        - creature Z
  - your creature attacks twice
  - if you have two of the same creatures, they both get +2 attack
  - all your creatures ignore opponent's creatures
  - all your creatures ignore ED
  - return creature into opponent's hand once per fight
  - kill opponent's creature once per fight
  - summon creature X once per fight
- each time you take damage, increase your AP / ED
  - at the end of each turn opponent takes 1 damage and player heals 1 life
    - 2 damage / life
- wins yield extra gold
  - even more gold
  - killing / banishing a creature yields extra gold
  - every arcane attack yields extra gold
  - gain gold when player/opoonent/any creature is played/killed
- you can undo 1 turn
  - 2 turns
    - 3 turns
- see more tiles on the map
  - jump to any visible tile forward (can skip tiles)
  - see type of unknown tiles on the map
  - reduce cost of upgrades
  - get more points to make better custom cards
  - increase map sight range
  - unveil locations up to 5 moves farther than usual (one time)

## Card upgrades

- opponent doesn't draw a card next turn
- discarding a card reduces the cost of the next draw
- draw a card and reduce its cost to 0
- opponent skips turn
- search your deck for a specific card
- upgrade one time use to exhaust - card can be used only once per battle
  - upgrade to be used after 20, 10, 5, 2 turns / encounters
  - upgrade to normal cycle
  - upgrade to shuffle back to draw pile
- guaranteed to draw this card in the starting hand
  - guaranteed to draw in every hand (e.g. ability)
- after playing gets back to your hand (once)
- drawing this card triggers a buff
- playing this card gives you X gold
- this card can be played instead of forced discard
- reduce the cost of this card
- upgrade a numeric stat on the card (e.g. increase base damage)

# Extra cards

- mix & match all the stats and mechanics
- unique character cards
  - card that shapeshifts into player's / opponent's last played card
  - swap hands with opponent
  - creature with a random buff (resolved when drawn?)
  - card whose damage increases the longer you hold it in hand
  - first time played no effect, second time deal 20 damage
  - the next card you play costs zero
  - ignore forced discard, instead play this card
  - a card that gets stronger if you have certain other cards in the deck
  - a card that gets very strong if certain criteria are met, e.g.
    - have 10 AP and 10 ED, deal 30 damage
    - have 0 AP, ED, taint, dispell opponent
    - opponents creature is stronger than yours, banish it and taint them
  - cards with 2 effects, small negative, big positive, resolved at random
  - cards that can be played together with other cards and they get stronger with each one in hand, get a starting 5?
- creature cards:
  - **creature that spawns another one when killed**
  - creature that gives you another creature in your hand when it dies
  - creature that gets back in your hand when killed
  - creature that restores 1 life and 1 sanity for you every turn
  - creature that is strong, but reduces your life every turn
  - creature that temporarily reduces your ED
  - creature attack enhanced by your AP
  - creature that cannot be ignored
  - creature that attacks twice
  - creature that has a taunt
  - creature that explodes when killed, damaging opponent
  - creature that regenerates if you have at least X AP
  - creature that improves after 1 turn / each turn
  - creature that kills opponent creature if it blocks it
  - **creature that gets stronger if it replaces another creature**
  - creature that automatically spawns from hand if previous creature gets killed
  - creature that heals when damaged
  - creature whose attack equals the amount of creatures that died this battle / courage
  - **creature that dies after the first counter-attack**
  - creature that dies after N turns, but cannot be banished
  - creature with enhanced/lowered defense
  - creature that damages opponent's creature each time it attacks
  - creature that shapeshifts into other creatures each turn
  - creature gets replaced with another upon death if you top deck it
  - return a creature into opponent's hand
  - berserk - attack with 2x your creature's attack, then it dies
  - damage opponent and his creature gets -2
  - damage opponent and your creature gets +2
  - damage opponent and stun their creature (no counter-attack for 1 turn)
  - your creature gets 2x attack next turn
  - your creature becomes invisible
  - steal opponent's creature
  - swap creatures between player and opponent
- damage cards:
  - deal damage and kill a creature if it has less than X damage
    - if player has less than X ED
  - deal damage equal to opponent's AP
  - deal damage multiple times, e.g. 3x2
  - if the attack is unsuccessful, attack again with extra power
  - the next damage you should suffer transforms into ED/AP
  - deal damage 2x opponent's last card's cost
  - deal damage 3x AP, but remove all AP afterwards
  - deal damage and sacrifice some player's life
  - 5 damage, if opponent's last card dealt damage, do 10 damage
  - both players reveal top deck card, deal double damage if player's is higher cost
  - top-deck against opponent comparing cost until you lose, attacking for 5 for every win
  - deal 5+AP damage, top deck a card, if it's cost is 3 or higher, deal double attack
  - card's damage increases each time player gets hit
  - deal X damage, shuffle card to opponent's deck with -1 damage and +1 cost
- misc mechanics:
  - card that triggers an effect when drawn (will be visible to both)
  - shuffle some cards into opponent's deck
  - double the amount of your weakest stat (AP, ED, taint, poison, life, ...)
  - card that allows to use an ability. different characters can have several different ones.
  - overdraw 3 cards, discard 3 cards, play another card
  - card that returns to your hand after play once
  - steal opponent's top-deck card, play it or discard it
  - force opponent to play a certain type of card
  - force opponent to show their hand and discard a specific card
  - one time use cards that get removed from your deck when you play them
  - card that alternates effects, e.g. weaker first time, more powerful on 2nd play
  - if discard pile size is odd do X, if even do Y
  - add a curse to random opponent card - if not played next turn, do X damage
  - gain AP equal to your hand size
  - resolve random effects on draw
  - increase / decrease a counter or a number stat on buff / nerf
  - add invulnerability. if you already have it, add ED instead
  - set your AP & ED to the highest of the two
  - swap your AP with ED
  - convert your ED to AP
  - if your AP / ED / taint is 0, bump it to 4, remove equivalent from opponent
  - remove 5 health and add 10 ED
  - for every 2 ED gain 1 AP
  - double opponent's taint
  - flashbang - opponent shuffles hand and picks one at random
  - unplayable card. trashes your deck, but gives some buff to progression
  - different effect based on environment being dark or light
  - toggle light for synergy
- buffs
  - invulnerability - maybe this is another stat? fortify? e.g. fortify 2 needs 2 attacks to break, each attack lowers by 1
  - heart stat - if hp lowered below 1, remove 1 heart. battle ends on 0 hearts
  - poison - another stat - lower life by X, decreases every turn, restoring life
  - shield stat - gets lowered by receiving damage
  - focus stat - enhances next attack and gets used up
  - thorns - deal damage when attacked
  - vampire - each successful attack heals you for 1
  - infected - opponent gains taint when they attack
  - delusions of mediocrity - get extra 20 life while the buff is on
  - cruel - do double damage while the opponent's life is 20 or less
  - underdog - +2 damage if opponent has more life than player
  - discount - all cards cost 1 less to play
  - ethereal - do not suffer damage from physical attacks
  - poisoned blade - each successful attack increases opponent's taint by 1
  - each unsuccessful attack increases player's AP by 2
  - when defeated, stay at 1 life, remove this buff
  - -3 damage received for odd amounts (synergy with superstitious)
  - +3 to your highest stat
  - all banish cards also summon a Byakhee
  - all X cards get replaced by Y
  - damage doubled if sanity below 10 / if (player or opponent) tainted
  - when creature dies, gain ED
  - when you have no creature, your min AP & ED is 2
  - creature attacks with extra power for each of your missing HP under 10
  - if opponent is nerfed, your min AP is 3
  - creature gets more powerful if insane / sanity under 10
  - creature yields gold when it attacks
  - minimum creature strength is now 6
  - if your creature is banished, opponent's is banished, too
  - playing a card that increases opponent's taint makes opponent skip turn
  - your attacks are enhanced by your taint
  - if you don't have any ED, you gain 3 AP while buff active
  - AP counter - increment each turn, when replaced / destroyed, apply as much AP
  - curse - counter, if not lifted in 2 turns, take 10 damage, remove curse
  - received attack counter - when lifted deal count damage (synergy with multi-shots)
  - counter for opponent's taint
  - counter of received damage, if exactly 10, 20, or 30, receive it again
  - gain 1 AP every turn when under 10 HP
  - whenever your AP changes, deal 2 attack
  - when you gain life, gain 1 ED, when you lose life, lose 1 ED
  - gain 4x the amount of souls
- nerfs
  - attack without the creature retaliating
  - distracted creature - every other attack doesn't retaliate
  - every opponent's attack decreases their life by 2
  - if opponent has no ED, deal double damage
  - your creature gets +2 attack and opponent's -2
  - creature blocks attacks of creatures of any power
  - hunter's mark - removal of opponent's creature deals dmg equal to creature's attack
  - creature costs 1 sanity each turn
  - remove enemy's card from their deck while nerf active
  - decreasing stats also causes damage
  - disable opponents card slot
  - opponent can't gain life
  - opponent suffers -1 ED when you successfully attack
  - stop opponent gaining AP
  - disable opponent's buff slot

# After run stats

- make a story out of the run
- cards played
- cards discarded
- cards found
- creatures summoned
- creatures destroyed
- damage blocked
- damage dealt
- damage received
- maximum damage in one attack
- life healed
- regular fights won
- special fights won
- bosses defeated
- places visited
- tasks fulfilled
- tiles visited
- abilities used
- gold received
- gold spent
- amount of upgrades taken
- time spent playing

# Overall stats

- all after run stats combined
- things unlocked (challenges, upgrades, starting characters, ...)
- times quick game played
- times career mode finsihed
- times died
- times found remains
- times each card was played
