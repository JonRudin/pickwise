import CypressFunctions from "../utils/utils";
const { When } = require("cypress-cucumber-preprocessor/steps");
const cypress = new CypressFunctions();

When("I Select the Next Up Sports Filter", () => {
    cypress.openSportsUpNext()
});

When("I can see an available list of valid Sports to filter by", () => {
    cypress.assertUpNextItems()
});

When("I click on the menu button", () => {
    cypress.clickMenuButton()
});

When("I click on the sports filter", () => {
    cypress.clickSportsFilter()
});

When("I click on {word}", (sport) => {
    cypress.sportSelector(sport)
});
