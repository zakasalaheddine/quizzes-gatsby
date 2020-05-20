import { createStore, combineReducers } from "redux"
import { QuizReducer } from "./reducers/QuizReducer"

export default preloadedState => {
  return createStore(
    combineReducers({
      quiz: QuizReducer,
    }), preloadedState
  )
}
