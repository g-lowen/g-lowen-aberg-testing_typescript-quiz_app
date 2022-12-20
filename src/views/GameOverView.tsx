import { useContext } from "react"
import Context from "../context/QuizContext"

import { useCalculateScore } from "../utilities/useCalculateScore"

const GameOverView = () => {
  const { questionAnswers } = useContext(Context)

  return (
    <section>
      <h2>Game over</h2>
      <p> You got {useCalculateScore(questionAnswers)} points.</p>
    </section>
  )
}

export default GameOverView
