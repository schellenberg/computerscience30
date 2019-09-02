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


