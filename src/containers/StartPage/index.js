import React from 'react';
import './index.css';
import Page from '../../components/Page';

function StartPage() {
  return (
    <>
      <Page href="/game-play" buttonText="Start" isStart />
      <div className="hexagon" />
    </>
  );
}

export default StartPage;
