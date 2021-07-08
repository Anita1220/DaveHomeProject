const { expect } = require('chai');
const CareerPage = require('../../page_objects/career/career-page');

describe('Career', () => {

    it('should be able to visit career page', () => {
        // Open Dave.com
        browser.url('./')

        // Navigate to the Careers page
        CareerPage.careerPageBtn.click();

        browser.waitUntil(() => {
            return CareerPage.jobListingsLst.length > 0;
        }, { timeout: 5000, timeoutMsg: "Listings were not displayed" });

        // Map all positions into an object
        const positions = {};
        CareerPage.jobListingsLst.forEach(position => {
            positions[position.$('h3').getText()] = {
                'body': position.$('p').getText(),
                'link': position.$('a')
            }
        });

        // Verify that Senior qa position oppening is existing
        expect(positions['Sr. QA Engineer, Automation']).to.be.string;
        expect(positions['Sr. QA Engineer, Automation'].body).to.be.string;
        expect(positions['Sr. QA Engineer, Automation'].body.length).to.be.greaterThan(20); // Assumption of requirement
        expect(positions['Sr. QA Engineer, Automation'].link.isClickable()).to.be.true;

    })
});
