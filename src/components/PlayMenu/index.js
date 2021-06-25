import React from 'react';
import './index.css';
import { reverseData } from '../../utils/functions';
import Level from '../Level';

function PlayMenu({ data, level }) {
  return (
    <div className="play_menu-wrapper">
      <div className="play_menu">
        {
          reverseData(data)
            .map((el) => {
              if (data[level].gain > el) {
                return (
                  <Level
                    text={el}
                    key={el}
                  />
                );
              }
              return (
                <Level
                  text={el}
                  key={el}
                  active={data[level].gain === el}
                />
              );
            })
        }
      </div>
    </div>
  );
}

export default PlayMenu;
