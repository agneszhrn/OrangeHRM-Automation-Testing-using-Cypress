describe('Verify Locations page in Organization', () => {
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
    it('TC-071 : Go to Locations page',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Validation : Redirect to Organization/General Information page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
})

describe('Success search Location user', () => {
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
    it('TC-072 : Search location by valid Name',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Input valid Name
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba")
        // Click Search button
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Records Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : Data with the name "Salemba" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible').contains("Salemba")
    })
    it('TC-073 : Search location by valid City',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Input valid City
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Jakarta")
        // Click Search button
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Record Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Record Found')
        // Validation : Data with the city "Jakarta" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3)').should('be.visible').contains("Jakarta")
    })
    it('TC-074 : Search location by valid Country',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Input valid Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Click Search button
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Records Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : Data with the Country "Indonesia" was found
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4)').should('be.visible').contains("Indonesia")
    })
    it('TC-075 : Empty Search Location',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click Search button
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : There is a statement at the top of the list that "Records Found"
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('include.text', 'Records Found')
        // Validation : All data is shown in a list
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('be.visible')
    })
    it('TC-076 : Verify Reset button on Search Location',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Input valid Name
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba")
        // Click Reset button
        cy.get('.oxd-button--ghost').click({force: true})
        // Validation : Reset all field search locations / the "Name" field is clear
        cy.get(':nth-child(2) > .oxd-input').should('have.text', '')
    })
})

describe('Success search Location user', () => {
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
    it('TC-077 : Search location by invalid Name',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Input invalid Name
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Abc")
        // Click Search button
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : A pop up notification appears
        cy.get('.oxd-toast').should('be.visible')
        // Validation : Shows pop up notification "No Records Found"
        cy.get('.oxd-text--toast-message').should('include.text', 'No Records Found')
    })
    it('TC-078 : Search location by invalid City',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Input invalid City
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Abc")
        // Click Search button
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        // Validation : A pop up notification appears
        cy.get('.oxd-toast').should('be.visible')
        // Validation : Shows pop up notification "No Records Found"
        cy.get('.oxd-text--toast-message').should('include.text', 'No Records Found')
    })
})