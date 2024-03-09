describe('Verify General Information in Organization', () => {
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
    it('TC-050 : Go to General Information page',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Validation : Redirect to Organization/General Information page
        cy.url().should('include', '/web/index.php/admin/viewOrganizationGeneralInformation')
    })
})

describe('Verify on-off Edit button', () => {
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
    it('TC-051 : Success on-off Edit button',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Validation : The "Organization Name" form is enabled
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.enabled')
    })
})

describe('Success edit General Information', () => {
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
    it('TC-052 : Success edit General Information',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Registration Number
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("1234")
        // Input Tax ID
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("001")
        // Input Phone
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("0123456789")
        // Input Fax
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("02100000000")
        // Input Email
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("info@orangehrm.com")
        // Input Address Street 1
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Mawar Street")
        // Input Address Street 2
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Mawar Street")
        // Input City
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Jakarta")
        // Input State/Province
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("DKI Jakarta")
        // Input Zip/Postal Code
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("51234")
        // Select Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-option').contains('Indonesia').click()
        // Input Notes
        cy.get('.oxd-textarea').clear().type("HRM Software")
        // Click Save button 
        cy.get('.oxd-button').click()
        // Validation : Shows pop up notification : Successfully Updated
        cy.get('.oxd-text--toast-message').should('be.visible').should('include.text', 'Successfully Updated')
        // Validation : The "Organization Name" form is disabled
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.disabled')
    })
})

describe('Failed edit General Information', () => {
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
    it('TC-053 : Edit General Information input Registration Number > 30 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Registration Number
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("1234000000000000000000000000000")
        // Click Save button 
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Should not exceed 30 characters
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Should not exceed 30 characters')
    })
    it('TC-054 : Edit General Information input Tax ID > 30 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Tax ID
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("1234000000000000000000000000000")
        // Click Save button 
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Should not exceed 30 characters
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Should not exceed 30 characters')
    })
    it('TC-055 : Edit General Information input string Phone',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Phone
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("abc")
        // Click Save button 
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Allows numbers and only + - / ( )
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Allows numbers and only + - / ( )')
    })
    it('TC-056 : Edit General Information input string Fax',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Fax
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("abc")
        // Click Save button 
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Allows numbers and only + - / ( )
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Allows numbers and only + - / ( )')
    })
    it('TC-057 : Edit General Information input invalid Email',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Email
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("info@orangehrmcom")
        // Click Save button
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Expected format: admin@example.com
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Expected format: admin@example.com')
    })
    it('TC-058 : Edit General Information input Address Street 1 > 100 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Address Street 1
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Mawar Street aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        // Click Save button
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Should not exceed 100 characters
        cy.get('.oxd-grid-3 > :nth-child(1) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Should not exceed 100 characters')
    })
    it('TC-059 : Edit General Information input Address Street 2 > 100 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Address Street 1
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Mawar Street aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")// Click Save button
        // Click Save button
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Should not exceed 100 characters
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Should not exceed 100 characters')
    })
    it('TC-060 : Edit General Information input City > 30 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input City
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Jakartaaaaaaaaaaaaaaaaaaaaaaaaa")
        // Click Save button
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Should not exceed 30 characters
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Should not exceed 30 characters')
    })
    it('TC-061 : Edit General Information input State/Province > 30 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input State/Province
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("DKI Jakartaaaaaaaaaaaaaaaaaaaaa")
        // Click Save button
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Should not exceed 30 characters
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Should not exceed 30 characters')
    })
    it('TC-062 : Edit General Information input Notes > 255 characters',() => {
        // Click the Admin button on the left sidebar menu
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Click the Organization menu on the top
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        // Select sub-menu "General Information"
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        // Click on Edit button
        cy.get('.oxd-switch-input').click({ force: true })
        // Input Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("Admin")
        // Input Notes
        cy.get('.oxd-textarea').clear().type("HRM SoftwareHRM Software aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        // Click Save button
        cy.get('.oxd-button').click()
        // Validation : Shows an error message : Should not exceed 255 characters
        cy.get('.oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('be.visible').should('include.text', 'Should not exceed 255 characters')
    })
})