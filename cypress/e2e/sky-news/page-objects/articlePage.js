import homePage from '../page-objects/homePage';

export class articlePage {

     verifyArticleTitleInPageTitle() {
        //validating the article link
        cy.get('@articlelink').then((articlelink) => {
            cy.location('pathname').should('equal', articlelink);
        });
    
        //validate a word from page title 
        cy.title().should('include', homePage.articlePageTitle);
    }
      
}
    
export default new articlePage();