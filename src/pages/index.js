import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HomeQuiz from "../components/HomeQuiz"
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
  {
    id: 5,
    title: "The Ultimate General Knowledge Quiz!",
    image:
      "https://images.beano.com/store/ec40d046ef3e68ade08e6d0a335c5359f434871c07ee5413877cf7c6e431?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=129%2C145%2C1662%2C935&w=300",
  },
  {
    id: 6,
    title: "Fun Geography Quiz!",
    image:
      "https://images.beano.com/store/cd93bece417b6779ca05aaa924c0efe1b460ac5b8247764f89ca59052db3?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=0%2C0%2C0%2C0&w=300",
  },
]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="columns is-multiline">
      {quizzes.map(quiz => (
        <div className="column is-one-quarter">
          <HomeQuiz quiz={quiz} />
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage
