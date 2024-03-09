describe('Verify Users page in User Management', () => {
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
    it('TC-035 : Go to Users page',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Validation : Redirect to User page
        cy.url().should('include', 'web/index.php/admin/viewSystemUsers')
        // Validation : The text "System Users" is visible
        cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    })
})

describe('Success search User', () => {
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
    it('TC-036 : Search users by valid Username',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Input valid Username
        cy.get(':nth-child(2) > .oxd-input').type('Admin1')
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Record Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Record Found')
        // Validation : Data with the username "Admin1" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible').contains("Admin1")
    })
    it('TC-037 : Search users by valid User Role',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click dropdown User Role
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        // Select valid User Role
        // cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Admin').click()
        cy.get('.oxd-select-option').contains('Admin').click()
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Record Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : Data with the user role "Admin" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').should('be.visible').contains("Admin")
    })
    it('TC-038 : Search users by valid Employee Name',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Input valid Employee Name
        cy.get('.oxd-autocomplete-text-input > input').type('Harry Potter')
        // Click auto-complete option
        cy.get('.oxd-autocomplete-option').contains('Harry Potter').click()
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Record Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Record Found')
        // Validation : Data with employee name "Harry Potter" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4)').should('be.visible').contains("Harry Potter")
    })
    it('TC-039 : Search users by valid Status',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click dropdown Status
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        // Select valid Status
        // cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Enabled').click()
        cy.get('.oxd-select-option').contains('Enabled').click()
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Record Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : Data with the status "Enabled" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(5) > div').should('be.visible').contains("Enabled")
    })
    it('TC-040 : Empty Search Users',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Records Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : All data is shown in a list
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible')
    })
    it('TC-041 : Verify Reset button on Search Users',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Input valid Username
        cy.get(':nth-child(2) > .oxd-input').type('Admin1')
        // Click button "Reset"
        cy.get('.oxd-button--ghost').click({force: true})
        // Validation : The "Username" field is clear
        cy.get(':nth-child(2) > .oxd-input').should('have.text', '')
    })
})

describe('Failed search User', () => {
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
    it('TC-042 : Search users by invalid Username',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Input invalid Username
        cy.get(':nth-child(2) > .oxd-input').type('Admin12')
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : A pop up notification appears
        cy.get('.oxd-toast').should('be.visible')
        // Validation : Shows pop up notification "No Records Found"
        cy.get('.oxd-text--toast-message').should('include.text', 'No Records Found')
    
    })
    it('TC-043 : Search users by invalid Employee Name',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the User Management menu on the top
        cy.get('.--visited').click()
        // Select sub-menu "Users"
        cy.get('.oxd-dropdown-menu > li').click()
        // Input invalid Employee Name
        cy.get('.oxd-autocomplete-text-input > input').type('Harry Putra')
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : Shows an error message under the field Employee Name : Invalid.
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Invalid')
    })
})