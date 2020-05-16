import React from 'react'
import './styles.scss'

const StartQuiz = ({ quiz }) => {
  return (
    <article className="single-quiz">
      <h2 className="title">{quiz.title}</h2>
      <span className="category">{quiz.category}</span>
      <p className="info">Created by: <span className="author-name">{quiz.author}</span> | <span className="date">{quiz.createdAt}</span></p>
      <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src={quiz.image} alt={quiz.title} />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">{quiz.description}</div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <button className="button is-primary">Start the Quiz</button>
          </div>
        </div>
      </div>
    </article>
  )
}
export default StartQuiz;