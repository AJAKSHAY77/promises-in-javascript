//Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
//function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
//with the manipulated string or the new string to the console.

// function manipulateString(inputstring,callbackfun){
//     const manipulatedstring = inputstring.toUpperCase()
//     return callbackfun(manipulatedstring)
// }

// function  logstring(el){
//     console.log(`the manipulated string is ${el}`);

// }
// manipulateString("hello world",logstring)

function manipulateString(string,functionn){
    const manipulatedstring = string.toUpperCase()
    functionn(manipulatedstring)
}
function logstring(el){
    console.log(`the manipulated string is ${el}`);
}
manipulateString("akshay",logstring)
