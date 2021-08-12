function countAllPaarl(register){
    let counter = 0
    //console.log(register)
       const registration = register.split(",")
         //var paarl = []
         
          for(var i=0; i<registration.length; i++){
           var count = registration[i].trim()
           if(count.startsWith('CJ')){
           counter++
             
           }
            
           }return counter
      }
