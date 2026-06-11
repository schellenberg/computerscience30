
// weather example

async function setup() {
  createCanvas(400, 400);

  await getWeather("Saskatoon");
}

function draw() {
  background(220);
}

async function getWeather(cityName) {

  // Find coordinates
  let geoData = await loadJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
  // console.log(geoData);
  let lat = geoData.results[0].latitude;
  let lon = geoData.results[0].longitude;

  // Get weather
  let weatherData = await loadJSON(`https://api.open-meteo.com/v1/gem?latitude=${lat}&longitude=${lon}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);

  console.log(weatherData);

  console.log("Current: " + weatherData.current.temperature_2m + weatherData.current_units.temperature_2m);

  console.log("Today's High: " + weatherData.daily.temperature_2m_max[0] + weatherData.daily_units.temperature_2m_max);

  console.log("Today's Low: " + weatherData.daily.temperature_2m_min[0]+ weatherData.daily_units.temperature_2m_min);
}


