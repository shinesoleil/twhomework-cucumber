Feature: This is the cucumber test feature
  In order to test my homework
  As a developer
  I want to make these features pass

  Scenario: Search bookmarks test
    Given my homework web page
    When I input "non"
    Then there are 3 bookmarks found

  Scenario: Add bookmarks test
    Given my homework web
    When I inputs "non"
    Then there is 3 bookmarks found


