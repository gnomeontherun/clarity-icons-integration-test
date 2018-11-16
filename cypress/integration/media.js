context('Media Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/media.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded media icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('media').then(media => {
        expect(icons.length).to.eq(media.length);
        expect(media).to.deep.equal(icons);
      });
    });
  });
});
