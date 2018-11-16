context('Commerce Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/commerce.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded commerce icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('commerce').then(commerce => {
        expect(icons.length).to.eq(commerce.length);
        expect(commerce).to.deep.equal(icons);
      });
    });
  });
});
