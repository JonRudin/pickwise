/// <reference types="cypress" />

class CypressFunctions {

    openUrl(url) {
        cy.visit(`${url}`)
        cy.viewport(1024, 768)
        cy.wait(200)
    }

    openSportsUpNext(){
        cy.get('[data-testid="Select"] > .Select_select__24c5n').should('be.visible')
    }

    assertUpNextItems(){
        const selectListOptions = ['All Sports', 'Esports', 'MLB', 'NHL', 'NBA'];
        selectListOptions.forEach(item => cy.contains('[data-testid="Select"] > .Select_select__24c5n', item));
    }

    clickMenuButton() {
        cy.get(':nth-child(6) > nav > [data-testid="MenuIcon--Menu"] > [data-testid="Icon"]').click()
    }

    clickSportsFilter(){
        cy.get(':nth-child(1) > div.StackedMenuItem_item__kIrBP').click()
    }

    sportSelector(sport){
        cy.get(`[data-testid="StackedMenuItem--SubItems"] > [aria-label="${sport}"]`).click()
    }

    urlAssert(url){
        cy.url().should('eq', `${url}`)
    }

    headerAssert(header){
        cy.get('[data-testid="Header"]').should('contain.text', header)
    }

}

export default CypressFunctions;
