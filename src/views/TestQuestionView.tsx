import { useEffect, useState } from "react"
import classes from "./QuestionView.module.css"
import Config from "../config/QuizConfig"
import { Points } from "../interfaces/IPoints"
import { Question } from "../interfaces/IQuestion"

import { fetchQuestions } from "../api/FetchQuestion"
import { DifficultyPoints } from "../enums/DifficultyPoints"
import { QuestionDifficulties } from "../enums/QuestionDifficulties"
import { Views } from "../enums/Views"

export interface fetchQuestionsProps {
  categoryProp: string
  difficultyProp: string
}

const QuestionView: React.FC<fetchQuestionsProps> = ({
  categoryProp,
  difficultyProp
}) => {
  const [answerOptions, setAnswerOptions] = useState<string[]>([])
  const [category, setCategory] = useState<string>("")
  const [difficulty, setDifficulty] = useState<string>()
  const [playerName, setPlayerName] = useState<string>("")
  const [questions, setQuestions] = useState<Array<Question>>([])
  const [questionAnswers, setQuestionAnswers] = useState<Points[]>([])
  const [view, setView] = useState<Views>(Views.START)

  const { answerTime, questionCountDown, totalQuestions } = Config
  const [countDown, setCoundDown] = useState(questionCountDown)
  const [timer, setTimer] = useState(answerTime + questionCountDown)
  let currentAnswer = { difficultyPoints: 0, timePoints: 0 }

  useEffect(() => {
    const fetchTriviaQuestions = async () => {
      let jsonResponse: Array<Question> = await fetchQuestions(
        categoryProp,
        difficultyProp
      )
      setQuestions(jsonResponse)
    }
    fetchTriviaQuestions()
  }, [categoryProp, difficultyProp])

  useEffect(() => {
    if (countDown <= 0) return
    const countDownInterval = setInterval(() => {
      setCoundDown(countDown - 1)
    }, 1000)
    return () => clearInterval(countDownInterval)
  }, [countDown])

  useEffect(() => {
    if (timer <= 0) return
    const timerInterval = setInterval(() => {
      setTimer(timer - 1)
    }, 1000)
    return () => clearInterval(timerInterval)
  }, [timer])

  useEffect(() => {
    if (timer === 0) {
      setQuestionAnswers((prevAnswers: Points[]) => [
        ...prevAnswers,
        currentAnswer
      ])

      if (questionAnswers.length + 1 < totalQuestions) {
        setView(Views.PICK_CATEGORY)
      } else {
        setView(Views.END)
      }
    }
  }, [timer === 0])

  const clickHandler = (pickedAnswer: string) => {
    let questionDifficultyType: QuestionDifficulties = questions[0]?.difficulty
    currentAnswer.timePoints = timer

    if (pickedAnswer === questions[0]?.correctAnswer) {
      currentAnswer.difficultyPoints = DifficultyPoints[questionDifficultyType]
    } else {
      currentAnswer.difficultyPoints = DifficultyPoints["wrong"]
    }

    setQuestionAnswers((prevAnswers: Points[]) => [
      ...prevAnswers,
      currentAnswer
    ])

    if (questionAnswers.length + 1 < totalQuestions) {
      setView(Views.PICK_CATEGORY)
    } else {
      setView(Views.END)
    }
  }

  return (
    <>
      <div className={classes.question}>
        <h4>
          <>Category: {questions[0]?.category}</>
        </h4>
        <p>Question: {questions[0]?.question} </p>
      </div>
      <div className={classes["question-container"]}>
        {answerOptions?.map((answer: string, index: number) => {
          return (
            <button
              data-testid="answer-button"
              key={index}
              onClick={() => clickHandler(answer)}
            >
              {answer}
            </button>
          )
        })}
      </div>
      {timer}
    </>
  )
}

export default QuestionView
