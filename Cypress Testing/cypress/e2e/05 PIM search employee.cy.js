describe('Success search Employee', () => {
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
    it('TC-012 : Search employee by valid Employee Name',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Input valid Employee Name
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type("Harry Potter")
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Record Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Record Found')
        // Validation : Data with the first & last name "Harry Potter" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').should('be.visible').contains("Harry")
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').should('be.visible').contains("Potter")
    })
    it('TC-013 : Search employee by valid Employee Id',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Input valid Employee Id
        cy.get(':nth-child(2) > .oxd-input').type("0123")
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Record Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Record Found')
        // Validation : Data with the employee id "0123" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible').contains("0123")
    })
    it('TC-014 : Search employee by valid Employee Status',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Select valid Employee Status
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        // Select valid Status
        cy.get('.oxd-select-option').contains('Full-Time Permanent').click()
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Records Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : Data with employee status "Full-Time-Permanent" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(6)').should('be.visible').contains("Full-Time Permanent")
    })
    it('TC-015 : Empty Search Employee',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Records Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : All data is shown in a list
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible')
    })
    it('TC-016 : Verify Reset button on Search Users',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Input valid Employee Name
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type("Harry Potter")
        // Click button "Reset"
        cy.get('.oxd-button--ghost').click({force: true})
        // Validation : The "Employee Name" field is clear
        cy.get(':nth-child(2) > .oxd-input').should('have.text', '')
    })
})

describe('Failed search Employee', () => {
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
    it('TC-017 : Search employee by invalid Employee Name',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Input invalid Employee Name
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type("Harry Putra")
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : A pop up notification appears
        cy.get('.oxd-toast').should('be.visible')
        // Validation : Shows pop up notification "No Records Found"
        cy.get('.oxd-text--toast-message').should('include.text', 'No Records Found')
    
    })
    it('TC-018 : Search employee by invalid Employee Id',() => {
        // Click the PIM button on the left sidebar menu
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        // Input invalid Employee Id
        cy.get(':nth-child(2) > .oxd-input').type("0111")
        // Click button "Search"
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : A pop up notification appears
        cy.get('.oxd-toast').should('be.visible')
        // Validation : Shows pop up notification "No Records Found"
        cy.get('.oxd-text--toast-message').should('include.text', 'No Records Found')
    })
})