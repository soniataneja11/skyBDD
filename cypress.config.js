const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    baseUrl:'https://news.sky.com/',
    specPattern: "cypress/e2e/sky-news/features/*.feature",
    watchForFileChanges:false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalOriginDependencies: true,
    defaultCommandTimeout: 10000
 },
 reporterOptions: {
  reportDir:'cypress/mochawesomeresults',
  charts: true,
  reportPageTitle: 'custom-title',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
  debug: true
}
});
