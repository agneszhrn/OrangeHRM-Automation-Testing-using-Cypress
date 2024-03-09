describe('Success Edit User', () => {
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
    it('TC-044 : Edit user input Name',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // In the list of record locations, select a user to edit
        cy.get('.oxd-table-body > :nth-child(2) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Employee Name
        cy.get('.oxd-autocomplete-text-input > input').clear().type('Harry Potter')
        cy.get('.oxd-autocomplete-option').contains('Harry Potter').click()
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to User Management-Users page
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
    })
})

describe('Cancel Edit User', () => {
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
    it('TC-045 : Cancel to Edit User',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // In the list of record locations, select a user to edit
        cy.get('.oxd-table-body > :nth-child(2) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Click Cancel button
        cy.get('.oxd-button--ghost').click()
        // Validation : Redirect to User Management-Users page
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
    })
})