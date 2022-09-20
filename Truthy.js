const array = [0,'a',"Ardy",null, undefined,NaN, 1]; // list of array
function num (list) { // function
    let result =[];
    
    for (let i=0; i<list.length; i++){  // loop
        if(list[i]){    // condition
            result.push(true);
        }else{
            result.push(false);
        }
    }
    return result;
}
console.log(num(array)); 
