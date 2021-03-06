import { QUIZ_TYPES } from "../reducers/QuizReducer"

export const startQuiz = (quizId, quizType) => {
  return {
    type: QUIZ_TYPES.START_QUIZ,
    payload: { quizId, quizType },
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
export const validateAnswer = () => {
  return {
    type: QUIZ_TYPES.VALIDATE_ANSWER,
  }
}
export const resetAll = () => {
  return {
    type: QUIZ_TYPES.RESET,
  }
}
export const setResults = results => {
  return {
    type: QUIZ_TYPES.SET_RESULT,
    payload: results,
  }
}
