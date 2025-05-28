Feature: Cucumber Mathematics
  As a user
  I want to manage my vegetables and create salads
  So that I can practice mathematics with vegetables

  Scenario: Let's eat cucumbers!
    Given I have 5 cucumbers
    When I eat 4 cucumbers
    Then I have 1 cucumber

  Scenario: Let's eat carrots!
    Given I have 10 carrots
    When I eat 12 carrots
    Then I have 0 carrots
    And I should see the message "You ate more carrots than you had!"

  Scenario: Let's make a salad!
    Given I have 8 cucumbers
    And I have 5 carrots
    When I make a salad with 3 cucumbers and 2 carrots
    Then I have 5 cucumbers
    And I have 3 carrots
    And I have 1 salad