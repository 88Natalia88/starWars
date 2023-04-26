
fetch('https://swapi.dev/api/')
.then(response => response.json())
.then(json =>
    console.log(json.people))