
const select = document.querySelector('.choose_select');
const number = document.querySelector('#number');
const btn = document.getElementById('btn');
const text = document.querySelector('.text');

btn.addEventListener('click', chooseInfo);

function chooseInfo() {
    let num = number.value;
    fetch(`https://swapi.dev/api/${select.value}/${num}`)
        .then(response => response.json())
        .then(json => {
            let option = select.options;
            //console.log(option);
            if (option[0].selected && num <= 10) {
                text.innerHTML = `Name: ${json.name} <br> Height: ${json.height} <br> Mass: ${json.mass}
        Hair_color: ${json.hair_color} <br> Skin_color: ${json.skin_color} <br>
        Birth_year: ${json.birth_year} <br> Created: ${json.created} <br>
        Edited: ${json.edited} <br> Eye_color: ${json.eye_color} <br> Gender: ${json.gender}`;
            } else if (option[1].selected && num <= 10) {
                text.innerHTML = `Name: ${json.name} <br> Climate: ${json.climate} <br> Diameter: ${json.diameter}
        Rotation_period: ${json.rotation_period} <br> Orbital_period: ${json.orbital_period} <br>
        Gravity: ${json.gravity} <br> Created: ${json.created} <br>
        Edited: ${json.edited} <br> Population: ${json.population} <br> Terrain: ${json.terrain} <br>
        Surface_water: ${json.surface_water}`;
            } else if (option[2].selected && num <= 10) {
                text.innerHTML = `Title: ${json.title} <br> Director: ${json.director} <br> Episode_id: ${json.episode_id}
        Opening_crawl: ${json.opening_crawl} <br> Producer: ${json.producer} <br>
        Release_date: ${json.release_date} <br> Created: ${json.created} <br>
        Edited: ${json.edited}`;
            } else if (option[3].selected && num <= 10) {
                text.innerHTML = `Name: ${json.name} <br> Classification: ${json.classification} <br> Designation: ${json.designation}
        Hair_colors: ${json.hair_colors} <br> Skin_colors: ${json.skin_colors} <br>
        Average_height: ${json.average_height} <br> Created: ${json.created} <br>
        Edited: ${json.edited} <br> Eye_colors: ${json.eye_colors} <br> Language: ${json.language} <br>
        Average_lifespan: ${json.average_lifespan}`;
            } else if (option[4].selected && num <= 10) {
                text.innerHTML = `Name: ${json.name} <br> MGLT: ${json.MGLT} <br> Cargo_capacity: ${json.cargo_capacity}
        Consumables: ${json.consumables} <br> Cost_in_credits: ${json.cost_in_credits} <br>
        Crew: ${json.crew} <br> Created: ${json.created} <br>
        Edited: ${json.edited} <br> Lenght: ${json.lenght} <br> Manufacturer: ${json.manufacturer} <br>
        Hyperdrive_rating: ${json.hyperdrive_rating} <br> Max_atmosphering_speed: ${json.max_atmosphering_speed} <br> 
        Model: ${json.model} <br> Passengers: ${json.passengers} <br> StarShip_class: ${json.starship_class}`;
            } else if (option[5].selected && num <= 10) {
                text.innerHTML = `Name: ${json.name} <br> Cargo_capacity: ${json.cargo_capacity}
        Consumables: ${json.consumables} <br> Cost_in_credits: ${json.cost_in_credits} <br>
        Crew: ${json.crew} <br> Created: ${json.created} <br>
        Edited: ${json.edited} <br> Lenght: ${json.lenght} <br> Manufacturer: ${json.manufacturer} <br>
        Max_atmosphering_speed: ${json.max_atmosphering_speed} <br> 
        Model: ${json.model} <br> Passengers: ${json.passengers} <br> Vehicle_class: ${json.vehicle_class}`;
            } else {
                text.innerHTML = `Выберите другую информацию, в числовом диапазоне от 1 до 10. Спасибо!`;
            }
            document.querySelector('.loader').style.display = "none";
            //console.log(json);
        })
        .catch(error => text.innerHTML = `Произошла ошибка ${error.message}`)
}