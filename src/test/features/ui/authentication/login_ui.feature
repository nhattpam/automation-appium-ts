@login @ui
Feature: Login screen UI validation

  Scenario: UI elements on login screen
    Given I launch the Facebook app
    Then I should see username field
    And I should see password field
    And I should see login button
