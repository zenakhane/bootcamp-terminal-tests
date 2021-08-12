let assert = require("assert");
let isWeekday = require("../functions/isWeekday");

describe('isWeekday Function' , function(){
    it('Should return true if its a  weekdays', function(){
        assert.strictEqual(true,isWeekday('Monday'));
    });
    it('Should return  false if its not a weekdays', function(){
        assert.strictEqual(false,isWeekday('Sunday'));
    });
});