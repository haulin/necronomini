import React from 'react';
import { Link } from 'react-router-dom';

import './Home.less';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Necronomicon 3.0</h1>
      <h2>Cards from the Necronomicon 1.8 Adobe Flash game.</h2>
      <nav className="home__menu">
        <ul>
          <li>
            <Link className="nav-link" to="/card-library">
              Card Library
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/play-game">
              Play Game
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
