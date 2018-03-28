const {expect} = require('chai');
describe('nested test', () => {
    it('should fail', () => {
        expect(0).to.equal(1);
    });
    it('should pass', () => {
        expect(0).to.equal(0);
    });

});