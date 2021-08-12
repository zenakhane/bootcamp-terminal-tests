let assert = require("assert");
let fromWhere = require("../functions/fromWhere");

describe('fromWhere function' , function(){
    it('Should return location the registration is from', function(){
        assert.equal('Cape Town', fromWhere('CA'));
        });
        it('Should return location the registration is from', function(){
            assert.equal('Paarl', fromWhere('CJ'));
            });
            it('Should return location the registration is from', function(){
                assert.equal('Some other place!', fromWhere('Cz'));
                });
     
    });
    
     