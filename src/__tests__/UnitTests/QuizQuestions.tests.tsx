import { render, screen, waitFor, within } from "@testing-library/react"
import "@testing-library/jest-dom"
import { fetchQuestions } from "../../api/FetchQuestion"
import TestQuestionView, {
  fetchQuestionsProps
} from "../../views/TestQuestionView"

describe("Trivia Question component End-2-End tests", () => {
  test("If the api is fetching successfully Question View is rendered", () => {
    //arrange
    const expectedText = /Question/i
    let props: fetchQuestionsProps = {
      categoryProp: "music",
      difficultyProp: "easy"
    }

    //act
    render(<TestQuestionView {...props} />)

    //assert
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  })

  it("Check that api fetches the correct amount of questions", async () => {
    //arrange
    let length = 1
    let category = "music"
    let difficulty = "easy"

    //act
    let result = await fetchQuestions(category, difficulty)

    //assert
    expect(result.length).toEqual(length)
  })

  test("Mocking Trivia API", async () => {
    //arrange
    const fakeResponse = [
      {
        category: "Arts & Literature",
        id: "1",
        correctAnswer: "Newt Scamander",
        incorrectAnswers: ["J.K Rowling", "J.K Trolling", "Scam Newtander"],
        question:
          "Who wrote the book 'Fantastic beasts and where to find them'?",
        tags: [
          "harry potter",
          "book",
          "author",
          "fantastic potter",
          "harry beast"
        ],
        type: "multiple",
        difficulty: "easy",
        isNiche: false
      }
    ]

    let length = 1
    let category = "music"
    let difficulty = "easy"

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeResponse)
      })
    ) as jest.Mock

    //act
    const result = await fetchQuestions(category, difficulty)

    //assert
    expect(result.length).toBe(length)
    expect(result).toEqual(fakeResponse)
  })
})
