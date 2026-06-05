const sumAll = function(a, b) {
 
  
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "Input is string, it needs to be a positive number"
  }
  if (a<0 || b<0) {
    return "Input is a negative number, it needs to be a positive number"
  }
 
     let min = Math.min(a, b)
     let max = Math.max(a, b)
      let total=min;
    for (let i=min+1; i<=max; i++){
      
      total+=i;
      
    }
  
    return total;

};
sumAll(2, 4)

// Do not edit below this line
module.exports = sumAll;
