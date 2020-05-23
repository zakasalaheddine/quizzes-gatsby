import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import LoaderIndicator from '../LoaderIndicator'

import './styles.scss'

const QuizResult = () => {
  const [loading, setLoading] = useState(true);
  const { result: { results }, quizType } = useSelector(state => state.quiz)
  let counter = 0;
  const inter = setInterval(() => {
    counter++;
    if (counter === 3) {
      setLoading(false)
      clearInterval(inter);
    }
  }, 1000)
  const getProperTitler = () => {
    if (quizType === "Personality") return `You've got ${results.title}`
    return (<>{`You've got ${results.rights} rights of ${results.totalQuestion} questions`}<br /> {`${results.title}`}</>)
  }
  if (loading)
    return (<LoaderIndicator />)
  return (
    <div className="quiz-result">
      <div className="card">
        <header className="card-header">
          <h1 className="card-header-title">
            {getProperTitler()}
          </h1>
        </header>
        {
          (results.image && results.image !== '') && (
            <div className="card-image">
              <figure className="image is-16by9">
                <img src={`${process.env.GATSBY_API_URL}${results.image.url}`} alt={results.title} />
              </figure>
            </div>
          )
        }
        {results.description && (
          <div className="card-content">
            <p>{results.description}</p>
          </div>)
        }
      </div>
    </div>
  )
}
export default QuizResult;