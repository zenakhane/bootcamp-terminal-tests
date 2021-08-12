function mostProfitableDepartment(salesData){
    //console.log(salesData)
    const profitMap = {};
    for(var i=0;i<salesData.length;i++){
    const items = salesData[i];
    profitMap[items.department]=0;
      //console.log(profitMap)
    }
    for(var i=0;i<salesData.length;i++){
      const items = salesData[i];
      var departmentTotal = profitMap[items.department];
      departmentTotal += items.sales
    profitMap[items.department]= departmentTotal;
    }
     var currentMaxSales = 0;
    var currentDepartment = " ";
      for(const salesDepartment in profitMap){
      var currentDepartmentSales = profitMap[salesDepartment]
     console.log(currentDepartmentSales)
    if(currentDepartmentSales > currentMaxSales){
      currentMaxSales = currentDepartmentSales
    currentDepartment = salesDepartment
  }
      }
    //console.log(currentDepartment)
    return currentDepartment
  }
  
  