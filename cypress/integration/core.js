context('Core Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/core.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded all icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      expect(icons.length).to.eq(48);
    });
  });
});
