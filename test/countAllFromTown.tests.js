var functionToTest = require('../function-to-test');

describe('countAllFromTown function', function(){

    it('should  count how many registration are from paarl', function(){
        assert.strictEqual( countAllFromPaarl());
    });
    it('should  count how many registration are from paarl', function(){
        assert.strictEqual( countAllFromPaarl('Karen'));
    });
});