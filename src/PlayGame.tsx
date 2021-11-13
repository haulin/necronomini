import React from 'react';
import { SubpageNav } from './SubpageNav';
import './PlayGame.less';

export const PlayGame: React.FC = () => {
  return (
    <div className="play-game">
      <SubpageNav title="Play Game" />
      <div className="play-game__wrap">
        <div className="cards-opponent">Opponent's Cards</div>
        <div className="challenger player">
          <h1>Player</h1>
          <dl className="play-game__stats">
            <dt>Life: </dt>
            <dd>
              <strong>40</strong> / 40
            </dd>
            <dt>Sanity: </dt>
            <dd>25</dd>
            <dt>Taint: </dt>
            <dd>0</dd>
            <dt>Elder Defense: </dt>
            <dd>0</dd>
            <dt>Arcane Power: </dt>
            <dd>0</dd>
          </dl>
        </div>
        <div className="creature-player">Player's Creature</div>
        <div className="necronomicon">Necronomicon</div>
        <div className="creature-opponent">Opponent's Creature</div>
        <div className="challenger opponent">
          <h1>Opponent</h1>
          <dl className="play-game__stats">
            <dt>Life: </dt>
            <dd>
              <strong>40</strong> / 40
            </dd>
            <dt>Sanity: </dt>
            <dd>25</dd>
            <dt>Taint: </dt>
            <dd>0</dd>
            <dt>Elder Defense: </dt>
            <dd>0</dd>
            <dt>Arcane Power: </dt>
            <dd>0</dd>
          </dl>
        </div>
        <div className="cards-player">Player's Cards</div>
      </div>
    </div>
  );
};
