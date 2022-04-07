import CypressFunctions from "../utils/utils";
import {Then} from "cypress-cucumber-preprocessor/steps";
const { Given } = require("cypress-cucumber-preprocessor/steps");
const cypress = new CypressFunctions();

Given(/^I am on (.*)$/, (url) => {
    cypress.openUrl(url)
});

Then(/^I expect to be redirect to (.*)$/, (url) => {
    cypress.urlAssert(url)
});

Then("The Header to contain {string}", (header) => {
    cypress.headerAssert(header)
});
