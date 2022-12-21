Feature: Calculator

  Scenario: Add two numbers
    Given x: 1, y: 5
    When x: 1, y: 5
    And x: 1, y: 5
    And x: 1, y: 5
    And x: 1, y: 5
    And x: 1, y: 5
    And x: 1, y: 5
    And x: 1, y: 5
    And x: 1, y: 5
    Then Calling the function to add two numbers
    Then the result should be 126
