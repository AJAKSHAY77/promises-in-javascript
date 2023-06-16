//Create an asynchronous function that retrieves data from two different API endpoints: "https://
//jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
//a to-do task, while the second API provides post details. The function should combine the results from both APIs
//and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
//responses from the respective APIs.

async function combinedata(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data1 = await response.json()
       
    
        const response2 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data2 = await response2.json()
        
    
        const result = {
            todo:data1,
            post:data2
        }
        console.log(result);

    }catch{
        console.log("invalid error");
    }
   
}
combinedata()
