module.exports = function findItemsOver(a,b){
    var item = []
    for(var i=0; i<a.length; i++){
    if(a[i].qty > b){
      item.push(a[i])
      }
    }
     return item
   }