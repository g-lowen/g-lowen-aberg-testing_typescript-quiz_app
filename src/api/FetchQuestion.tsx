const baseURL = "https://the-trivia-api.com/api/questions?categories="

export const fetchQuestions = async (
  category: string,
  difficulty: string
): Promise<any> => {
  try {
    const response = await (
      await fetch(`${baseURL}${category}&limit=1&difficulty=${difficulty}`)
    ).json()
    return response
  } catch (error) {
    throw new Error(`Error fetching the questions. ${error}`)
  }
}
