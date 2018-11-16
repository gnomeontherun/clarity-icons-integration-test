context('Social Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/social.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded social icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('social').then(social => {
        expect(icons.length).to.eq(social.length);
        expect(social).to.deep.equal(icons);
      });
    });
  });
});
