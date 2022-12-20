import { Points } from "../interfaces/IPoints"

export const useCalculateScore = (questionAnswers: Points[]) => {
  let comboScore = 0
  let score = 0
  let streakArray = []
  let totalScore = 0

  for (const questionAnswer of questionAnswers) {
    const { timePoints, difficultyPoints } = questionAnswer

    if (questionAnswer.difficultyPoints !== 0) {
      streakArray.push(1)
      score = score + timePoints * difficultyPoints
    } else {
      streakArray.push(0)
    }
  }

  let streaks = streakArray.reduce(
    (prevNum, num) => (
      num ? prevNum[prevNum.length - 1]++ : prevNum.push(0), prevNum
    ),
    [0]
  )

  streaks.forEach((streak) => {
    if (streak >= 3) {
      comboScore = comboScore + streak * streak
    }
  })

  totalScore = score + comboScore

  return totalScore
}
