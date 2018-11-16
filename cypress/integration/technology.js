context('Technology Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/technology.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded technology icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('technology').then(technology => {
        expect(icons.length).to.eq(technology.length);
        expect(technology).to.deep.equal(icons);
      });
    });
  });
});
