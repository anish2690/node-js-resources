//Using Fetch
const fetch = require('node-fetch')
let url1 = 'https://jsonplaceholder.typicode.com/todos/1' ;
let url2 = 'https://jsonplaceholder.typicode.com/todos/2' ;
fetch(url1)
  .then(response => response.json())
  .then(json => {
     console.log(json)
     return fetch(url2)
  })
  .then(res => res.json())
  .then(j => console.log(j))
  .catch(err => console.log(err))


