import React, { useState } from 'react';
import './index.css';

function Answer({
  el, handleClickPage, isShow, clicked,
}) {
  // const [pressed, setPressed] = useState(false);
  const handleClick = () => {
    // setPressed(true);
    handleClickPage(el.id);
  };

  return (
    <div>
      <button
        type="button"
        className={
        el.isCorrect && isShow
          ? 'answer_wrapper answer_wrapper-correct'
          : (
            el.id === clicked && isShow ? 'answer_wrapper answer_wrapper-wrong'
              : 'answer_wrapper')
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
