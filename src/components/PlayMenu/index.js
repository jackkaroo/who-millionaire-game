import React from 'react';
import './index.css';
import * as AiIcons from 'react-icons/ai';
import Level from '../Level';

function PlayMenu({
  data, gain, showMobileMenu, setShowMobileMenu,
}) {
  return (
    <div className={`play_menu-wrapper ${showMobileMenu}`}>
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
      <button
        type="button"
        className="play_menu-button"
        onClick={() => setShowMobileMenu(false)}
      >
        <AiIcons.AiOutlineClose />
      </button>
    </div>
  );
}

export default PlayMenu;
