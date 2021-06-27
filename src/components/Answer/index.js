import React from 'react';
import './index.scss';

function Answer({
  el, handleAnswerPressed, isShow, chosenAnswer,
}) {
  const handleClick = () => {
    handleAnswerPressed(el.answerId);
  };
  return (
    <div className="wrapper">
      <button
        type="button"
        className={
          el.answerId === chosenAnswer && isShow && !el.isCorrect
            ? 'answer_wrapper answer_wrapper-wrong' : (
              el.isCorrect && isShow
                ? 'answer_wrapper answer_wrapper-correct'
                : (
                  el.answerId === chosenAnswer ? 'answer_wrapper answer_wrapper-pressed'
                    : 'answer_wrapper'))
      }
        onClick={!chosenAnswer ? () => handleClick() : null}
      >
        <span>{el.letter}</span>
        {' '}
        {el.answerText}
      </button>
    </div>
  );
}

export default Answer;
