localStorage
========================

Local storage saves information in the browser of the user. It can be used to save preferences, previous scores in a game, etc.


Important Functions to Know
----------------------------

- `storeItem() <https://p5js.org/reference/#/p5/storeItem>`_ stores a value in local storage under the key name
- `getItem() <https://p5js.org/reference/#/p5/getItem>`_ returns the value of an item that was stored in local storage using storeItem()
- `removeItem() <https://p5js.org/reference/#/p5/removeItem>`_ removes an item that was stored with storeItem()
- `clearStorage() <https://p5js.org/reference/#/p5/clearStorage>`_ clears all local storage items set with storeItem() for the current domain


Bouncing Ball Demo
-------------------

Use localStorage to keep track of the number of times the ball has bounced off the side of the screen. Show the current record as well as the current number of bounces. Reset the bounces to be 0 when the user presses 'r'. 

