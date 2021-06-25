import React from 'react';
import './index.css';

function Answer({
  el, handleClickPage, isShow, clicked, pressed, setPressed,
}) {
  const handleClick = () => {
    handleClickPage(el.id);
    setPressed(el.id);
  };

  return (
    <div>
      <button
        type="button"
        className={
          el.id === pressed
            ? 'answer_wrapper answer_wrapper-pressed' : (
              el.isCorrect && isShow
                ? 'answer_wrapper answer_wrapper-correct'
                : (
                  el.id === clicked && isShow ? 'answer_wrapper answer_wrapper-wrong'
                    : 'answer_wrapper'))
      }
        onClick={() => handleClick()}
      >
        <span>{el.letter}</span>
        {' '}
        {el.text}
      </button>
    </div>
  );
}

export default Answer;
