import React from 'react'

const HomeQuiz = ({ quiz }) => {
  return (
    <article className="home-quiz">
      <figure class="image">
        <img src={quiz.image} alt={quiz.title} />
      </figure>
      <h2>{quiz.title}</h2>
    </article>
  )
}
export default HomeQuiz;