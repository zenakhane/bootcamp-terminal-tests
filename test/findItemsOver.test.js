let assert = require("assert");
let findItemsOver = require("../functions/findItemsOver");

describe('findItemsOver Function' , function(){
    it('Should return items over 20', function(){
        assert.ok(
            findItemsOver([
                {"name":"apples","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":3}
    
            ], 20),
            [
            {"name":"pears","qty":37},
            {"name":"bananas","qty":27}
        ]);

        });

    it('Should return items over 30', function(){
        assert.ok(
            findItemsOver([
                {"name":"apples","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":3}
    
            ], 30),
            [
                {"name":"pears","qty":37}
        ]);

        });

    it('Should return items over 5', function(){
        assert.ok(
            findItemsOver([
                {"name":"grapes","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":7}
    
            ], 5),
            [ 
                {"name":"grapes","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":7}
    
                
        ]);

        });

    });

    
     