Inheritance
========================

Inheritance allows us to create new classes based on existing classes.

Consider the following example (taken from `ES6 — classes and inheritance <https://medium.com/ecmascript-2015/es6-classes-and-inheritance-607804080906>`_):

Reminder of OOP Class Syntax
-----------------------------

.. code-block:: javascript

    class Vehicle {
 
        constructor (name, type) {
            this.name = name;
            this.type = type;
        }
        
        getName () {
            return this.name;
        }
        
        getType () {
            return this.type;
        }
    }
    
    let car = new Vehicle('Tesla', 'car');
    console.log(car.getName()); // Tesla
    console.log(car.getType()); // car

You can experiment with this using `this live p5js sketch <https://editor.p5js.org/schellenberg/sketches/joe1Qow1H>`_.

Inheritance Example
---------------------

We use extends to inherit from another class and the super keyword to call the parent class. Moreover, getName() method was overridden in subclass Car.

.. code-block:: javascript

    class Vehicle {
    
        constructor (name, type) {
            this.name = name;
            this.type = type;
        }
        
        getName () {
            return this.name;
        }
        
        getType () {
            return this.type;
        }
    }
    
    class Car extends Vehicle {
    
        constructor (name) {
            super(name, 'car');
        }
        
        getName () {
            return 'It is a car: ' + super.getName();
        }
    }
    
    let car = new Car('Tesla');
    console.log(car.getName()); // It is a car: Tesla
    console.log(car.getType()); // car

You can experiment with this using `this live p5js sketch <https://editor.p5js.org/schellenberg/sketches/h0zQk2fHS4>`_.

Visual Example
---------------

Create a demo using a Shape class that has simple move and display functions. Next, make a couple child classes (like Circle and Square) that extend the Shape class. They should override the display method from the Shape class. Make a bunch of instances of Circle and Square, then iterate through them in the draw loop using a for...of loop.

It should look something like `this live p5js sketch <https://editor.p5js.org/schellenberg/sketches/SNHEW0bKg>`_.`


Tutorial Video
---------------

Daniel Shiffman does an excellent job of explaining this idea using p5js. `Check out his tutorial video here <https://www.youtube.com/watch?v=MfxBfRD0FVU&t=982s>`_ 

