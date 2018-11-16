context('Text-Edit Icon Set', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/text-edit.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded text-edit icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      cy.fixture('text-edit').then(textEdit => {
        expect(icons.length).to.eq(textEdit.length);
        expect(textEdit).to.deep.equal(icons);
      });
    });
  });
});
