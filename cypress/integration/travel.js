context('Travel Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/travel.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded travel icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('travel').then(travel => {
        expect(icons.length).to.eq(travel.length);
        expect(travel).to.deep.equal(icons);
      });
    });
  });
});
