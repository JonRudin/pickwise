Feature: Pickwise Homepage Tests

  Scenario: Pickwise landing page - Validating sports filter
    Given I am on https://www.pickswise.com/
    When I Select the Next Up Sports Filter
    Then I can see an available list of valid Sports to filter by

  Scenario: Accessing UFC Betting via the menu
    Given I am on https://www.pickswise.com/
    When I click on the menu button
    And I click on the sports filter
    And I click on ufc
    Then I expect to be redirect to https://www.pickswise.com/ufc/
    And The Header to contain "UFC Betting"
