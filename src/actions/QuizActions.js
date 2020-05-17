import { QUIZ_TYPES } from "../reducers/QuizReducer"

export const startQuiz = () => {
  return {
    type: QUIZ_TYPES.START_QUIZ,
  }
}

export const setQuestions = questions => {
  return {
    type: QUIZ_TYPES.SET_QUESTIONS,
    payload: questions,
  }
}

export const answerOnQuiz = answer => {
  return {
    type: QUIZ_TYPES.CHOOSE_ANSWER,
    payload: answer,
  }
}

export const nextQuestion = () => {
  return {
    type: QUIZ_TYPES.NEXT_QUESTION,
  }
}
