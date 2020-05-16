import React from "react"
import Layout from "../components/Layout"
import StartQuiz from "../components/StartQuiz"

const el = {
  id: 6,
  title: "Fun Geography Quiz!",
  category: "Animals",
  author: "zaka salah eddine",
  createdAt: "2 days ago",
  estimateTime: "4 min",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste molestias porro culpa atque, sed quam odit repellendus consequuntur laudantium saepe architecto? Obcaecati accusamus fugiat, pariatur ad ipsum doloribus non?",
  image:
    "https://images.beano.com/store/cd93bece417b6779ca05aaa924c0efe1b460ac5b8247764f89ca59052db3?auto=compress%2Cformat&bg=ffe300&dpr=1&fit=max&rect=0%2C0%2C0%2C0&w=300",
}
const Single = () => {
  return (
    <Layout>
      <div className="columns">
        <div className="column is-two-thirds">
          <StartQuiz quiz={el} />
        </div>
        <div className="column">
          Test
        </div>
      </div>
    </Layout>
  )
}
export default Single
