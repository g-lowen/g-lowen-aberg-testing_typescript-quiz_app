export const useShuffleAnswers = (
  correctAnswer: string,
  incorrectAnswers: string[]
) => {
  let newAnswers: string[] = []
  newAnswers.push(correctAnswer)
  incorrectAnswers.map((answers: string) => {
    newAnswers.push(answers)
  })
  let shuffleAnswers = newAnswers.sort(() => 0.5 - Math.random())
  return shuffleAnswers
}
