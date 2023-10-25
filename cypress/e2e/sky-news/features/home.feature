Feature: home page

Background:
  Given the user open the Sky News website
  When the page is loaded

@regression
Scenario: Verify the Title on Each Page
  Then the user should see the page title containing 'The Latest News from the UK and Around the World | Sky News'

Scenario: Verify the Number of Categories and Their Names
  Then the user should see the categories and their count as defined in "categories.json" fixture 

Scenario: Verify the Selected Article's Title on the Page
  When the user selects a news article from the homepage
  Then the article title should appear in browsers page title

Scenario: Default Focus Category
  Then the focused category should be "Home"

Scenario: Changing Focus to "Climate" Category
  When the user clicks on the "Climate" category
  Then the focused category should be "Climate"

Scenario: Social Media Links at the Bottom of the Page
  When the user scroll to the bottom of the page
  Then the user should see links to Sky News social media profiles 


