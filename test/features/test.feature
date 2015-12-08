Feature: This is the cucumber test feature
  In order to test my homework
  As a developer
  I want to make these features pass

  Scenario: Search bookmarks test
    Given my homework web page
    When I input "non"
    Then there are 3 bookmarks found

#  Scenario: Add bookmarks test
#    Given homepage opened
#    Given add button clicked
#    When fill in the form with "testName" and "testAddress"
#    Then "testName" found in the bookmarks list
#
#
#  Scenario: Delete bookmarks test
#    Given homepage opened
#    Given one delete button clicked
#    When click Yes
#    Then bookmarks number - 1


