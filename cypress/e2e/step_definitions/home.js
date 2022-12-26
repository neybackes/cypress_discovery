import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {home} from '@pages/HomePage'


  
Given(/^I am on the home page$/, () => {
	home.home_go();
});

Then(/^I should see "([^"]*)"$/, (args1) => {
	console.log(args1);
	home.page_get_title("Seja um parceiro entregador pela Buger Eats");
});
