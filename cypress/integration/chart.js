context('Chart Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/chart.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded chart icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('chart').then(chart => {
        expect(icons.length).to.eq(chart.length);
        expect(chart).to.deep.equal(icons);
      });
    });
  });
});
