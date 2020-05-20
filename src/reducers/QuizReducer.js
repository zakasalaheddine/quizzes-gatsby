export const QUIZ_TYPES = {
  SET_QUESTIONS: "SET_QUESTIONS",
  START_QUIZ: "START_QUIZ",
  CHOOSE_ANSWER: "CHOOSE_ANSWER",
  NEXT_QUESTION: "NEXT_QUESTION",
  VALIDATE_ANSWER: "VALIDATE_ANSWER",
  RESET: "RESET",
}

const InitialState = {
  questions: [],
  answersSelected: [],
  quizStared: false,
  currentQuestion: null,
  enableNext: false,
  showShowMeResults: false,
}

export const QuizReducer = (state = InitialState, { type, payload = null }) => {
  switch (type) {
    case QUIZ_TYPES.RESET: {
      return {
        ...InitialState
      }
    }
    case QUIZ_TYPES.SET_QUESTIONS: {
      const questions = payload.map(el => ({ ...el, isDone: false }))
      return {
        ...state,
        questions: questions,
      }
    }
    case QUIZ_TYPES.START_QUIZ: {
      state.currentQuestion = state.questions[0]
      const hasMore = isQuestionsArrayHasMore(
        state.questions,
        state.currentQuestion
      )
      return {
        ...state,
        quizStared: true,
        showShowMeResults: !hasMore,
      }
    }
    case QUIZ_TYPES.CHOOSE_ANSWER: {
      const newAnswers = state.currentQuestion.answers.map(answer => {
        if (answer.id === payload.id) {
          return {
            ...answer,
            isSelected: true,
          }
        }
        return {
          ...answer,
          isSelected: false,
        }
      })
      state.currentQuestion.answers = newAnswers
      return {
        ...state,
        enableNext: true,
      }
    }
    case QUIZ_TYPES.VALIDATE_ANSWER: {
      const selectedAnswer = state.currentQuestion.answers.find(
        el => el.isSelected
      )
      state.answersSelected.push({
        question: state.currentQuestion.id,
        answer: selectedAnswer.id,
      })
      return {
        ...state,
      }
    }
    case QUIZ_TYPES.NEXT_QUESTION: {
      const updatedQuestionsArray = state.questions.map(question => {
        if (question.id === state.currentQuestion.id || question.isDone) {
          return {
            ...question,
            isDone: true,
          }
        }
        return question
      })
      state.questions = updatedQuestionsArray

      const index = state.questions.findIndex(
        question => question.isDone === false
      )
      if (index !== -1) {
        state.currentQuestion = state.questions[index]
      }
      const hasMore = isQuestionsArrayHasMore(
        state.questions,
        state.currentQuestion
      )
      return {
        ...state,
        showShowMeResults: !hasMore,
      }
    }
    default:
      return state
  }
}

const isQuestionsArrayHasMore = (questions, currentQuestion) => {
  let hasMore = false
  questions.map(question => {
    if (question.id !== currentQuestion.id && question.isDone === false)
      hasMore = true
    return question
  })
  return hasMore
}
