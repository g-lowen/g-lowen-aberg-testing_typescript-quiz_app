import { useContext } from "react"
import classes from "./PickCategoryView.module.css"
import Config from "../config/QuizConfig"
import Context from "../context/QuizContext"

import { fetchQuestions } from "../api/FetchQuestion"
import { QuestionDifficulties } from "../enums/QuestionDifficulties"
import { useShuffleAnswers } from "../utilities/useShuffleArray"

const PickCategoryView = () => {
  const { difficulty, setAnswerOptions, setCategory, setQuestion, setView } =
    useContext(Context)

  const shuffleCategories = Config.categories.sort(() => 0.5 - Math.random())

  let pickedDifficulty = difficulty
  if (difficulty === "random") {
    const difficulties = Object.values(QuestionDifficulties)
    const randomizeDifficulties = difficulties.sort(() => 0.5 - Math.random())
    pickedDifficulty = randomizeDifficulties[0]
  }

  const clickHandler = (category: string) => {
    setCategory(category)
    setAnswerOptions([])

    const fetchQuestion = async () => {
      const newQuestion = await fetchQuestions(category, pickedDifficulty)
      setQuestion(newQuestion)

      setAnswerOptions(
        useShuffleAnswers(
          newQuestion[0]?.correctAnswer,
          newQuestion[0]?.incorrectAnswers
        )
      )
    }
    fetchQuestion()

    setView("question")
  }

  return (
    <>
      <h2>Pick category for next question:</h2>
      {shuffleCategories?.slice(0, 3).map((category) => (
        <button
          data-testid="category-button"
          key={category.id}
          onClick={() => clickHandler(category.id)}
        >
          {category.name}
        </button>
      ))}
    </>
  )
}

export default PickCategoryView
