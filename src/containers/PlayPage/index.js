import React, { useEffect, useState } from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';
import Answer from '../../components/Answer';
import configData from '../../config/config.json';
import PlayMenu from '../../components/PlayMenu';

function PlayPage({ level, setLevel }) {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [pressed, setPressed] = useState(false);

  const history = useHistory();
  const { data } = configData;

  const checkAnswer = (id) => {
    console.log(correctAnswer);
    if (Array.isArray(correctAnswer)) return (correctAnswer.includes(id));
    return (correctAnswer === (id));
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
      if (level !== data[data.length - 1].levelId) {
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
    console.log(data[level].correctAnswerId);
    setCorrectAnswer(data[level].correctAnswerId);
  }, []);

  return (
    <div className="play_wrapper">
      <div className="play_field">
        <h2 className="play_task">{data[level].question}</h2>
        <div>
          <div className="play_answers">
            {
              data[level].answers
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
      <PlayMenu data={data} level={level} />
    </div>
  );
}

export default PlayPage;
