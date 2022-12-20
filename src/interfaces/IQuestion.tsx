import { Category } from "./ICategory"
import { QuestionDifficulties } from "../enums/QuestionDifficulties"

export interface Question {
  category: Category
  correctAnswer: string
  difficulty: QuestionDifficulties
  incorrectAnswers: string[]
  question: string
}
