describe("Calculating your score", () => {
    it(" should show the score calculation", () => {
    cy.visit("http://localhost:5173")

    // start view
    cy.get("[data-testid=nav-to-end-button]").click({force: true})
    cy.get("h2").should("contain", "Game over")
    cy.get("p").should("contain", "You got 45 points.")
    // cy.get("p").contains(/You got \d+ points/i)
    })
})