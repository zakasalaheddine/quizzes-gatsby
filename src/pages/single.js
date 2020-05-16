import React, { useState } from "react"
import Layout from "../components/Layout"
import StartQuiz from "../components/StartQuiz"
import { Link } from "gatsby"
import HomeQuiz from "../components/HomeQuiz"

const el = {
  id: 6,
  title: "Fun Geography Quiz!",
  category: "Animals",
  author: "zaka salah eddine",
  createdAt: "2 days ago",
  estimateTime: "4 min",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste molestias porro culpa atque, sed quam odit repellendus consequuntur laudantium saepe architecto? Obcaecati accusamus fugiat, pariatur ad ipsum doloribus non?",
  image:
    "https://images.beano.com/store/cd93bece417b6779ca05aaa924c0efe1b460ac5b8247764f89ca59052db3?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=0%2C0%2C0%2C0&w=300",
  questions: [
    {
      id: 1,
      question: "What parody is this Clad Wild Clay screenshot from?",
      image:
        "https://images.beano.com/store/113b87bad9eda0d32f2a6d858198caaf6b693b1673c50f690bea61242d3b?auto=compress%2Cformat&dpr=1&fit&format=jpg&frame=1&h&w=780",
      isQuestionInImage: false,
      answers: [
        {
          id: 1,
          answer: "Bad Food",
          image: null,
          isCorrect: false,
        },
        {
          id: 2,
          answer: "Bad Feeling",
          image: null,
          isCorrect: false,
        },
        {
          id: 3,
          answer: "Bad Blood",
          image: null,
          isCorrect: false,
        },
        {
          id: 4,
          answer: "Bad Guts",
          image: null,
          isCorrect: false,
        },
      ],
    },
  ],
}
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
const Single = () => {
  const [isStarted, setIsStarted] = useState(false)
  const handleStartQuiz = () => {
    setIsStarted(true)
  }
  return (
    <Layout>
      <div className="columns single">
        <div className="column is-two-thirds">
          {isStarted ? (
            "TEST"
          ) : (
            <StartQuiz quiz={el} onStart={handleStartQuiz} />
          )}
        </div>
        <div className="column">
          <h3 className="title">Explore Quizzes</h3>
          {quizzes.map(quiz => (
            <Link to="/single">
              <HomeQuiz quiz={quiz} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default Single
