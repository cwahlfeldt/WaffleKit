//
// Navbar component

import React from 'react';
import './style.scss';

export default function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
      <a className="navbar-brand" href="#">{'<WaffleKit />'}</a>
      <button className="btn menu-burger">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}
