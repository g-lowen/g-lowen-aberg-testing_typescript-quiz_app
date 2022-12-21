import { loadFeature, defineFeature } from "jest-cucumber"
import { Categories } from "../../enums/Categories"
import { QuestionDifficulties } from "../../enums/QuestionDifficulties"
const featureCategory = loadFeature("./specs/features/category.feature")

export function getCategory(category: string): Categories {
  let value = (Categories as any)[category] as Categories
  if (value === undefined) {
    throw new Error(`Category doesn't match!`)
  }
  return value
}

defineFeature(featureCategory, (test) => {
  let getCategoryResult: Categories

  test("Choose category", ({ given, when, then }) => {
    given(/^c: ([a-zA-Z]+)$/, (c) => {
      getCategoryResult = getCategory(c)
    })

    when("Picking category", () => {})

    then(/^The picked category should be: ([a-zA-Z]+)$/, (expected) => {
      let result = getCategory(expected)
      expect(getCategoryResult).toBe(result)
    })
  })
})

const featureDifficulty = loadFeature("./specs/features/difficulty.feature")
export function getDifficulty(difficulty: string): QuestionDifficulties {
  let value = (QuestionDifficulties as any)[difficulty] as QuestionDifficulties
  if (value === undefined) {
    throw new Error(`Difficulty doesn't match!`)
  }
  return value
}

defineFeature(featureDifficulty, (test) => {
  let getDifficultyResult: QuestionDifficulties

  test("Choose difficulty", ({ given, when, then }) => {
    given(/^d: ([a-zA-Z]+)$/, (d) => {
      getDifficultyResult = getDifficulty(d)
    })

    when("Picking difficulty", () => {})

    then(/^The picked difficulty should be: ([a-zA-Z]+)$/, (expected) => {
      let result = getDifficulty(expected)
      expect(getDifficultyResult).toBe(result)
    })
  })
})
