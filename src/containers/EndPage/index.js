import React, { useContext } from 'react';
import Page from '../../components/Page';
import GameContext from '../../context/context';

function EndPage() {
  const game = useContext(GameContext);
  return (
    <Page href="/" buttonText="Try again" score={game.getCurrentGain()} />
  );
}

export default EndPage;
