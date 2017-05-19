//
// big ass jumbotron

import React from 'react';
import './style.scss';

export default function Jumbo(props) {
  return (
    <section className="jumbotron">
      <div className="container">
        <h1>Starter kit for React</h1>
        <p>
          Includes - <span className="text-info">React</span>,
          <span className="text-muted"> Redux</span>,
          <span className="text-warning"> Webpack</span>,
          <span className="text-danger"> Sass</span>,
          <span className="text-primary"> Bootstrap</span>,
          <span className="text-success"> Babel</span> and more to come.
        </p>
      </div>
    </section>
  );
}
