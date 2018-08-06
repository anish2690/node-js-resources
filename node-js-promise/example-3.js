let fetch = require('node-fetch')
let url1 = 'https://jsonplaceholder.typicode.com/todos/1' ;
let url2 = 'https://jsonplaceholder.typicode.com/todos/2' ;

async function getData() {
 let response = await fetch(url1)
 console.log(await response.json())
}


getData()