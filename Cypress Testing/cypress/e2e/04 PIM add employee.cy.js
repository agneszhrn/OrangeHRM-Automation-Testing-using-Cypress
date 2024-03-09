describe('Success Add Employee', () => {
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
    it('TC-008 : Success add Employee',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Input Employee First Name
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Harry")
        // Input Employee Last Name
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Potter")
        // Input Employee Id
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0123")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Saved
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Saved')
        // Validation : There is a value "Harry Potter" in the first & last name columns
        // cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').should('be.visible').contains("Harry")
        // cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').should('be.visible').contains("Potter")
        cy.get('.orangehrm-edit-employee-name > .oxd-text').should('be.visible').contains("Harry Potter")
        // Validation : There is a value "0123" in the employee id column
        // cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible').contains("0123")
    })
})

describe('Cancel to Add Employee', () => {
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
    it('TC-009 : Cancel to Add Users',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Click Cancel button
        cy.get('.oxd-button--ghost').click()
        // Validation : Redirect to PIM page
        cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    })
})

describe('Failed to Add Employee', () => {
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
    it('TC-010 : Add employees empty field',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Employee First Name : Required
        cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').contains('Required')
        // Validation : Shows an error message under field Employee Last Name : Required
        cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').contains('Required')
    })
    it('TC-011 : Add user input Employee Id already exist',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Input Employee First Name
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Harry1")
        // Input Employee Last Name
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Potter1")
        // Input Employee Id already exist
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0123")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Employee Id : Employee Id already exists
        cy.get('.oxd-input-group > .oxd-text').contains('Employee Id already exists')
    })
})