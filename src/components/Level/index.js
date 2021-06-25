import React from 'react';
import './index.css';
import { numberWithCommas } from '../../utils/functions';

function Level({ text, active }) {
  return (
    <div className={
      active
        ? 'level_wrapper level_wrapper-active'
        : (active === undefined
          ? 'level_wrapper level_wrapper-disable'
          : 'level_wrapper')
    }
    >
      $
      {numberWithCommas(text)}
    </div>
  );
}

export default Level;
