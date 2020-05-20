import React from 'react'
import Answer from '../Answer';
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { validateAnswer, nextQuestion } from '../../state/actions/QuizActions';

const Question = () => {

  const { currentQuestion: { image = '', question = '', answers },
    enableNext, showShowMeResults } = useSelector(state => state.quiz)
  const dispatch = useDispatch();
  const handleNextClick = () => {
    dispatch(validateAnswer())
    dispatch(nextQuestion())
  }
  const handleShowMeResults = async () => {
    dispatch(validateAnswer())
    // const results = await axios.post(`http://localhost:1337/quizzes/${el.id}/results`, { answers: quizState.answersSelected });
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
              <Answer answer={el} key={idx} isSelected={el.isSelected} />
            ))
          }
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            {
              showShowMeResults ? (
                <button
                  className="button is-primary is-fullwidth footer-button"
                  disabled={!enableNext}
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