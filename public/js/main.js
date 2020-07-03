"use strict";
// Foursquare API Info
const clientId = "MOU2S2BY2USM5TNTQRKK5SUSUXKPPAKK1IUDOWEE4H3BAPP1";
const clientSecret = "Q5CJ0SMV5WEAU0N0AZZAWAXJ2WVMAT3V1BX3PBB11CLBZMG3";
const url = "https://api.foursquare.com/v2/venues/search?near=";
// OpenWeather Info
const openWeatherKey = "6062a9a8cebff2568981a400b1034eeb";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $venueDivs = [
    $("#venue1"),
    $("#venue2"),
    $("#venue3"),
    $("#venue4"),
    $("#venue5"),
    $("#venue6"),
    $("#venue7"),
    $("#venue8"),
    $("#venue9"),
];
const $weatherDiv = $("#weather1");
const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];
// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = url +
        city +
        "&limit=30&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret +
        "&v=20200702";
    try {
        const res = await fetch(urlToFetch);
        if (res.ok) {
            const { response } = await res.json();
            const { venues } = response;
            return venues;
        }
        throw new Error("Request failed");
    }
    catch (error) {
        console.log(error);
    }
};
const getForecast = async () => {
    try {
        const city = $input.val();
        const urlToFetch = weatherUrl + "?q=" + city + "&APPID=" + openWeatherKey;
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            //console.log(jsonResponse);
            return jsonResponse;
        }
        throw new Error("Request failed");
    }
    catch (error) {
        console.log(error);
    }
};
const generateArrayWithRandomIndexes = (indexLength) => {
    const arr = [];
    while (arr.length < indexLength) {
        let random = Math.floor(Math.random() * indexLength);
        if (arr.indexOf(random) === -1)
            arr.push(random);
    }
    return arr;
};
// Render functions
const renderVenues = async (venues) => {
    const nVenues = await getVenues();
    const arr = generateArrayWithRandomIndexes(nVenues.length);
    $venueDivs.forEach(($venue, index) => {
        // Add your code here:
        const venue = venues[arr[index]];
        const venueIcon = venue.categories[0].icon;
        const venueImgSrc = venueIcon.prefix + "bg_64" + venueIcon.suffix;
        let venueContent = `<h2>${venue.name}</h2> <img class="venueimage" src="${venueImgSrc}"/> <h3>Endereço:</h3> <p>${venue.location.address}</p> <p>${venue.location.city}</p>  <p>${venue.location.country}</p>`;
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
};
const renderForecast = (day) => {
    // Add your code here:
    const KelvinToCelsius = (temp) => (temp - 273.15).toFixed(0);
    const max = KelvinToCelsius(day.main.temp_max);
    const min = KelvinToCelsius(day.main.temp_min);
    let weatherContent = `<h2> Máxima: ${max} &deg;C </h2>
        <h2> Mínima: ${min} &deg;C  </h2>
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="weathericon" />
        <h2>${weekDays[new Date().getDay()]}</h2>`;
    $weatherDiv.append(weatherContent);
};
const executeSearch = () => {
    $venueDivs.forEach((venue) => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then((venues) => renderVenues(venues));
    getForecast().then((forecast) => renderForecast(forecast));
    return false;
};
$submit.click(executeSearch);
