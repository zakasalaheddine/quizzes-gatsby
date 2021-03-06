import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import LoaderIndicator from '../LoaderIndicator'

import './styles.scss'
import ShareButtons from '../ShareButtons';

const QuizResult = () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
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
    return (
      <>
        {`You've got ${results.rights} rights of ${results.totalQuestion} questions`}
        <br />
        {`${results.title !== undefined ? results.title : ''}`}
      </>
    )
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
          <ShareButtons url={url} pinterest={false} />
        </header>
        {
          (results.image && results.image !== '') && (
            <div className="card-image">
              <figure className="image">
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