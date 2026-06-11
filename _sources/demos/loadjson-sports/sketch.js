//espn nba game example

let homeLogo, awayLogo;
let data;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  data = await loadJSON("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard");

  let game = data.events[0].competitions[0];

  // Find the home team
  let home;
  for (let i = 0; i < game.competitors.length; i++) {
    if (game.competitors[i].homeAway === "home") {
      home = game.competitors[i].team;
      break; //force the loop to stop
    }
  }

  // Find the away team
  let away;
  for (let i = 0; i < game.competitors.length; i++) {
    if (game.competitors[i].homeAway === "away") {
      away = game.competitors[i].team;
      break; //force the loop to stop
    }
  }

  homeLogo = await loadImage(home.logo);
  awayLogo = await loadImage(away.logo);
}

function draw() {
  background(220);

  image(homeLogo, 50, 50, 100, 100);
  image(awayLogo, 250, 50, 100, 100);
}
