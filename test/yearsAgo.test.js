let assert = require("assert");
let yearsAgo = require("../functions/yearsAgo");

describe('yearsAgo Function' , function(){
    it('Should return how many years ago', function(){
        assert.strictEqual(5, yearsAgo(2016));
    });
    it('Should return how many years ago', function(){
        assert.strictEqual(2, yearsAgo(2019));
    });
 
});