let assert = require("assert");
let greet = require("../functions/greet");

describe('The greet function', function(){

    it('should greet Zena correctly', function(){
        assert.strictEqual('Hello, Zena', greet('Zena'));
    });
    it('should greet Kay correctly', function(){
        assert.strictEqual('Hello, Kay', greet('Kay'));
    });
});