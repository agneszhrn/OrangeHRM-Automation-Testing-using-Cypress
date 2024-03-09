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
    it('TC-046 : Cancel to delete user',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // In the list of record users, select one user to delete
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // In column "Actions", click icon 'Trash'
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click({ force: true })
        // A pop up appears, click button "No, Cancel"
        cy.get('.oxd-button--text').click()
        // Validation : Redirect to User Management-Users page
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
    })
})

describe('Success Delete User', () => {
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
    it('TC-047 : Delete user',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // In the list of record users, select one user to delete
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // In column "Actions", click icon 'Trash'
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.oxd-button--label-danger').click()
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to User Management-Users page
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
    })
    it('TC-048 : Delete selected user',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // In the list of record users, click the checkbox of users to be deleted
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(':nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        // Click button "Delete Selected"
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({ force: true })
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to User Management-Users page
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
        
    })
    it('TC-049 : Delete all users',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // In the list of record users, click checklist box beside column "Username"
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        // Click button "Delete Selected"
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({ force: true })
        // A pop up appears, click button "Yes, Delete"
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({ force: true })
        // Validation : Shows pop up notification : Successfully Deleted
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Deleted')
        // Validation : Redirect to User Management-Users page
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
    })
})