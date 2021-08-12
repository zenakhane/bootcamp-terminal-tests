let assert = require("assert");
let transportFee = require("../functions/transportFee");

describe('transportFee Function' , function(){
    it('Should return transport fee for a shift', function(){
        assert.strictEqual('R20', transportFee('morning'));
        });
        it('Should return transport fee for a shift', function(){
            assert.strictEqual('R10', transportFee('afternoon'));
            });
             it('Should return transport fee for a shift', function(){
                 assert.strictEqual('free', transportFee('nightshift'));
                 });
            

    });
    