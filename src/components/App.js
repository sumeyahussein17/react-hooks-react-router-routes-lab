// src/components/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Movies from './Movies';
import Directors from './Directors';
import Actors from './Actors';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/directors">
        <Directors />
      </Route>
      <Route path="/actors">
        <Actors />
      </Route>
    </div>
  );
}

export default App;