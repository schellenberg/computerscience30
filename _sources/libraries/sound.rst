p5.sound Library
========================


Installing a Library
---------------------

A p5.js library can be any JavaScript code that extends or adds to the p5.js core functionality. p5.dom and p5.sound are part of the p5.js distribution, while contributed libraries are developed, owned, and maintained by members of the p5.js community. I have also included the p5.collide library as part of the p5js template folder that we have been using. For any other library that you want to use (you can find a `list of them here <https://p5js.org/libraries/>`_), you will need to download the .js file, put it in your project folder, then link to it using a script tag in your HTML file.

To include a library in your sketch, link it into your HTML file, after you have linked in p5.js. An example HTML file might look like this:

.. code-block:: html

    <!doctype html>
    <html>
    <head>
        <script src="js/p5.js">
        <script src="js/p5.sound.js">
        <script src="sketch.js">
    </head>
    <body>
    </body>
    </html>


Using the Sound Library
----------------------------

For a full list of functionality, you should check the `p5.sound reference page <https://p5js.org/reference/#/libraries/p5.sound>`_. I will only cover the very basics here.

- `loadSound() <https://p5js.org/reference/#/p5.SoundFile/loadSound>`_ -- should be done in preload if you are going to use it right away
- `play() <https://p5js.org/reference/#/p5.SoundFile/play>`_ -- play the p5.SoundFile that has been loaded
- `pause() <https://p5js.org/reference/#/p5.SoundFile/pause>`_ -- pause the p5.SoundFile that is playing
- `loop() <https://p5js.org/reference/#/p5.SoundFile/loop>`_ -- loop the p5.SoundFile (play it over and over again)
- `pause() <https://p5js.org/reference/#/p5.SoundFile/pause>`_ -- pause the p5.SoundFile that is playing
- `setVolume() <https://p5js.org/reference/#/p5.SoundFile/setVolume>`_ -- set the volume of a sound file between 0.0 (silence) and 1.0 (full volume)


Demo
-----

Bouncing ball demo. Background music. Bouncing sound effect.