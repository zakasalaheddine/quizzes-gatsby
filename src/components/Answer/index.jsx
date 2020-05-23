import React from 'react'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { answerOnQuiz } from '../../state/actions/QuizActions';

const Answer = ({ answer, isSelected = false, disabled = false }) => {
  const dispatch = useDispatch();
  const handleAnswerClick = () => {
    dispatch(answerOnQuiz(answer))
  }
  return (
    <div className="column is-half answer">

      <button
        className={`button is-fullwidth ${isSelected ? 'is-selected' : ''}`}
        disabled={disabled}
        onClick={handleAnswerClick}
      >{
          answer.image && (
            <figure className="image">
              <img src={answer.image.publicURL} alt={answer.answer} />
            </figure>
          )
        }
        {answer.answer}
      </button>
    </div>
  )
}
export default Answer;