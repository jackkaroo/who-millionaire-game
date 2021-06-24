import React, { useEffect, useState } from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';
import Answer from '../../components/Answer';
import Level from '../../components/Level';
import configData from '../../config/config.json';
import { reverseData } from '../../utils/functions';

function PlayPage({ level, setLevel }) {
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [pressed, setPressed] = useState(false);

  const history = useHistory();

  const checkAnswer = (id) => {
    console.log(correctAnswer);
    console.log(id);
    if (correctAnswer === id) return true;
    return false;
  };

  const showTrueAnswer = () => {
    setTimeout(() => {
      setPressed(null);
      setIsShow(true);
    }, 1000);
  };

  const showFalseAnswer = () => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  };

  const handleClickPage = (text) => {
    setClicked(text);
    showTrueAnswer();

    if (checkAnswer(text)) {
      if (level !== configData.data[configData.data.length - 1].levelId) {
        setTimeout(() => {
          setLevel(level + 1);
          setIsShow(false);
        }, 3000);
      } else {
        setTimeout(() => {
          history.push('/game-end');
        }, 3000);
      }
    } else {
      showFalseAnswer();
      setTimeout(() => {
        history.push('/game-end');
      }, 3000);
    }
  };

  useEffect(() => {
    console.log(level);
    setCorrectAnswer(configData.data[level].correctAnswerId);
  }, []);

  return (
    <div className="play_wrapper">
      <div className="play_field">
        <h2 className="play_task">
          {configData.data[level].question}
        </h2>
        <div>
          <div className="play_answers">
            {
              configData.data[level].answers
                .map((el) => (
                  <Answer
                    el={el}
                    key={el.id}
                    handleClickPage={handleClickPage}
                    isShow={isShow}
                    clicked={clicked}
                    pressed={pressed}
                    setPressed={setPressed}
                  />
                ))
            }
          </div>
        </div>
      </div>
      <div className="play_menu-wrapper">
        <div className="play_menu">
          {
            reverseData(configData.data)
              .map((el) => {
                if (configData.data[level].gain === el) {
                  return (
                    <Level
                      text={el}
                      key={el}
                      active
                    />
                  );
                }
                if (configData.data[level].gain > el) {
                  return (
                    <Level
                      text={el}
                      key={el}
                      disable
                    />
                  );
                }
                return (
                  <Level
                    text={el}
                    key={el}
                  />
                );
              })
          }
        </div>
      </div>
    </div>
  );
}

export default PlayPage;
