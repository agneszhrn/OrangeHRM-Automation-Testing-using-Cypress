describe('Success Add Location', () => {
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
    it('TC-063 : Success add location',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Input Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba")
        // Input City
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Jakarta")
        // Input State/Province
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("DKI Jakarta")
        // Input Zip/Postal Code
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("51234")
        // Select Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Input Phone
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type("0123456789")
        // Input Fax
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type("02100000000")
        // Input Address
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Mawar Street")
        // Input Notes
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("-")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Saved
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Saved')
        // Validation : There is a value "Salemba" in the 'Name' column
        cy.get('.oxd-table-row > :nth-child(2) > div').contains('Salemba')
    })
    it('TC-064 : Add location only input Name and Country',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Input Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba 2")
        // Select Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows pop up notification : Successfully Saved
        cy.get('.oxd-toast').should('be.visible')
        // Validation : There is a value "Salemba 2" in the 'Name' column
        cy.get('.oxd-table-row > :nth-child(2) > div').contains('Salemba 2')
    })
})

describe('Cancel to Add Location', () => {
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
    it('TC-065 : Cancel to Add Location',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Click Cancel button
        cy.get('.oxd-button--ghost').click()
        // Validation : Redirect to Organization/Locations page
        cy.url().should('include', '/web/index.php/admin/viewLocations')
    })
})

describe('Failed to Add Location', () => {
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
    it('TC-066 : Add location empty field',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Name : Required
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').contains('Required')
        // Validation : Shows an error message under field Country : Required
        cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').contains('Required')
    })
    it('TC-067 : Add location input string Phone',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Input Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba")
        // Select Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Input string Phone
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type("aaa")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Phone : Allows numbers and only + - / ( )
        cy.get(':nth-child(5) > .oxd-input-group > .oxd-text').contains('Allows numbers and only + - / ( )')
    })
    it('TC-068 : Add location input string Fax',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Input Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba")
        // Select Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Input string Fax
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type("aaa")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Fax : Allows numbers and only + - / ( )
        cy.get(':nth-child(6) > .oxd-input-group > .oxd-text').contains('Allows numbers and only + - / ( )')
    })
    it('TC-069 : Add location input Address > 250 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Input Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba")
        // Select Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Input Address with > 250 characters
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Mawar Street aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Address : Should not exceed 250 characters
        cy.get(':nth-child(7) > .oxd-input-group > .oxd-text').contains('Should not exceed 250 characters')
    })
    it('TC-070 : Add location input Notes > 250 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "Locations"
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        // Click "+ Add" button
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        // Input Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Salemba")
        // Select Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Input Notes with > 250 characters
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        // Click Save button
        cy.get('.oxd-button--secondary').click()
        // Validation : Shows an error message under field Notes : Should not exceed 250 characters
        cy.get(':nth-child(8) > .oxd-input-group > .oxd-text').contains('Should not exceed 250 characters')
    })
})