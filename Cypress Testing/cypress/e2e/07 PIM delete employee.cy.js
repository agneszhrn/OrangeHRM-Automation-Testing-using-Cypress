describe('Failed to Delete Employee', () => {
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
    it('TC-024 : Cancel to delete employee',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In column "Actions", click icon 'Trash'
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({ force: true })
        // A pop up appears, click button "No, Cancel"
        cy.get('.oxd-button--text').click()
        // Validation : Redirect to PIM page
        cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    })
})

describe('Success Delete Employee', () => {
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
    it('TC-025 : Delete employee',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In column "Actions", click icon 'Trash'
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.oxd-button--label-danger').click()
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to PIM page
        cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    })
    it('TC-026 : Delete selected employees',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In the list of record employees, click the checkbox of employees to be deleted
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({ force: true })
        // Click button "Delete Selected"
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({ force: true })
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to PIM page
        cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    })
    it('TC-027 : Delete all employees',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // In the list of record employees, click checklist box beside column "Id"
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({ force: true })
        // Click button "Delete Selected"
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({ force: true })
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to PIM page
        cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    })
})