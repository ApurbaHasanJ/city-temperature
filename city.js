const API_KEY = `afd72cbc9724846918a867276edae909`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
};

// Display temperature, city and condition
const displayTemperature = data => {
    console.log(data)
    // Set City
    setInnerTextById('city-name', data.name)
    // Set Temperature
    setInnerTextById('temperature', data.main.temp)
    // Set Condition
    setInnerTextById('condition', data.weather[0].main)

}

const setInnerTextById = (id , text) =>{
    const getId = document.getElementById(id);
    // console.log(data.weather[0].main)
    getId.innerText = text;
}


// get search button
document.getElementById('search-btn').addEventListener('click', function(){
    // Get search value
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
});



loadTemperature('dhaka')