import { Category } from "./ICategory"
import { QuestionDifficulties } from "../enums/QuestionDifficulties"

export interface Question {
  category: Category
  correctAnswer: string
  difficulty: QuestionDifficulties
  id: string
  incorrectAnswers: string[]
  isNiche: boolean
  question: string
  tags: string[]
  type: string
}
