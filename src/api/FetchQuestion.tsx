import axios from "axios"

const baseURL = "https://the-trivia-api.com/api/questions?categories="

export const fetchQuestions = async (
  category: string,
  difficulty: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `${baseURL}${category}&limit=1&difficulty=${difficulty}`
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    throw new Error(`Error fetching the questions. ${error}`)
  }
}

// Full URL example
// `https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=1&region=SE&difficulty=easy`
