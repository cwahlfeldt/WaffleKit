//
// Main app container comp

import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Jumbo from '../../components/Jumbo'

export default class App extends Component {
  render() {
    return (
      <main className={'app-container'}>
        <Navbar />
        <Jumbo />
      </main>
    );
  }
}
