let assert = require("assert");
let findItemsOver20 = require("../functions/findItemsOver20");

describe('findItemsOver20 Function' , function(){
    it('Should return items over 20', function(){
        assert.deepEqual(
            findItemsOver20([
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

    it('Should return items over 20', function(){
        assert.deepEqual(
            findItemsOver20([
                {"name":"apples","qty":30},
                {"name":"pears","qty":47},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":3}
    
            ], 20),
            [ 
                {"name":"apples","qty":30},
                {"name":"pears","qty":47},
                {"name":"bananas","qty":27}
               
        ]);

        });

    it('Should return items over 20', function(){
        assert.deepEqual(
            findItemsOver20([
                {"name":"grapes","qty":35},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":12},
                {"name":"apples","qty":7}
    
            ], 20),
            [ 
                {"name":"grapes","qty":35},
                {"name":"pears","qty":37}
                
                
        ]);

        });

    });
