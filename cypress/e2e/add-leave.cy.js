describe('Add Leave Entitlement for Employee', () => {

    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 30000 });
      cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin');
      cy.get('input[name="password"]').should('be.visible').type('admin123');
      cy.get('button[type="submit"]').should('be.enabled').click();
    });


    it('Admin Success to add leave entitlement', () => {
        cy.contains('Leave').click();
        cy.contains('Entitlements').click(); 
        cy.contains('Add Entitlements').click();

        cy.get('input[placeholder="Type for hints..."]').type('Amanda Test');
        cy.get('.oxd-autocomplete-text-input').contains('Amanda Test').click();
        cy.get('.oxd-select-text-input').eq(1).click().type('CAN - Personal');
        cy.get('.oxd-autocomplete-text-input').eq(1).contains('CAN - Personal').click();
        cy.get('input.oxd-input').eq(1).type('Lorem Ipsum');
        cy.contains('Save').click();

        // Assertion
        cy.contains('Successfully Saved').should('exist');
    });

    it('Admin Fail to add leave entitlement', () => {
        cy.contains('Leave').click();
        cy.contains('Entitlements').click(); 
        cy.contains('Add Entitlements').click();
        
        cy.get('input.oxd-input').eq(1).type('Lorem Ipsum');
        cy.contains('Save').click();

        // Assertion
        cy.contains('Required').should('exist');
    });

    });
