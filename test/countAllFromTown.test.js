let assert = require("assert");
let countAllFromTown = require("../functions/countAllFromTown");

describe('countAllFromTown function', function(){

    it('should  count how many registration are from a town', function(){
        assert.strictEqual(2, countAllFromTown('CY 345 123, CL 345, CY 123', 'CY'));
    });
    it('should  count how many registration are from a town', function(){
        assert.strictEqual(3, countAllFromTown('CL 345 123, CL 345, CL 123', 'CL'));
    });
});