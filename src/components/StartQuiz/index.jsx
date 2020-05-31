import React from 'react'
import './styles.scss'
import { Link } from 'gatsby';
import ShareButtons from '../ShareButtons';

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
          <figure className="image is-16by9">
            <img src={quiz.image.publicURL} alt={quiz.title} />
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