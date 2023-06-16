 

    async function fetcheddata(){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const result = await response.json();
        console.log(result);
  }
fetcheddata()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);

// }).catch(function(err){
//     console.log("invalid",err);
// })

