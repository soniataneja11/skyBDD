import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../page-objects/homePage';


Given('the user open the Sky News website', () => {
    homePage.visit();
});

When('the page is loaded', () => {
    homePage.verifyHeading();
});

When('the user selects a news article from the homepage', () => {
    homePage.selectAndRetrieveArticleTitle();
  });

When('the user clicks on the {string} category', (category) => {
    homePage.clickCategory(category);
  });

When('the user scroll to the bottom of the page', () => {
    homePage.scrollToBottom();
});

Then('the user should see the page title containing {string}', (pageTitle) => {
    homePage.verifyPageTitle(pageTitle);
});

Then('the user should see the categories and their count as defined in {string} fixture', (fixtureName) => {
    homePage.verifyCategoriesFromFixture(fixtureName);
});

Then('the article title should appear in browsers page title', () => {
    homePage.verifyArticleTitleInPageTitle();
});

Then('the focused category should be {string}', (category) => {
    homePage.verifyFocusedCategory(category);
});

Then('the user should see links to Sky News social media profiles', () => {
    homePage.verifySocialMediaLinksExist();
});



  
  
