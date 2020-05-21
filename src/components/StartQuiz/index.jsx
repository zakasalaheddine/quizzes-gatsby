import React from 'react'
import './styles.scss'

const StartQuiz = ({ quiz, onStart }) => {
  return (
    <article className="single-quiz">
      <h2 className="title">{quiz.title}</h2>
      <span className="category has-shadow">{quiz.category.name}</span>
      <p className="info">Created by: <span className="author-name">{quiz.author}</span> | <span className="date">{quiz.created_at}</span></p>
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
            <button className="button is-primary" onClick={onStart}>Start the Quiz</button>
          </div>
        </div>
      </div>
    </article>
  )
}
export default StartQuiz;