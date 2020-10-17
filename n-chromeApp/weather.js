const weather = document.querySelector(".js-weather");

const API_KEY = "be686600b7bcd3049db12d6a50bf3305";
const COORS = 'coords';



getWeather = (lat, lng) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      // console.log('response : ', response.json()); 출력하고 나니 밑에서 오류나네.
      return response.json();
    }).then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${Math.floor(temperature)} @ ${place}`;
    })
}

saveCoords = (coordsObj) => {
  localStorage.setItem(COORS, JSON.stringify(coordsObj));
}

function hanldeGeoSuccess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordObj = {
    latitude,
    longitude,
  }
  saveCoords(coordObj);
  getWeather(latitude, longitude);
}

function hanldeGeoError(error) {

}

askForCoords = () => {
  navigator.geolocation.getCurrentPosition(hanldeGeoSuccess, hanldeGeoError);
}
loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

init = () => {
  loadCoords();
}

init();