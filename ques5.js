//You need to write a function that takes a name as input and returns a promise that resolves with a greeting
//message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
//zFor example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

// function greet(name){
//     return new Promise(function(resolve,reject){
//         const greeting = `hello ${name}!`
//         resolve(greeting)

//     })

// }
// greet("akshay").then(function(msg){
//     console.log(msg);
// })

function greet(name){
    return new Promise(function(resolve,reject){
        const greeting = `hello ${name}!`
        resolve(greeting)

    })

}
async function aditya(){
    const response = await greet("akshay")
    console.log(response,);
}
aditya()
