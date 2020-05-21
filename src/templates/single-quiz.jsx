import React, { useEffect } from "react"
import axios from 'axios'
import Layout from "../components/Layout"
import StartQuiz from "../components/StartQuiz"
import { Link, graphql } from "gatsby"
import HomeQuiz from "../components/HomeQuiz"
import Question from "../components/Question"
// import { QuizReducer } from "../reducers/QuizReducer"
import {
  startQuiz,
  setQuestions,
  answerOnQuiz,
  nextQuestion,
  validateAnswer,
  resetAll,
} from "../state/actions/QuizActions"
import { useSelector, useDispatch } from "react-redux"
import QuizResult from "../components/QuizResult"

const quizzes = [
  {
    id: 1,
    title: "Coronavirus Quiz: Stop the Spread!",
    image:
      "https://images.beano.com/store/e33258e6cce99a6089a0c99744639f8ada58c71f243bede8e89dd150149f?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=0%2C0%2C0%2C0&w=300",
  },
  {
    id: 2,
    title: "Easy History Trivia Questions!",
    image:
      "https://images.beano.com/store/1c6a755fea8afeae367f7576b0355deb7fd45a12aae8f1b32c72d0bf31fe?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=0%2C0%2C0%2C0&w=300",
  },
  {
    id: 3,
    title: "The Ultimate General Knowledge Quiz!",
    image:
      "https://images.beano.com/store/ec40d046ef3e68ade08e6d0a335c5359f434871c07ee5413877cf7c6e431?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=129%2C145%2C1662%2C935&w=300",
  },
  {
    id: 4,
    title: "Fun Geography Quiz!",
    image:
      "https://images.beano.com/store/cd93bece417b6779ca05aaa924c0efe1b460ac5b8247764f89ca59052db3?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=0%2C0%2C0%2C0&w=300",
  },
]
const SingleQuiz = ({ data }) => {
  const { strapiQuiz: el } = data;
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
      <div className="columns single">
        <div className="column is-two-thirds main">
          {renderCorrectCard()}
        </div>
        <div className="column sidebar">
          <h3 className="title">Explore Quizzes</h3>
          {quizzes.map(quiz => (
            <Link to="/single" key={quiz.id}>
              <HomeQuiz quiz={quiz} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
query ($id: Int!) {
  strapiQuiz(strapiId: {eq: $id}) {
    id: strapiId
    title
    slug
    type
    image {
      publicURL
    }
    category {
      name
      id
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
}
`
export default SingleQuiz
