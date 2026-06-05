loadJSON
========================

*From the p5js reference page*

Reads the contents of a JSON file or URL and creates a JavaScript object (or array) with its values.

If a file is specified, it must be located in the sketch's folder. The first parameter can also be a URL to JSON hosted online.

This method is asynchronous, meaning it may not finish before the next line in your sketch is executed. You can handle this with by use the ``async`` and ``await`` keywords, as shown below.


Starter Example (async/await)
-----------------------------

.. code-block:: javascript

	 let img;

	 async function setup() {
		 createCanvas(400, 400);
		 let json = await loadJSON("https://dog.ceo/api/breeds/image/random");
		 // console.log(json);
		 img = await loadImage(json.message);
	 }

	 function draw() {
		 image(img, 0, 0);
	 }

In this example:

- ``loadJSON()`` gets JSON from a web API.
- The API returns an object with a ``message`` property that contains an image URL.
- ``loadImage()`` then loads that image so it can be drawn to the canvas.



Important Patterns to Know
--------------------------

- Access object values with dot notation, for example ``json.message``.
- If JSON contains arrays, loop through them with ``for`` or ``for...of``.
- Use ``console.log(json)`` to inspect unknown JSON structures.


Demo
----

Use the Dog API endpoint ``https://dog.ceo/api/breeds/image/random``.

1. Load JSON data in ``setup()``.
2. Extract the image URL from ``json.message``.
3. Load and display the dog image on the canvas.
4. Add a mouse click (or key press) to fetch and show a new random dog.



Next Example: Weather Data by City
----------------------------------

.. code-block:: javascript

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

	   // console.log("Current:", weatherData.current.temperature_2m);

	   console.log("Today's High: " + weatherData.daily.temperature_2m_max[0]);

	   console.log("Today's Low: " + weatherData.daily.temperature_2m_min[0]);
	 }

In this example:

- The first ``loadJSON()`` call converts a city name into latitude/longitude.
- The second ``loadJSON()`` call uses those coordinates to get forecast data.
- Nested fields and arrays are accessed with paths like ``weatherData.daily.temperature_2m_max[0]``.


Demo
------

Use the weather example and turn it into a simple data visualization.

1. Request both temperature and humidity in ``current`` data:
   ``current=temperature_2m,relative_humidity_2m``
2. Save both values to variables after loading weather JSON.
3. Make the background color in ``draw()`` depend on the temperature.
4. Draw a rectangle where the color depends on the humidity.


Final Example: ESPN Scores and Team Info
----------------------------------------

.. code-block:: javascript

	 let homeLogo, awayLogo;

	 async function setup() {
	   createCanvas(400, 200);

	   let data = await loadJSON("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard");

	   let game = data.events[0].competitions[0];

	   let home = game.competitors.find(c => c.homeAway === "home").team;
	   let away = game.competitors.find(c => c.homeAway === "away").team;

	   homeLogo = await loadImage(home.logo);
	   awayLogo = await loadImage(away.logo);
	 }

	 function draw() {
	   background(220);

	   image(homeLogo, 50, 50, 100, 100);
	   image(awayLogo, 250, 50, 100, 100);
	 }


In this example:

- ``loadJSON()`` gets the live NBA scoreboard feed from ESPN.
- The code drills into nested arrays/objects: ``events[0] -> competitions[0] -> competitors``.
- ``find(...)`` selects the home and away teams, then their logos are loaded with ``loadImage()``.


Demo
----

Try extending this ESPN example.

1. Display logos from a few games tonight instead of just one game. Loop through ``data.events`` and load logos for each matchup you want to show.
2. Switch to a different league by changing the API endpoint. For example, replace ``nba`` with ``nhl``, ``mlb``, or ``football/nfl`` in the URL.
3. Draw each matchup in a row (away logo vs home logo) with team abbreviations.



Reference
---------

- `p5.js loadJSON() reference <https://p5js.org/reference/p5/loadJSON/>`_
