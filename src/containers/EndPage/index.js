import React from 'react';
import './index.css';
import Page from '../../components/Page';
import configData from '../../config/config.json';

function EndPage({ level }) {
  const getScoreFromLevel = (lev) => {
    if (lev === 0) return 0;
    if (lev === (configData.data.length - 1)) return configData.data[lev].gain;
    return configData.data[lev - 1].gain;
  };

  return (
    <Page href="/" buttonText="Try again" score={getScoreFromLevel(level)} />
  );
}

export default EndPage;
