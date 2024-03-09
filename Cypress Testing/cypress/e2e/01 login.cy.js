describe('Success Login as Admin', () => {
    it('TC-001 - Login with valid Username and Password',() => {
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
})

describe('Failed Login as Admin', () => {
    it('TC-002 - Login with invalid Username',() => {
        // Go to website
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        // Input invalid Username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aa')
        // Input valid Password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // Click button "Login"
        cy.get('.oxd-button').click()
        // Validation : Stay on the Login page
        cy.url().should('include', '/web/index.php/auth/login')
        // Validation : An error message appears that "Invalid credentials"
        cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    })
    it('TC-003 - Login with invalid Password',() => {
        // Go to website
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        // Input valid Username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // Input invalid Password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aa')
        // Click button "Login"
        cy.get('.oxd-button').click()
        // Validation : Stay on the Login page
        cy.url().should('include', '/web/index.php/auth/login')
        // Validation : An error message appears that "Invalid credentials"
        cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    })  
    it('TC-004 - Login with invalid Username and Password',() => {
        // Go to website
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        // Input invalid Username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aa')
        // Input invalid Password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aa')
        // Click button "Login"
        cy.get('.oxd-button').click()
        // Validation : Stay on the Login page
        cy.url().should('include', '/web/index.php/auth/login')
        // Validation : An error message appears that "Invalid credentials"
        cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    })  
    it('TC-005 - Login with blank field',() => {
        // Go to website
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        // Click button "Login"
        cy.get('.oxd-button').click()
        // Validation : Stay on the Login page
        cy.url().should('include', '/web/index.php/auth/login')
        // Validation : Shows an error message under field Username : Required
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')
        // Validation : Shows an error message under field Password : Required
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible')
    })
})