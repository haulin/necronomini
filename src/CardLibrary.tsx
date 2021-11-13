import React from 'react';
import { SubpageNav } from './SubpageNav';
import { Card, cards } from './cards';
import './CardLibrary.less';

type SortBy = 'name' | 'cost';

const getCardClasses = (card: Card) => {
  const classes = ['card'];
  if (card.effectPlayer?.creature) {
    classes.push('summon');
  }
  if (card.effectOpponent?.damage || card.effectOpponent?.life) {
    classes.push('damage');
  }
  if (
    card.effectPlayer?.arcanePower ||
    card.effectPlayer?.elderDefense ||
    card.effectPlayer?.invulnerability ||
    card.effectPlayer?.life ||
    card.effectPlayer?.sanity
  ) {
    classes.push('buff');
  }
  return classes;
};

const getNextSortBy = (prevSortBy: SortBy) => {
  return prevSortBy === 'name' ? 'cost' : 'name';
};

const sortCards = (cards: Card[], sortBy: SortBy) => {
  return cards.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1));
};

export const CardLibrary: React.FC = () => {
  const [sortBy, setSortBy] = React.useState<SortBy>('name');
  const sortedCards = sortCards(cards, sortBy);

  const handleSort = () => {
    setSortBy(getNextSortBy);
  };

  return (
    <div className="card-library">
      <SubpageNav title="Card Library">
        <p>
          <button className="button" onClick={handleSort}>
            Sorted by: {sortBy}
          </button>
        </p>
      </SubpageNav>
      <ul className="cards-wrap">
        {sortedCards.map((card) => (
          <li className={getCardClasses(card).join(' ')}>
            <h1>{card.name}</h1>
            <b>{card.cost}</b>
            <p>{card.description}</p>
            <i>{card.quote}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};
