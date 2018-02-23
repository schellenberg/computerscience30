JS Primer -- stuff to remember from Javascript, The Good Parts

- // comments 
- reserved words:
    abstract
    boolean break byte
    case catch char class const continue
    debugger default delete do double
    else enum export extends
    false final finally float for function
    goto
    if implements import in instanceof int interface
    let long
    native new null
    package private protected public
    return
    short static super switch synchronized
    this throw throws transient true try typeof
    var volatile void
    while with
- simple data types
    - numbers, strings, booleans (all are object-like, since they have methods, but are immutable). Everything else is an object.
- number data type
    - 100 and 1e2 are the same (exponential notation)
    - NaN (not a number) is the result if you do something goofy (like divide by 0)
    - Infinity - all values greater than 1.79769313486231570e+308
- string data type
    - single or double quotes -- convention says double
    - escaped character -- "A" === "\u0041" -- "cols\t1\t2"
    - length property -- "seven".length is 5
    - 'c' + 'a' + 't' === 'cat' (comparison is by value, not reference)
    - strings have methods -- 'cat'.toUpperCase() === 'CAT'
- do while lets you create a loop that will always execute at least once
- try/catch
- return -- either a value or `undefined`
- break -- ends a loops immediately
- operators
    - === exactly equals
    - !== does not equal
    - = assignment
    - += add or concatenate
    - && and
    - || or
- objects
    - container of properties, where a property has a name and a value
    - var stooge = {
         "first-name": "Jerome",
         "last-name": "Howard"
    };
    - var flight = {
         airline: "Oceanic",
         number: 815,
         departure: {
             IATA: "SYD",
             time: "2004-09-22 14:55",
             city: "Sydney"
        }, arrival: {
                     IATA: "LAX",
                     time: "2004-09-23 10:42",
                     city: "Los Angeles"
        } };
    - to retrieve values from an object, you can use either [] or . notation, but . notation is preferred when possible
        stooge["first-name"]     // "Jerome"
        flight.departure.IATA    // "SYD"
    - The undefined value is produced if an attempt is made to retrieve a nonexistent member:
        stooge["middle-name"]   // undefined
        flight.status           // undefined
        stooge["FIRST-NAME"]    // undefined
    - The || operator can be used to fill in default values: 
        var middle =   stooge["middle-name"] || "(none)";
    - A value in an object can be updated by assignment. If the property name already exists in the object, the property value is replaced:
        stooge['first-name'] = 'Jerome';
    - If the object does not already have that property name, the object is augmented:
        stooge['middle-name'] = 'Lester';
        stooge.nickname = 'Curly';
        flight.equipment = {
            model: 'Boeing 777'
        };
        flight.status = 'overdue';
- Objects are passed around by reference. They are never copied:
    var x = stooge;
    x.nickname = 'Curly';
    var nick = stooge.nickname;
        // nick is 'Curly' because x and stooge
        // are references to the same object
    var a = {}, b = {}, c = {};
        // a, b, and c each refer to a
        // different empty object
    a = b = c = {};
        // a, b, and c all refer to
        // the same empty object
- The delete operator can be used to remove a property from an object. It will remove a property from the object if it has one. It will not touch any of the objects in the proto- type linkage.
    another_stooge.nickname    // 'Moe'
- JavaScript provides an exception handling mechanism. Exceptions are unusual (but not completely unexpected) mishaps that interfere with the normal flow of a pro- gram. When such a mishap is detected, your program should throw an exception:
    function add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw {
                name: 'TypeError',
                message: 'add needs numbers'
            }; 
        }
            return a + b; 
    };
- The exception object will be delivered to the catch clause of a try statement: // Make a try_it function that calls the new add
     // function incorrectly.
    var try_it = function () { try {
                 add("seven");
             } catch (e) {
                 document.writeln(e.name + ': ' + e.message);
             }
    }
    try_it( );
