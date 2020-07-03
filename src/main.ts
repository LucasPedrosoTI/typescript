// Foursquare API Info
const clientId: string = "MOU2S2BY2USM5TNTQRKK5SUSUXKPPAKK1IUDOWEE4H3BAPP1";
const clientSecret: string = "Q5CJ0SMV5WEAU0N0AZZAWAXJ2WVMAT3V1BX3PBB11CLBZMG3";
const url: string = "https://api.foursquare.com/v2/venues/search?near=";

// OpenWeather Info
const openWeatherKey: string = "6062a9a8cebff2568981a400b1034eeb";
const weatherUrl: string = "https://api.openweathermap.org/data/2.5/weather";

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
const weekDays: string[] = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

interface Venue {
  categories: Category[];
  name: string;
  location: Location;
}

interface Category {
  icon: Icon;
}

interface Icon {
  prefix: string;
  suffix: string;
}

interface Location {
  address: string;
  city: string;
  country: string;
}

interface Day {
  main: Temperature;
  weather: Weather[];
}

interface Temperature {
  temp_min: number;
  temp_max: number;
}

interface Weather {
  icon: string;
}

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch: string =
    url +
    city +
    "&limit=30&client_id=" +
    clientId +
    "&client_secret=" +
    clientSecret +
    "&v=20200702";
  try {
    const res: Response = await fetch(urlToFetch);
    if (res.ok) {
      const { response } = await res.json();
      const { venues } = response;
      return venues;
    }
    throw new Error("Request failed");
  } catch (error) {
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
  } catch (error) {
    console.log(error);
  }
};

const generateArrayWithRandomIndexes = (indexLength: number): number[] => {
  const arr: number[] = [];
  while (arr.length < indexLength) {
    let random = Math.floor(Math.random() * indexLength);
    if (arr.indexOf(random) === -1) arr.push(random);
  }

  return arr;
};

// Render functions
const renderVenues = async (venues: Venue[]) => {
  const nVenues = await getVenues();
  const arr: number[] = generateArrayWithRandomIndexes(nVenues.length);

  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue: Venue = venues[arr[index]];

    const venueIcon: Icon = venue.categories[0].icon;
    const venueImgSrc: string = venueIcon.prefix + "bg_64" + venueIcon.suffix;

    let venueContent: string = `<h2>${venue.name}</h2> <img class="venueimage" src="${venueImgSrc}"/> <h3>Endereço:</h3> <p>${venue.location.address}</p> <p>${venue.location.city}</p>  <p>${venue.location.country}</p>`;

    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (day: Day) => {
  // Add your code here:
  const KelvinToCelsius = (temp: number): string => (temp - 273.15).toFixed(0);

  const max: string = KelvinToCelsius(day.main.temp_max);
  const min: string = KelvinToCelsius(day.main.temp_min);

  let weatherContent: string = `<h2> Máxima: ${max} &deg;C </h2>
        <h2> Mínima: ${min} &deg;C  </h2>
        <img src="https://openweathermap.org/img/wn/${
          day.weather[0].icon
        }@2x.png" class="weathericon" />
        <h2>${weekDays[new Date().getDay()]}</h2>`;

  $weatherDiv.append(weatherContent);
};

const executeSearch = (): boolean => {
  $venueDivs.forEach((venue) => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then((venues) => renderVenues(venues));
  getForecast().then((forecast) => renderForecast(forecast));
  return false;
};

$submit.click(executeSearch);
