Feature: This is the first feature
  In order to test my homework
  As a developer
  I want to make this feature pass

  Scenario: search bookmarks test
    Given my homework web page
    When I input "non"
    Then there are 3 bookmarks found

