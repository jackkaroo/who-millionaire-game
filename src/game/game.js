import data from './data';

class Game {
  _FINAL_LEVEL = Object.keys(data).length - 1;

  _userLevel;

  _currentQuestion;

  _userGain;

  _questionsData;

  constructor() {
    this._userLevel = 0;
    this._userGain = 0;
    this._questionsData = data;
  }

  startGame() {
    this._currentQuestion = this._generateQuestion(this._userLevel);
  }

  getCurrentLevel() {
    return this._userLevel;
  }

  getCurrentQuestion() {
    return this._currentQuestion;
  }

  getCurrentGain() {
    return this._userGain;
  }

  getAllGainLevels() {
    return Object.values(this._questionsData).map((el) => el.gain).reverse();
  }

  getFutureGain() {
    const levelId = `level${this._userLevel}`;
    return this._questionsData[levelId].gain;
  }

  _generateQuestion() {
    const levelId = `level${this._userLevel}`;

    const currentLevelQuestions = this._questionsData[levelId].questions;

    return currentLevelQuestions[Math.floor(Math.random() * currentLevelQuestions.length)];
  }

  verifyAnswer(userAnswerId) {
    const answerGain = this._currentQuestion.gain;
    const correctAnswerIdArray = this._currentQuestion.correctAnswersIdArray;

    let message;

    if (correctAnswerIdArray.includes(userAnswerId)) {
      this._userGain = answerGain;

      if (this._userLevel === this._FINAL_LEVEL) {
        message = 'Victory';
      } else {
        this._userLevel += 1;
        this._currentQuestion = this._generateQuestion(this._userLevel);
        message = 'Answer';
      }
    } else {
      message = 'Loose';
    }

    return message;
  }
}

export default Game;
