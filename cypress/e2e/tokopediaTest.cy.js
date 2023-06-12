describe('Tokopedia test', () => {
    beforeEach(() => {
        // Visit Tokopedia webpage and search for iPhone 14 Pro
        cy.visit('https://www.tokopedia.com', {
            headers: {
                "Accept-Encoding": "gzip, deflate"
            }
        });
        const searchResult = 'iphone 14 pro';
        cy.get('input[type="search"]').type(searchResult + '{enter}');
    });

    it('visit tokopedia webpage and verify that is loaded', () => {
        cy.url().should('include', 'tokopedia.com')
    })

    it('search for iPhone 14 Pro and validate search results', () => {
        // adding a wait to make sure the page is loaded
        cy.wait(3000)
        //verify that the search result is correct
        cy.get('h3[data-unify="Typography"]').contains('iPhone 14 Pro')
    })
    it('filter by official store', () => {
        // adding a wait to make sure the page is loaded
        cy.wait(3000)
        cy.contains('label.css-1v08vow', 'Official Store')
            .click()
            .get('input.css-1ax9ypr-unf-checkbox__input[value="Official Store"]')
            .should('be.checked');
        cy.contains('button.css-5z3uud-unf-chip.e6yxrl1', 'Official Store').should('be.visible');
    })
})
