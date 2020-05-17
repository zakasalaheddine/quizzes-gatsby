import React, { useReducer } from "react"
import Layout from "../components/Layout"
import StartQuiz from "../components/StartQuiz"
import { Link, graphql } from "gatsby"
import HomeQuiz from "../components/HomeQuiz"
import Question from "../components/Question"
import { QuizReducer } from "../reducers/QuizReducer"
import {
  startQuiz,
  setQuestions,
  answerOnQuiz,
  nextQuestion,
} from "../actions/QuizActions"

// const el = {
//   id: 6,
//   title: "Fun Geography Quiz!",
//   category: "Animals",
//   author: "zaka salah eddine",
//   createdAt: "2 days ago",
//   estimateTime: "4 min",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste molestias porro culpa atque, sed quam odit repellendus consequuntur laudantium saepe architecto? Obcaecati accusamus fugiat, pariatur ad ipsum doloribus non?",
//   image:
//     "https://images.beano.com/store/cd93bece417b6779ca05aaa924c0efe1b460ac5b8247764f89ca59052db3?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=0%2C0%2C0%2C0&w=300",
//   questions: [
//     {
//       id: 1,
//       question: "What parody is this Clad Wild Clay screenshot from?",
//       image: null,
//       isQuestionInImage: false,
//       answers: [
//         {
//           id: 1,
//           answer: "Bad Food",
//           image:
//             "https://images.beano.com/store/dbc1e1da7c56e55e16d84c125f9dbccc5fb6d20e369667e264b470dad77c?auto=compress&w=384&h=216&fit=min",
//           isCorrect: false,
//         },
//         {
//           id: 2,
//           answer: "Bad Feeling",
//           image:
//             "https://images.beano.com/store/488a6a590f0a7304574fbbe42b1b0cd167aa0a413cf1f8094cc34ddc9202?auto=compress&w=384&h=216&fit=min",
//           isCorrect: false,
//         },
//         {
//           id: 3,
//           answer: "Bad Blood",
//           image:
//             "https://images.beano.com/store/4a37ff5a04cc286bbaac4485c1863e46d17182afc9eed7761c5612ab8120?auto=compress&w=384&h=216&fit=min",
//           isCorrect: false,
//         },
//         {
//           id: 4,
//           answer: "Bad Guts",
//           image:
//             "https://images.beano.com/store/f7426c11d3c66e783b3b4b1d5b8e53b43d85b4df41438d5b84c0158fe611?auto=compress&w=384&h=216&fit=min",
//           isCorrect: false,
//         },
//       ],
//     },
//     {
//       id: 2,
//       question: "What parody issqdqsdsqdhot from?",
//       image:
//         "https://images.beano.com/store/ec40d046ef3e68ade08e6d0a335c5359f434871c07ee5413877cf7c6e431?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=129%2C145%2C1662%2C935&w=300",
//       isQuestionInImage: false,
//       answers: [
//         {
//           id: 1,
//           answer: "sqdqsdsq Food",
//           image: null,
//           isCorrect: false,
//         },
//         {
//           id: 2,
//           answer: "Bad saasa",
//           image: null,
//           isCorrect: false,
//         },
//         {
//           id: 3,
//           answer: "Bad sqdsqdsqd",
//           image: null,
//           isCorrect: false,
//         },
//         {
//           id: 4,
//           answer: "dsqdsqdsq Guts",
//           image: null,
//           isCorrect: false,
//         },
//       ],
//     },
//   ],
// }
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
  console.log(el)
  const [state, dispatch] = useReducer(QuizReducer)
  const handleStartQuiz = () => {
    dispatch(setQuestions(el.questions))
    dispatch(startQuiz())
  }
  const answerCurrentQuestion = answer => {
    dispatch(answerOnQuiz(answer))
  }
  const nextQuestionHandler = () => {
    dispatch(nextQuestion())
  }
  return (
    <Layout>
      <div className="columns single">
        <div className="column is-two-thirds main">
          {state && state.quizStared ? (
            state.currentQuestion && (
              <Question
                selectedQuestion={state.currentQuestion}
                showNext={state.enableNext}
                onAnswer={answerCurrentQuestion}
                lastQuestion={state.showShowMeResults}
                onNextClick={nextQuestionHandler}
              />
            )
          ) : (
              <StartQuiz quiz={el} onStart={handleStartQuiz} />
            )}
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
    image {
      publicURL
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
