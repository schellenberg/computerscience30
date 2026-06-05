
//weather example

// async function setup() {
//   createCanvas(400, 400);

//   await getWeather("Saskatoon");
// }

// function draw() {
//   background(220);
// }

// async function getWeather(cityName) {

//   // Find coordinates
//   let geoData = await loadJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
//   // console.log(geoData);
//   let lat = geoData.results[0].latitude;
//   let lon = geoData.results[0].longitude;

//   // Get weather
//   let weatherData = await loadJSON(`https://api.open-meteo.com/v1/gem?latitude=${lat}&longitude=${lon}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);

//   console.log(weatherData);

//   // console.log("Current:", weatherData.current.temperature_2m);

//   console.log("Today's High: " + weatherData.daily.temperature_2m_max[0]);

//   console.log("Today's Low: " + weatherData.daily.temperature_2m_min[0]);
// }



//espn nba game example

// let homeLogo, awayLogo;

// async function setup() {
//   createCanvas(400, 200);

//   let data = await loadJSON("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard");

//   let game = data.events[0].competitions[0];

//   let home = game.competitors.find(c => c.homeAway === "home").team;
//   let away = game.competitors.find(c => c.homeAway === "away").team;

//   homeLogo = await loadImage(home.logo);
//   awayLogo = await loadImage(away.logo);
// }

// function draw() {
//   background(220);

//   image(homeLogo, 50, 50, 100, 100);
//   image(awayLogo, 250, 50, 100, 100);
// }
