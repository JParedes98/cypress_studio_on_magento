describe('template spec', () => {
  it('correctly_displayed', () => {
    cy.visit('https://magento.softwaretestingboard.com/sales/guest/form/')
    cy.contains('Order Information')
    cy.contains('Orders and Returns')
    cy.contains('Order ID')
    cy.contains('Billing Last Name')
    cy.contains('Find Order By')
  })

  it('search_by_orderId_and_email', function() {
    cy.visit('https://magento.softwaretestingboard.com/sales/guest/form/');
    cy.get('#oar-order-id').type('000021307');
    cy.get('#oar-billing-lastname').type('Paredes Rosa');
    cy.get('#oar_email').type('josw.paredes1998@gmail.com');
    cy.get('#oar-widget-orders-and-returns-form > .actions-toolbar > div.primary > .action > span').click();

    cy.contains('Order # 000021307')
    cy.contains('Order Information')
    cy.contains('Portia Capri')
    cy.contains('Argus All-Weather Tank')
    cy.contains('Subtotal')
    cy.contains('Shipping & Handling')
    cy.contains('Grand Total')
  });

  it('search_by_orderId_and_zipcode', function() {
    cy.visit('https://magento.softwaretestingboard.com/sales/guest/form/');
    cy.get('#oar-order-id').type('000021307');
    cy.get('#oar-billing-lastname').type('Paredes Rosa');
    cy.get('#quick-search-type-id').select('zip');
    cy.get('#oar_zip').type('21101');
    cy.get('#oar-widget-orders-and-returns-form > .actions-toolbar > div.primary > .action').click();

    cy.contains('Order # 000021307')
    cy.contains('Order Information')
    cy.contains('Portia Capri')
    cy.contains('Argus All-Weather Tank')
    cy.contains('Subtotal')
    cy.contains('Shipping & Handling')
    cy.contains('Grand Total')
  });

  it('wrong_orderId_not_found', function() {
    cy.visit('https://magento.softwaretestingboard.com/sales/guest/form/');
    cy.get('#oar-order-id').type('00002130719284792349');
    cy.get('#oar-billing-lastname').type('Paredes Rosa');
    cy.get('#oar_email').type('josw.paredes1998@gmail.com');
    cy.get('#oar-widget-orders-and-returns-form > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-error > div').click();
    cy.get('.message-error > div').click();

    cy.contains('You entered incorrect data. Please try again.')
  });
})