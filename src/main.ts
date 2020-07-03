// Foursquare API Info
const clientId: string = "MOU2S2BY2USM5TNTQRKK5SUSUXKPPAKK1IUDOWEE4H3BAPP1";
const clientSecret: string = "Z4GDHCVU2NTNCTOLVIFQ0Z5TDLN543UF4NQJ3Q0QG1FABRLT";
const url: string = "https://api.foursquare.com/v2/venues/search?near=";

// OpenWeather Info
const openWeatherKey: string = "6062a9a8cebff2568981a400b1034eeb";
const weatherUrl: string = "https://api.openweathermap.org/data/2.5/forecast";

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
  // $("#venue7"),
  // $("#venue8"),
  // $("#venue9"),
];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3")];
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
  id: string;
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

interface Item {
  prefix: string;
  suffix: string;
}

interface Response {
  photos: Photo;
}

interface Photo {
  count: number;
  items: Item[];
}

/**
 * RETURNS THE DATE IN FORMAT YYYYMMDD
 */
const getTodayDateString = (): string => {
  const today: Date = new Date();
  return today.toISOString().split("T")[0].replace(/[-]/gm, "");
};

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch: string = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${getTodayDateString()}`;
  try {
    const res: Response = await fetch(urlToFetch);
    if (res.ok) {
      const { response } = await res.json();
      const { venues } = response;
      // console.log(venues);
      return venues;
    }
    throw new Error("Request failed");
  } catch (error) {
    console.log(error);
  }
};

const getVenuePhotos = async (venue: Venue) => {
  try {
    const res = await fetch(
      `https://api.foursquare.com/v2/venues/${
        venue.id
      }/photos?limit=2&client_id=${clientId}&client_secret=${clientSecret}&v=${getTodayDateString()}`
    );

    if (res.ok) {
      const { response } = await res.json();
      return response;
    }
    throw new Error("Request failed");
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const getVenueLikes = async (venue: Venue) => {
  try {
    const res = await fetch(
      `https://api.foursquare.com/v2/venues/${
        venue.id
      }/likes?client_id=${clientId}&client_secret=${clientSecret}&v=${getTodayDateString()}`
    );

    if (res.ok) {
      const { response } = await res.json();
      return response;
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

  $venueDivs.forEach(async ($venue, index) => {
    // Add your code here:
    const venue: Venue = venues[arr[index]];
    let venuePhoto: Item;
    let venuePhotoSrc: string;

    const response: Response = await getVenuePhotos(venue);
    const { likes } = await getVenueLikes(venue);

    if (response) {
      venuePhoto = response.photos.items[0];
      venuePhotoSrc = `${venuePhoto.prefix}original${venuePhoto.suffix}`;
    } else {
      venuePhotoSrc = "public/img/noimg.jpg";
    }

    const venueIcon: Icon = venue.categories[0].icon;
    const venueImgSrc: string = venueIcon.prefix + "bg_64" + venueIcon.suffix;

    let venueContent: string = `<h2>${venue.name}</h2> 
     
    <img class="venue_photo" src="${venuePhotoSrc}"/> 
    <div class="venue_address_photo"/> 
      <div class="venue_address" />
      <p>❤️ ${likes.count} </p> 
        <h3>Endereço:</h3> 
        <p>${venue.location.address}</p> 
        <p>${venue.location.city}</p>  
        <p>${venue.location.country}</p> 
      </div> 
    <img class="venueimage" src="${venueImgSrc}"/> 
    </div>`;

    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (days: Day[]) => {
  const KelvinToCelsius = (temp: number): string => (temp - 273.15).toFixed(0);
  const weekday = new Date().getDay(); // 0,1,2,3,4,5,6
  const daysArr = [0, 8, 16];

  $weatherDivs.forEach(($weather, index) => {
    const day = days[daysArr[index]];
    const max: string = KelvinToCelsius(day.main.temp_max);
    const min: string = KelvinToCelsius(day.main.temp_min);
    const weekdayIndex =
      weekday + index <= 6 ? weekday + index : weekday + index - 7;

    let weatherContent: string = `<h2> Máxima: ${max} &deg;C </h2>
          <h2> Mínima: ${min} &deg;C  </h2>
          <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="weathericon" />
          <h2>${weekDays[weekdayIndex]}</h2>`;

    $weather.append(weatherContent);
  });
};

const executeSearch = (): boolean => {
  $venueDivs.forEach((venue) => venue.empty());
  $weatherDivs.forEach((weather) => weather.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then((venues) => renderVenues(venues));
  getForecast().then((forecast) => renderForecast(forecast.list));
  return false;
};

$submit.click(executeSearch);
