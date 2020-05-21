import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import Answer from '../Answer';
import './styles.scss'
import { validateAnswer, nextQuestion, setResults } from '../../state/actions/QuizActions';

const Question = () => {

  const { currentQuestion: { image = '', question = '', answers },
    enableNext, showShowMeResults, quizId, answersSelected } = useSelector(state => state.quiz)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleNextClick = () => {
    dispatch(validateAnswer())
    dispatch(nextQuestion())
  }
  const handleShowMeResults = async () => {
    setLoading(true);
    dispatch(validateAnswer())
    const results = await axios.post(`http://localhost:1337/quizzes/${quizId}/results`, { answers: answersSelected });
    dispatch(setResults(results.data))
    setLoading(false);
  }
  return (
    <div className="question">
      <div className="card">
        <header className="card-header">
          <h1 className="card-header-title"> {question}</h1>
        </header>
        {
          (image && image !== '') && (
            <div className="card-image">
              <figure className="image is-16by9">
                <img src={image.publicURL} alt={question} />
              </figure>
            </div>
          )
        }

        <div className="card-content columns is-multiline is-mobile">
          {
            answers && answers.map((el, idx) => (
              <Answer answer={el} key={idx} isSelected={el.isSelected} disabled={enableNext} />
            ))
          }
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            {
              showShowMeResults ? (
                <button
                  className={`button is-primary is-fullwidth footer-button ${loading ? 'is-loading' : ''}`}
                  disabled={!enableNext || loading}
                  onClick={handleShowMeResults}>
                  Show Me Results
                </button>
              ) : (
                  <button
                    className="button is-primary is-fullwidth footer-button"
                    disabled={!enableNext}
                    onClick={handleNextClick}>
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