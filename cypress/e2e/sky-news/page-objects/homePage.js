export class homePage {

//Page heading
heading = 'Top Stories';

//Global Variables
articlePageTitle;

//Page Selectors
articleLink = ".sdc-site-tile__headline-link";
categoryListSelector = "[data-testid='site-header-main-nav'] > li";
pageHeading = "[data-role='short-text-target']";
socialFooter = "[data-testid='site-footer-social']"

visit() {
    cy.visit('/');
    cy.setViewportDimensions();
    cy.acceptCookies();
}

verifyPageTitle(pageTitle) {
    cy.title().should('include', pageTitle);
}

getHeading(){
    return cy.get(this.pageHeading).first().invoke('text').then(heading => heading.trim());
}

verifyHeading(){
    this.getHeading().should('eq', this.heading);
}

getCategory(category) {
    return cy.contains(category);
}

clickCategory(category) {
    cy.contains(category).click();
}

verifyCategories(expectedCategories) {
    cy.get(this.categoryListSelector).should('have.length', (expectedCategories.length));
    expectedCategories.forEach((category) => {
    cy.get(this.categoryListSelector).should('contain', category);
    });
}

verifyFocusedCategory(category) {
    this.getCategory(category).should('have.attr', 'aria-current', 'true');
}

readCategoriesFixture(fixtureName) {
    return cy.fixture(fixtureName);
}

verifyCategoriesFromFixture(fixtureName) {
    this.readCategoriesFixture(fixtureName).then((data) => {
        this.verifyCategories(data.categories);
    });
}

selectAndRetrieveArticleTitle() {
    // capturing the article link to assert
    cy.get(this.articleLink).first().should('have.attr','href').as('articlelink')

    //capturing the article title to assert 
    cy.get(this.articleLink).first().find('span')
    .invoke('text')
    .as('SelectedArticleTitle'); 

    cy.get('@SelectedArticleTitle').then((selectedArticleTitle) => {
        this.articlePageTitle = selectedArticleTitle.split(' ')[1];
    });
        
    //clicking on first article
    cy.get(this.articleLink).first().click();
    
}

verifySocialMediaLinksExist() {
    cy.get(this.socialFooter).within(() => {
     // using within to restrict the scoop of only social icons
      cy.get('li').should('have.length', 4);
  
      // loop through each element and assert the presence of the 'href' attribute
      cy.get('a').each((element) => {
        cy.wrap(element).should('have.attr', 'href');
      });
    });
}

scrollToBottom() {
    cy.scrollTo('bottom');
}

}

export default new homePage();