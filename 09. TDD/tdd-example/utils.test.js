// *******************************************************************

// Testing with Mocha and Chai

// ******************************************************************

/* This example contains a simple test using Mocha and Chai */

const chai = require('chai');
const expect = chai.expect;

const utils = require('./utils');

it('Should calculate area', () => {
  const area = utils.area(2, 4);
  if (area != 2 * 4) {
    throw new Error('Area should be 8 but got '+area);
  }
  expect(area).to.equal(2 * 4);
});
