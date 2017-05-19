//
// Main app container comp

import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Jumbo from '../../components/Jumbo'

export default class App extends Component {
  render() {
    return (
      <main className={'app-container'}>
        {/* fixed border elements */}
        <div className="fixed-border left"></div>
        <div className="fixed-border right"></div>
        <div className="fixed-border top"></div>
        <div className="fixed-border bottom"></div>

        <Navbar />
        <Jumbo />
      </main>
    );
  }
}
