function totalPhoneBill(phone){
    console.log(phone)
     const bill = phone.split(", ")
    var counter = 0
    for(var i=0; i<bill.length; i++){
      var x = bill[i]
  if(x.includes("call")){
     counter += 2.75}
      else if(x.includes("sms")){
      counter += 0.65
      }
      
    }return "R" + counter.toFixed(2)
      
  }