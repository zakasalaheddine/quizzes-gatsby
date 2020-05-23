import React, { useEffect } from "react"
import Layout from "../components/Layout"
import StartQuiz from "../components/StartQuiz"
import { Link, graphql } from "gatsby"
import HomeQuiz from "../components/HomeQuiz"
import Question from "../components/Question"
import {
  startQuiz,
  setQuestions,
  resetAll,
} from "../state/actions/QuizActions"
import { useSelector, useDispatch } from "react-redux"
import QuizResult from "../components/QuizResult"
import SEO from "../components/seo"

const SingleQuiz = ({ data }) => {
  const { strapiQuiz: el, allStrapiQuiz } = data;
  const quizState = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetAll())
  }, [dispatch])
  const handleStartQuiz = () => {
    dispatch(setQuestions(el.questions))
    dispatch(startQuiz(el.id, el.type))
  }

  const renderCorrectCard = () => {
    if (quizState) {
      const { quizStared, result, currentQuestion } = quizState;
      if (quizStared && result)
        return (<QuizResult />)
      if (quizStared && currentQuestion)
        return (<Question />)
    }
    return (<StartQuiz quiz={el} onStart={handleStartQuiz} />)
  }
  return (
    <Layout>
      <SEO title={el.title} description={el.description} />
      <div className="columns single">
        <div className="column is-two-thirds main">
          {renderCorrectCard()}
        </div>
        <div className="column sidebar">
          <h3 className="title">Explore Quizzes</h3>
          {allStrapiQuiz && allStrapiQuiz.nodes.map(quiz => (
            <Link to={`/${quiz.slug}`} key={quiz.id}>
              <HomeQuiz quiz={quiz} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
query ($id: Int!, $categoryId: Int!) {
  strapiQuiz(strapiId: {eq: $id}) {
    id: strapiId
    title
    slug
    type
    image {
      publicURL
    }
    category {
      id
      name
      slug
    }
    description
    created_at(fromNow: true)
    questions: Questions {
      id
      question
      image {
        publicURL
      }
      answers: Answers {
        id
        answer
        image {
          publicURL
        }
      }
    }
  }
  allStrapiQuiz(filter: {category: {id: {eq: $categoryId}}, strapiId: {ne: $id}}, limit: 5) {
    nodes {
      id: strapiId
      slug
      title
      image {
        publicURL
      }
    }
  }
}
`
export default SingleQuiz
