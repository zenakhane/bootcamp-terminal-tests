let assert = require("assert");
let regCheck = require("../functions/regCheck");

describe('regCheck  function' , function(){
    it('Should return location the registration is from', function(){
        assert.ok('Cape Town', regCheck ('CA'));
        });
        it('Should return location the registration is from', function(){
            assert.ok('Paarl', regCheck ('CJ'));
            });
     
    });
    