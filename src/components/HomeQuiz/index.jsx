import React from 'react'
import './styles.scss'

const HomeQuiz = ({ quiz }) => {
  return (
    <article className="home-quiz">
      <figure class="image">
        <img src={quiz.image.publicURL} alt={quiz.title} />
      </figure>
      <h2 className="title">{quiz.title}</h2>
    </article>
  )
}
export default HomeQuiz;