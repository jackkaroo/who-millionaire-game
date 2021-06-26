// import configData from '../config/newConfig.json';
//
// const { data } = configData;
//
// export { data as default };

export default {
  level0: {
    questions: [
      {
        questionId: 0.1,
        questionText: '1a task Who is??',
        answers: [
          {
            answerId: 0,
            letter: 'A',
            answerText: '10 years',
            isCorrect: 1,
          },
          {
            answerId: 1,
            letter: 'B',
            answerText: '11 years',
            isCorrect: 0,
          },
          {
            answerId: 2,
            letter: 'C',
            answerText: '12 years',
            isCorrect: 1,
          },
          {
            answerId: 3,
            letter: 'D',
            answerText: '13 years',
            isCorrect: 0,
          },
        ],
        correctAnswersIdArray: [0, 2],
        gain: 500,
      },
      {
        questionId: 0.2,
        questionText: '1b Who is???',
        answers: [
          {
            answerId: 0,
            letter: 'A',
            answerText: '10 years',
            isCorrect: 1,
          },
          {
            answerId: 1,
            letter: 'B',
            answerText: '11 years',
            isCorrect: 0,
          },
          {
            answerId: 2,
            letter: 'C',
            answerText: '12 years',
            isCorrect: 1,
          },
          {
            answerId: 3,
            letter: 'D',
            answerText: '13 years',
            isCorrect: 0,
          },
        ],
        correctAnswersIdArray: [0, 2],
        gain: 500,
      },
    ],
    gain: 500,
  },

  level1: {
    questions: [
      {
        questionId: 1.1,
        questionText: '2a Who is??',
        answers: [
          {
            answerId: 0,
            letter: 'A',
            answerText: '22 10 years',
            isCorrect: 1,
          },
          {
            answerId: 1,
            letter: 'B',
            answerText: '22 11 years',
            isCorrect: 0,
          },
          {
            answerId: 2,
            letter: 'C',
            answerText: '12 years',
            isCorrect: 1,
          },
          {
            answerId: 3,
            letter: 'D',
            answerText: '13 years',
            isCorrect: 0,
          },
        ],
        correctAnswersIdArray: [0, 2],
        gain: 700,
      },
      {
        questionId: 1.2,
        questionText: '2b Who is???',
        answers: [
          {
            answerId: 0,
            letter: 'A',
            answerText: '22 10 years',
            isCorrect: 1,
          },
          {
            answerId: 1,
            letter: 'B',
            answerText: '22 11 years',
            isCorrect: 0,
          },
          {
            answerId: 2,
            letter: 'C',
            answerText: '12 years',
            isCorrect: 1,
          },
          {
            answerId: 3,
            letter: 'D',
            answerText: '13 years',
            isCorrect: 0,
          },
        ],
        correctAnswersIdArray: [0, 2],
        gain: 700,
      },
    ],
    gain: 700,
  },
};
