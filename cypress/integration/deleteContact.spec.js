describe('Delete Contact', () => {

    const random = Math.floor(Math.random() * 1000)
    const firstName = 'Prunella' + random 

    beforeEach(() => {
        cy.login()
        cy.addContact(firstName)
    })

    it('Edits a new contact', () => {
        cy.contains(firstName).click()
        cy.deleteContact()
        cy.contains(firstName).should('not.exist')
    })
    
})