describe('Success Edit Employee', () => {
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
    it('TC-019 : Edit employee input First Name',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In columnn "Actions", click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
        // Edit valid First Name
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type("Harry")
        // Click button "Save"
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
    })
    it('TC-020 : Edit employee input Last Name',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In columnn "Actions", click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
        // Edit valid Last Name
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type("Potter")
        // Click button "Save"
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
    })
})

describe('Failed to Edit Employee', () => {
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
    it('TC-021 : Edit employee empty input First Name',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In columnn "Actions", click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
        // Empty First Name
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
        // Click button "Save"
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        // Validation : Shows an error message under field Employee First Name : Required
        cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').contains('Required')
    })
    it('TC-022 : Edit employee empty input Last Name',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In columnn "Actions", click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
        // Empty Last Name
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
        // Click button "Save"
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        // Validation : Shows an error message under field Employee Last Name : Required
        cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').contains('Required')
    })
    it('TC-023 : Edit employee input Employee Id already exist',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In columnn "Actions", click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
        // Input Employee Id already exist
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0123")
        // Click button "Save"
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        // Validation : Shows an error message under field Employee Id : Employee Id already exists
        cy.get('.oxd-input-group > .oxd-text').contains('Employee Id already exists')
    })
})