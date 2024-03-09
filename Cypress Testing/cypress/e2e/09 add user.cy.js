describe('Success Add User', () => {
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
    it('TC-029 : Success add User',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Select User Role
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Admin').click()
        // Input Employee Name
        cy.get('.oxd-autocomplete-text-input > input').type('Harry Potter')
        cy.get('.oxd-autocomplete-option').contains('Harry Potter').click()
        // Select Status
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Enabled').click()
        // Input Username that doesn't exist yet
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin1')
        // Input Password
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // Input Confirm Password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Saved
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Saved')
        // Validation : There is a value "Admin1" in the 'Username' column
        cy.get('.oxd-table-row > :nth-child(2) > div').contains('Admin1')
    })
})

describe('Cancel to Add User', () => {
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
    it('TC-030 : Cancel to Add Users',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Click Cancel button
        cy.get('.oxd-button--ghost').click()
        // Validation : Redirect to User Management-Users page
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
    })
})

describe('Failed to Add User', () => {
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
    it('TC-031 : Add users empty field',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field User Role : Required
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text').contains('Required')
        // Validation : Shows an error message under field Employee Name : Required
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text').contains('Required')
    })
    it('TC-032 : Add users input Username already exist',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Select User Role
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Admin').click()
        // Input Employee Name
        cy.get('.oxd-autocomplete-text-input > input').type('Harry Potter')
        cy.get('.oxd-autocomplete-option').contains('Harry Potter').click()
        // Select Status
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Enabled').click()
        // Input Username already exist
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin1')
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Username : Already exists
        cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').contains('Already exists')
    })
    it('TC-033 : Add users input Confirm Password that doesnt match',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Select User Role
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Admin').click()
        // Input Employee Name
        cy.get('.oxd-autocomplete-text-input > input').type('Harry Potter')
        cy.get('.oxd-autocomplete-option').contains('Harry Potter').click()
        // Select Status
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Enabled').click()
        // Input Username that doesn't exist yet
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin1')
        // Input Password
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // Input Confirm Password doesn't match
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin111')
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Confirm Password : Passwords do not match
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains('Passwords do not match')
    })
    it('TC-034 : Add users input Password < 7 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > .oxd-button').click()
        // Select User Role
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Admin').click()
        // Input Employee Name
        cy.get('.oxd-autocomplete-text-input > input').type('Harry Potter')
        cy.get('.oxd-autocomplete-option').contains('Harry Potter').click()
        // Select Status
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Enabled').click()
        // Input Username that doesn't exist yet
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin1')
        // Input Password < 7 characters
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Password : Should have at least 7 characters
        cy.get('.user-password-cell > .oxd-input-group > .oxd-text').contains('Should have at least 7 characters')
    })
})