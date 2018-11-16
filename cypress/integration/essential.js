context('Essential Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/essential.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded essential icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('essential').then(essential => {
        expect(icons.length).to.eq(essential.length);
        expect(essential).to.deep.equal(icons);
      });
    });
  });
});
