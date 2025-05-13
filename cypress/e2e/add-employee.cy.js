describe('Add New Employee', () => {

    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 30000 });
      cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin');
      cy.get('input[name="password"]').should('be.visible').type('admin123');
      cy.get('button[type="submit"]').should('be.enabled').click();
    });
  
    it('Positive Case - Success to Add New Employee', () => {
      cy.contains('PIM').click();
      cy.contains('Add Employee').click();
  
      cy.get('input[name="firstName"]').type('Amanda');
      cy.get('input[name="lastName"]').type('Test');
      cy.get('button[type="submit"]').click();
  
      // Assertion
      cy.contains('Personal Details', { timeout: 10000 }).should('be.visible');

    });
  
    it('Negative Case - Fail to Add Employee', () => {
      cy.contains('PIM').click();
      cy.contains('Add Employee').click();

      cy.get('button[type="submit"]').click();
  
      // Assertion
      cy.contains('Required').should('exist');
    });

   
    it('Creates user', () => {
    cy.contains('Admin').click();
    cy.contains('Add').click();

    cy.get('.oxd-select-text-input').eq(0).click();
    cy.get('.oxd-select-dropdown').contains('ESS').click();
    cy.get('input[placeholder="Type for hints..."]').type('Amanda Test');
    cy.get('.oxd-autocomplete-dropdown').contains('Amanda Test').click();
    cy.get('.oxd-select-text-input').eq(1).click();
    cy.get('.oxd-select-option').contains('Enabled').click();
    //cy.get('input[name="username"]').type('Amandates1');
    cy.get('input.oxd-input').eq(1).type('Amandates1');
    cy.get('input[type="password"]').eq(0).type('Test123!');
    cy.get('input[type="password"]').eq(1).type('Test123!');
    cy.contains('Save').click();

    // Assertion
    cy.contains('Successfully Saved').should('exist');
  });

  
  });
  