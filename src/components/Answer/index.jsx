import React from 'react'
import './styles.scss'

const Answer = ({ answer, isSelected = false, disabled = false, onClick = null }) => {
  return (
    <div className="column is-half answer" onClick={onClick}>
      {
        answer.image && (
          <figure className="image">
            <img src={answer.image.publicURL} alt={answer.answer}/>
          </figure>
        )
      }
      <button
        className={`button is-large is-fullwidth ${isSelected ? 'is-selected' : ''}`}
        disabled={disabled}
      >
        {answer.answer}
      </button>
    </div>
  )
}
export default Answer;