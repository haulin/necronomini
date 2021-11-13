import React from 'react';
import { Link } from 'react-router-dom';
import './SubpageNav.less';

interface SubpageNavProps {
  title: string;
}

export const SubpageNav: React.FC<SubpageNavProps> = ({ children, title }) => {
  return (
    <nav className="subpage-nav">
      <Link className="nav-link" to="/">
        &lt; Home
      </Link>
      <h1>{title}</h1>
      {children}
    </nav>
  );
};
