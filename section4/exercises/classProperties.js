/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {
}
var name = new Dog();
var color = new Dog()

// Prompt 2: Snack
class Snack {
}
var sandwich = new Snack()
var fruit = new Snack()

// Prompt 3: Shirt
class Shirt {
}
var color = new Shirt()
var size = new Shirt()

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog {
  constructor() {
    this.name = "buddy";
    this.color = "brown";
    this.age = 11;
  }
}
var beagle = new Dog();
console.log(beagle)

// Prompt 2: Snack

class Snack {
  constructor() {
    this.sweet = true;
    this.salty = false;
    this.calories = 125;
  }
}
var banana = new Snack();
console.log(banana)

// Prompt 3: Shirt

class Shirt {
  constructor() {
    this.size = 'M';
    this.color = 'blue';
    this.material = 'bamboo';
  }
}
var teeShirt = new Shirt();
console.log(teeShirt)

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
}
var beagle = new Dog("buddy", "brown", 11);
console.log(beagle)

// Prompt 2: Snack

class Snack {
  constructor(sweet, salty, calories) {
    this.sweet = sweet;
    this.salty = salty;
    this.calories = calories;
  }
}
var banana = new Snack("yes", "no", 125)
console.log(banana)

// Prompt 3: Shirt
class Shirt {
  constructor(size, color, material) {
    this.size = size;
    this.color = color;
    this.material = material;
  }
}
var teeShirt = new Shirt("M", "blue", "bamboo")
console.log(teeShirt)
