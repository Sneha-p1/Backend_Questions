
fetch('https://jsonplaceholder.typicode.com/todos/20')
    .then(response =>response.json())
    .then(json =>console.log(json))
    .catch(error =>{
        console.log("error occured..")
    });