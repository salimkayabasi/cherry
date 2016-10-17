var chai = require('chai');
var dirtyChai = require('dirty-chai');
chai.use(dirtyChai);
var expect = chai.expect;

describe('Just adding a basic test example', function () {
  describe('2 plus 2', function () {
    it('should be 4', function () {
      expect(2 + 2).to.be.equal(4);
    })
  })
});
