import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import StartPage from './containers/StartPage';
import PlayPage from './containers/PlayPage';
import EndPage from './containers/EndPage';
import GameContext from './context/context';
import Game from './game/game';

function App() {
  return (
    <GameContext.Provider value={new Game()}>
      <Router>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/game-play" exact component={PlayPage} />
          <Route path="/game-end" exact component={EndPage} />
        </Switch>
      </Router>
    </GameContext.Provider>
  );
}

export default App;
