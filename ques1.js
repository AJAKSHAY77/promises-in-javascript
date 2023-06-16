//Write a function that takes in an array of integers and a callback function, and returns a new array where each
//element is doubled using the callback.

const array = [1,2,3,4,5,6,7];

function doublearray(arr,callbackfun){
    const result =  arr.map(function(el){
     return callbackfun(el)

    })
    return result
}

function callbackfun(num){
    return num*2
}
const finalresult = doublearray(array,callbackfun)
console.log(finalresult);

