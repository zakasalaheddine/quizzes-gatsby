import React from 'react'
import './styles.scss'

const Answer = ({ answer, isSelected = false, disabled = false, onClick = null }) => {
  return (
    <div className="column is-half answer">
      <button
        className={`button is-large is-fullwidth ${isSelected ? 'is-selected' : ''}`}
        disabled={disabled}
        onClick={onClick}>
        {answer}
      </button>
    </div>
  )
}
export default Answer;