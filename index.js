const { Breed } = require("./classes/base/Breed.js")
const { Animal } = require("./classes/Animal.js")
const { Owner } = require("./classes/Owner.js")
const { Food } = require("./classes/base/Food")

class Dog extends Animal { }
class Cat extends Animal { }
class Cow extends Animal { }
class Fish extends Animal { }

class Apple extends Food { }
class Orange extends Food { }
class Mango extends Food { }
class Pear extends Food { }


var devin = new Owner("Devin")
var claire = new Owner("Claire")

devin
  .addAnimal(new Dog("sammy", new Breed('Pug', 10)))
  .addAnimal(new Dog("jill", new Breed('Golder Retrever', 11)))
  .addAnimal(new Dog("fido", new Breed('Poodle', 6)))
  .addAnimal(new Dog("lina", new Breed('Corgi', 16)))
  .addAnimal(new Cow("jason", new Breed('Black and white', 50)))
  .addAnimal(new Dog("Lisa", new Breed("Boxer", 10)))

claire
  .addAnimal(new Cat("jane", new Breed('Long Haired', 30)))
  .addAnimal(new Cat("silu", new Breed('Long Haired', 20)))
  .addAnimal(new Cat("anabell", new Breed('Long Haired', 20)))
  .addAnimal(new Cat("lin", new Breed('Tabby', 5)))
  .addAnimal(new Fish("james", new Breed('Koi', 10)))
  .addAnimal(new Cow("Lorry", new Breed("Brown", 14)))


devin.displayAnimals()
claire.displayAnimals()

console.log(new Apple(10).name)
console.log(new Orange(10).name)
console.log(new Mango(10).name)
console.log(new Pear(10).name)
