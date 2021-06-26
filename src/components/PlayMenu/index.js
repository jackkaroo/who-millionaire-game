import React from 'react';
import './index.css';
import Level from '../Level';

function PlayMenu({ data, gain }) {
  return (
    <div className="play_menu-wrapper">
      <div className="play_menu">
        {
          data
            .map((el) => {
              if (gain > el) {
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
                  active={gain === el}
                />
              );
            })
        }
      </div>
    </div>
  );
}

export default PlayMenu;
