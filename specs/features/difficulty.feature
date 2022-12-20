Feature: Difficulty

  Scenario: Choose difficulty
    Given d: EASY
    When Picking difficulty
    Then The picked difficulty should be: EASY
