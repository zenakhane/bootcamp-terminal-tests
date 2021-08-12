let assert = require("assert");
let isFromBellville = require("../functions/isFromBellville");

describe('isFromBellville Function' , function(){
    it('Should return true if registration is from Bellville', function(){
        assert.strictEqual(true, isFromBellville('CY 2265'));
           });
           it('Should return false if registration is not from Bellville', function(){
               assert.strictEqual(false, isFromBellville('CA 4456'));
           });
       });