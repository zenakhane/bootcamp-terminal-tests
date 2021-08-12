function countAllFromTown(reg,location){
    let counter = 0
    const fromStellies = []
    const register = reg.split(",")
     for(var i=0; i<register.length; i++){
     let town = register[i].trim()
     if(town.startsWith(location)){
      counter++
     }
     }return counter
  } 