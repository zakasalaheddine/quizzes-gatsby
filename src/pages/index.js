import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HomeQuiz from "../components/HomeQuiz"
import { QUIZZES } from "../fakeData"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="columns is-multiline">
      {QUIZZES.map(quiz => (
        <div className="column is-one-third">
          <Link to="/single">
            <HomeQuiz quiz={quiz} />
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage
