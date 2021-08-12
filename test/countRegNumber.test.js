let assert = require("assert");
let countRegNumber = require("../functions/countRegNumber");

describe('countRegNumber Function' , function(){
    it('Should return total number of registration numbers in a string ',function(){
        assert.strictEqual(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
        }); 
        it('Should return total number of registration numbers in a string', function(){
            assert.strictEqual(1, countRegNumber('CJ 812328'));
            });
     
    });
    