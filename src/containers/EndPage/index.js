import React from 'react';
import './index.css';
import Page from '../../components/Page';
import data from '../../utils/variables/index';

function EndPage({ level }) {
  const getScoreFromLevel = (lev) => {
    if (lev === 0) return 0;
    if (lev === (data.length - 1)) return data[lev].gain;
    return data[lev - 1].gain;
  };

  return (
    <Page href="/" buttonText="Try again" score={getScoreFromLevel(level)} />
  );
}

export default EndPage;
