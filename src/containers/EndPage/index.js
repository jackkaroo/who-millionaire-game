import React from 'react';
import './index.css';
import Page from '../../components/Page';
import configData from '../../config/config.json';

function EndPage({ level }) {
  const getScoreFromLevel = (lev) => configData.data[lev].gain;

  return (
    <Page href="/" buttonText="Try again" score={getScoreFromLevel(level)} />
  );
}

export default EndPage;
