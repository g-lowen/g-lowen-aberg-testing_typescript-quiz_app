import { useCalculateScore } from "../../utilities/useCalculateScore"
import { Points } from "../../interfaces/IPoints"

describe("Calulation total score", () => {
  test("Calcutate total score given difficulty is easy and time remaining is 5 sec and the forth answer is incorrect ", () => {
    // arrange
    let expected = 126
    let calcResult: number = 0
    let questionAnswers: Points[] = []
    let questionAnswer: Points = { difficultyPoints: 0, timePoints: 0 }

    for (let i = 0; i < 9; i++) {
      if (i === 3) {
        questionAnswer.difficultyPoints = 0
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)
      } else {
        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)
      }
    }

    // act
    calcResult = useCalculateScore(questionAnswers)

    // assert
    expect(calcResult).toBe(expected)
  })
})
