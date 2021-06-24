import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import StartPage from './containers/StartPage';
import PlayPage from './containers/PlayPage';
import EndPage from './containers/EndPage';

function App() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route
            path="/game-play"
            render={(props) => (
              <PlayPage {...props} level={level} setLevel={setLevel} />
            )}
          />
          <Route
            path="/game-end"
            render={(props) => (
              <EndPage {...props} level={level} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
