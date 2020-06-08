import React from 'react'
import { useDispatch } from 'react-redux'
import { answerOnQuiz } from '../../state/actions/QuizActions';
import Img from 'gatsby-image'
import './styles.scss'

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
            <Img fixed={answer.image.childImageSharp.fixed} alt={answer.answer} />
          )
        }
        {answer.answer}
      </button>
    </div>
  )
}
export default Answer;