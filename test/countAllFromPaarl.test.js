let assert = require("assert");
let countAllFromPaarl = require("../functions/countAllFromPaarl");

describe('countAllFromPaarl function', function(){

    it('should  count how many registration are from paarl', function(){
        assert.strictEqual( countAllFromPaarl('CJ 342 593, CK 395, CJ 793'), 2);
    });
    it('should  count how many registration are from paarl', function(){
        assert.strictEqual( countAllFromPaarl('CJ 345 597, CJ 165, CJ 123'), 3);
    });
});