describe('Logout', () => {
    beforeEach(() => {
        // Go to website
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        // Input valid Username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // Input valid Password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // Click button "Login"
        cy.get('.oxd-button').click()
        // Validation : Redirect to Dashboard page
        cy.url().should('include', '/web/index.php/dashboard/index')
        // Validation : The text "Dashboard" is visible
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-006 : Success Logout',() => {
        // Click the profile button on the top right
        cy.get('.oxd-userdropdown-tab').click()
        // Click menu "Logout"
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        // Validation : Redirect to Login page
        cy.url().should('include', '/web/index.php/auth/login')
        // Validation : The text "Login" is visible
        cy.get('.oxd-text--h5').should('be.visible')
    })   
})