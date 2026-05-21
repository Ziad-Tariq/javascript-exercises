const repeatString = function(str , num) {
    let nameTwo=""
    if(num<0)
    {
       return "ERROR";
    }
    else  {

    for (i=0; i<num; i++){
    nameTwo=nameTwo.concat(str)

 

    }
    return nameTwo;

    }
};
 
repeatString('', 10)
// Do not edit below this line
module.exports = repeatString;
