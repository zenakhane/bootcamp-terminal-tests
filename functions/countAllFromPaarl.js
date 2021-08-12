module.exports = function countAllPaarl(register){
  let counter = 0
  
     const registration = register.split(",")
      
       
        for(var i=0; i<registration.length; i++){
         var count = registration[i].trim()
         if(count.startsWith('CJ')){
         counter++
           
         }
          
         }return counter
    }

