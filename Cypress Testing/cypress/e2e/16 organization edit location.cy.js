describe('Success Edit Location', () => {
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
    it('TC-079 : Edit location input Name',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Salemba Raya")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-080 : Edit location input City',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit City
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Jakarta Raya")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-081 : Edit location input State/Province',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit State/Province
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("DKI Jakarta 2")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-082 : Edit location input Zip/Postal Code',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Zip/Postal Code
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("51000")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-083 : Edit location input Country',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('United States').click()
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-084 : Edit location input Phone',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Phone
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0123456781")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-085 : Edit location input Fax',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Fax
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("02100000001")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-086 : Edit location input Address',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Address
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear().type("Mawar Street 2")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
    it('TC-087 : Edit location input Notes',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Notes
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear().type("---")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
})

describe('Cancel to Edit Location', () => {
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
    it('TC-088 : Cancel to Edit Locations',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Click Cancel button
        cy.get('.oxd-button--ghost').click()
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
})

describe('Failed to Edit Location', () => {
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
    it('TC-089 : Edit locations input string Phone',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Phone with string
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("aaa")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Phone : Allows numbers and only + - / ( )
        cy.get(':nth-child(5) > .oxd-input-group > .oxd-text').contains('Allows numbers and only + - / ( )')
    })
    it('TC-090 : Edit location input string Fax',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Fax with string
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("aaa")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Phone : Allows numbers and only + - / ( )
        cy.get(':nth-child(6) > .oxd-input-group > .oxd-text').contains('Allows numbers and only + - / ( )')
    })
    it('TC-091 : Edit location input Address > 250 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Address with > 250 characters
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Mawar Street aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Address : Should not exceed 250 characters
        cy.get(':nth-child(7) > .oxd-input-group > .oxd-text').contains('Should not exceed 250 characters')
    })
    it.only('TC-092 : Edit location input Notes > 250 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // In the list of record locations, select a location to edit
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
        // Click icon "Edit" on the record selected
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true })
        // Edit Notes
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear().type("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Notes : Should not exceed 250 characters
        cy.get(':nth-child(8) > .oxd-input-group > .oxd-text').contains('Should not exceed 250 characters')
    })
})