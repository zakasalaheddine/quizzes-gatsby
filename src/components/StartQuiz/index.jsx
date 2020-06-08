import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import ShareButtons from '../ShareButtons';
import './styles.scss'

const StartQuiz = ({ quiz, onStart }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <article className="single-quiz">
      <h2 className="title">{quiz.title}</h2>
      <ShareButtons url={url} quizImage={quiz.image.publicURL} />
      <Link to={`/category/${quiz.category.slug}`}>
        <span className="category has-shadow">{quiz.category.name}</span>
      </Link>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <Img fluid={quiz.image.childImageSharp.fluid} alt={quiz.title}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">{quiz.description}</div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <button className="button" onClick={onStart}>Start the Quiz</button>
          </div>
        </div>
      </div>
    </article >
  )
}
export default StartQuiz;