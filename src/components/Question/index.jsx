import React from 'react'
import Answer from '../Answer';
import './styles.scss'

const Question = ({ selectedQuestion, onAnswer = null, onNextClick = null, lastQuestion = false, showNext = false }) => {
  const { image = '', question = '', answers } = selectedQuestion;
  console.log({ selectedQuestion });
  return (
    <div className="question">
      <div class="card">
        <header class="card-header">
          <h1 class="card-header-title"> {question}</h1>
        </header>
        <div class="card-image">
          <figure class="image is-16by9">
            <img src={image} alt={question} />
          </figure>
        </div>
        <div className="card-content columns is-multiline is-mobile">
          {
            answers && answers.map((el, idx) => (
              <Answer onClick={() => { onAnswer(el) }} answer={el.answer} key={idx} isSelected={el.isSelected} />
            ))
          }
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            {
              lastQuestion ? (
                <button className="button is-primary is-fullwidth footer-button" disabled={!showNext}>
                  Show Me Results
                </button>
              ) : (
                  <button className="button is-primary is-fullwidth footer-button" disabled={!showNext} onClick={onNextClick}>
                    Next Question
                  </button>
                )
            }

          </div>
        </div>
      </div>
    </div>
  )
}
export default Question;