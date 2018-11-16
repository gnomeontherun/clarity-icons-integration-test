context('All Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/all.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded all icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('all').then(all => {
        expect(icons.length).to.eq(all.length);
        expect(all).to.deep.equal(icons);
      });
    });
  });
});
