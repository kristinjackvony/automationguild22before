Cypress.Commands.add('login', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
    cy.get('#email').type('testguilduser@fake.com')
    cy.get('#password').type('foobarfoo')
    cy.get('#submit').click()
})

Cypress.Commands.add('addContact', (firstName) => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type('Prunewhip')
    cy.get('#birthdate').type('1969-05-13')
    cy.get('#email').type('pprunewhip@fake.com')
    cy.get('#phone').type('8008675309')
    cy.get('#street1').type('123 Sesame St.')
    cy.get('#street2').type('Apt. A')
    cy.get('#city').type('New York')
    cy.get('#stateProvince').type('NY')
    cy.get('#postalCode').type('01234')
    cy.get('#country').type('USA')
    cy.get('#submit').click()
})

Cypress.Commands.add('getContactDetails', (firstName) => {
    cy.contains(firstName + ' Prunewhip').click()
})

Cypress.Commands.add('deleteContact', () => {
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
})