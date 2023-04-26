
const select = document.querySelector('.choose_select');
const number = document.querySelector('#number');
const btn = document.getElementById('btn');
const text = document.querySelector('.text');
let obj = [];
select.addEventListener('change', chooseInfo);
number.addEventListener('input', chooseInfo);

function chooseInfo(){
    let num = number.value;
    fetch(`https://swapi.dev/api/${select.value}/${num}`)
    .then(response => response.json())
    .then(json =>
        console.log(json)
    )}