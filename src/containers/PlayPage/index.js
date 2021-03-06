import React, { useContext, useEffect, useState } from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Answer from '../../components/Answer';
import PlayMenu from '../../components/PlayMenu';
import GameContext from '../../context/context';

function PlayPage() {
  const [isShow, setIsShow] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState(false);
  const [question, setQuestion] = useState(null);
  const [futureGain, setFutureGain] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState('');

  const history = useHistory();
  const game = useContext(GameContext);

  const showTrueAnswer = () => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  };

  const showFalseAnswer = () => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  };

  const handleAnswerPressed = (id) => {
    const message = game.verifyAnswer(id);
    setChosenAnswer(id);
    showTrueAnswer();
    if (message === 'Victory') {
      setTimeout(() => {
        history.push('/game-end');
      }, 3000);
    } else if (message === 'Loose') {
      showFalseAnswer();
      setTimeout(() => {
        history.push('/game-end');
      }, 3000);
    } else {
      setTimeout(() => {
        setIsShow(false);
        setChosenAnswer(false);
        setQuestion(game.getCurrentQuestion());
        setFutureGain(game.getFutureGain());
      }, 3000);
    }
  };

  useEffect(() => {
    game.startGame();
    setQuestion(game.getCurrentQuestion());
    setFutureGain(game.getFutureGain());
  }, []);

  return (
    <>
      {
        question
          ? (
            <div className="play_wrapper">
              <div className="play_field">
                <h2 className="play_task">{question.questionText}</h2>
                <div>
                  <div className="play_answers">
                    {
                  question.answers
                    .map((el) => (
                      <Answer
                        el={el}
                        key={el.answerId}
                        handleAnswerPressed={handleAnswerPressed}
                        isShow={isShow}
                        chosenAnswer={chosenAnswer}
                      />
                    ))
                }
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="play_menu_open"
                onClick={() => setShowMobileMenu(true)}
              >
                <FaIcons.FaBars />
              </button>
              <PlayMenu
                data={game.getAllGainLevels()}
                gain={futureGain}
                showMobileMenu={showMobileMenu ? 'open'
                  : ''}
                setShowMobileMenu={setShowMobileMenu}
              />
            </div>
          )
          : 'Loading..'
      }
    </>
  );
}

export default PlayPage;
