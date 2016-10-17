const chai = require('chai');
const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);
const expect = chai.expect;

describe('Just adding a basic test example', () => {
  describe('2 plus 2', () => {
    it('should be 4', () => {
      expect(2 + 2).to.be.equal(4);
    });
  });
});
