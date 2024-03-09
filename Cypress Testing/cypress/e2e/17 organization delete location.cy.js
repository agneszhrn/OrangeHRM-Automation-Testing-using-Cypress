describe('Failed to Delete User', () => {
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
    it('TC-093 : Cancel to delete location',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select one  location to delete
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // In column "Actions", click icon 'Trash'
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click({ force: true })
        // A pop up appears, click button "No, Cancel"
        cy.get('.oxd-button--text').click()
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
})

describe('Success Delete Location', () => {
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
    it('TC-094 : Delete location',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select one location to delete
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // In column "Actions", click icon 'Trash'
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.oxd-button--label-danger').click()
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-095 : Delete selected locations',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, click the checkbox of locations to be deleted
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        // Click button "Delete Selected"
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({ force: true })
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-096 : Delete all locations',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, click checklist box beside column "Name"
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        // Click button "Delete Selected"
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({ force: true })
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
})