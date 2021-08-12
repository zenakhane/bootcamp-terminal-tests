let assert = require("assert");
let mostProfitableDepartment = require("../functions/mostProfitableDepartment");

describe('mostProfitableDepartment Function' , function(){
    it('Should return carpentry department', function(){
        assert.strictEqual('carpentry', 
        mostProfitableDepartment([ 
        {"department":"carpentry","sales":5500,"day":"Monday"},
        {"department":"hardware","sales":4500,"day":"Monday"},
        {"department":"outdoor","sales":1500,"day":"Monday"},
        ]))

    });
it('Should return hardware department', function(){
    assert.strictEqual('hardware', 
    mostProfitableDepartment([ 
        {"department":"hardware","sales":7500,"day":"Tuesday"},
        {"department":"outdoor","sales":2505,"day":"Tuesday"},
        {"department":"carpentry","sales":1540,"day":"Tuesday"}
    
    ]))

});
})