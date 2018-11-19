import * as chart from '../fixtures/chart.json';
import * as commerce from '../fixtures/commerce.json';
import * as core from '../fixtures/core.json';
import * as essential from '../fixtures/essential.json';
import * as media from '../fixtures/media.json';
import * as social from '../fixtures/social.json';
import * as technology from '../fixtures/technology.json';
import * as textEdit from '../fixtures/text-edit.json';
import * as travel from '../fixtures/travel.json';

module.exports = function shapeSpec(setName, testSets = []) {
  beforeEach(() => {
    if (testSets.length < 1) {
      testSets.push(setName);
    }
    cy.visit(`http://localhost:8080/fixtures/${setName}.html`);
  });
  
  it('should setup ClarityIcons', () => {
    cy.window().should('have.property', 'ClarityIcons');
  });
  
  it(`should have loaded the icons`, () => {
    cy.window().then(win => {
      let counter = 0;
      const icons = Object.keys(win.ClarityIcons.iconShapeSources);
      const sets = [
        { name: 'chart', shapes: chart.default },
        { name: 'commerce', shapes: commerce.default },
        { name: 'core', shapes: core.default },
        { name: 'essential', shapes: essential.default },
        { name: 'media', shapes: media.default },
        { name: 'social', shapes: social.default },
        { name: 'technology', shapes: technology.default },
        { name: 'text-edit', shapes: textEdit.default },
        { name: 'travel', shapes: travel.default },
      ];
      
      sets.forEach(set => {
        if (testSets.indexOf(set.name) >= 0) {
          expect(icons).to.include.members(set.shapes, `Expected ${set.name} to be included`);
          counter++;
        } else {
          expect(icons).to.not.include.members(set.shapes, `Expected ${set.name} not to be included`);
        }
      });

      expect(counter).to.be.gt(0);
    });
  });
}