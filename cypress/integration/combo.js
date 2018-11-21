import * as chart from '../fixtures/chart.json';
import * as commerce from '../fixtures/commerce.json';
import * as core from '../fixtures/core.json';
import * as essential from '../fixtures/essential.json';
import * as media from '../fixtures/media.json';
import * as social from '../fixtures/social.json';
import * as technology from '../fixtures/technology.json';
import * as textEdit from '../fixtures/text-edit.json';
import * as travel from '../fixtures/travel.json';

context('Combination of Icon Sets', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/fixtures/combo.html');
  });

  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });

  it('should have loaded correct icons', () => {
    cy.window().then(win => {
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      const sets = [
        { included: true, shapes: chart.default },
        { included: false, shapes: commerce.default },
        // { included: true, shapes: core.default },
        { included: false, shapes: essential.default },
        { included: false, shapes: media.default },
        // { included: true, shapes: social.default },
        { included: false, shapes: technology.default },
        { included: false, shapes: textEdit.default },
        { included: false, shapes: travel.default },
      ];

      sets.forEach(set => {
        if (set.included) {
          expect(icons).to.include.members(set.shapes);
        } else {
          expect(icons).to.not.include.members(set.shapes);
        }
      });
    });
  });
});
