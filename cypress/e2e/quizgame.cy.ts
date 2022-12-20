describe("One round of a quiz game", () => {
  it(" should show a page how starts the quiz", () => {
    cy.visit("http://localhost:5173")
    // start view
    cy.get("button").should("contain", "Start quiz")
    cy.get("[data-testid=playername-input]").type("TestName")
    cy.get("[data-testid=select-category]:first").select(0)
    cy.get("[data-testid=select-difficulty]").select("random")
    cy.get("[data-testid=start-quiz-button]").click()

    // question view
    cy.get("p").should("contain", "1 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "2 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "3 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "4 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "5 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "6 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "7 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "8 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // category view
    cy.get("p").should("contain", "Pick category for next question:")
    cy.get("[data-testid=category-button]:first").click()

    // question view
    cy.get("p").should("contain", "9 / 9")
    cy.get("h4").contains(/Category: [a-zA-Z]+/)
    cy.get("[data-testid=answer-button]:first").click()

    // game over view
    cy.get("h2").should("contain", "Game over")
    cy.get("p").contains(/Your score is: \d+ points/i)
  })
})
