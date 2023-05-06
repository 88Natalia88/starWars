const select = document.querySelector('.choose_select');
const number = document.querySelector('#number');
const btn = document.getElementById('btn');
const text = document.querySelector('.text');
const load = document.querySelector('.loader');

btn.addEventListener('click', chooseInfo);

//добавление загрузки
function addLoad() {
    load.style.cssText = "display: flex;"
}

//выбор персонажа и вывод инфо на экран
function chooseInfo() {
    let num = number.value;
    fetch(`https://swapi.dev/api/${select.value}/${num}`, addLoad())
        .then(response => response.json())
        .then(json => {
            let value = Object.values(json);
            let key = Object.keys(json);
            for (let i = 0; i < 8; i++) {
                if (value[i] == undefined) {
                    text.innerHTML = `Нет информации`;
                } else if (num <= 10) {
                    text.innerHTML += `<p>${key[i]}: ${value[i]}</p>`;
                } else {
                    text.innerHTML = `Выберите другую информацию, в числовом диапазоне от 1 до 10. Спасибо!`;
                }
            }
            load.style.display = "none";
            text.classList.add('line');
        })
        .catch(error => text.innerHTML = `Произошла ошибка ${error.message}`)
        .finally(() => number.value = '')
}
