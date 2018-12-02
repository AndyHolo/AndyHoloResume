import React, { Component } from 'react';
import './App.css';
import Head from './components/head-component';
import Background from './components/background-component';

class App extends Component {
  render() {
    return (
      <Background>
        <Head></Head>
      </Background>
    );
  }
}

export default App;
