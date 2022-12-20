Feature: Category

  Scenario: Choose category
    Given c: music
    When Picking category
    Then The picked category should be: music
