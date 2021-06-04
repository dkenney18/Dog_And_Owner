const { Enum } = require("./classes/base/Enum.js")
const { Entity } = require("./classes/base/Entity.js")
const { Breed } = require("./classes/base/Breed.js")
const { Animal } = require("./classes/Animal.js")
const { Owner } = require("./classes/Owner.js")
const generateID = require("./classes/base/Utility/GenerateID.js")

//Region Class Definitions 
class Dog extends Animal {}
class Cat extends Animal {}
class Cow extends Animal {}
class Fish extends Animal {}
//End Region Class Definitions 

var devin = new Owner("Devin")
var claire = new Owner("Claire")

devin.addAnimal(new Dog("sammy", new Breed('Pug')))
devin.addAnimal(new Dog("jill", new Breed('Golder Retrever')))
devin.addAnimal(new Dog("fido", new Breed('Poodle')))
devin.addAnimal(new Dog("lina", new Breed('Corgi')))
devin.addAnimal(new Cow("jason", new Breed('Black and white')))

claire.addAnimal(new Cat("jane", new Breed('Long Haired')))
claire.addAnimal(new Cat("silu", new Breed('Long Haired')))
claire.addAnimal(new Cat("anabell", new Breed('Long Haired')))
claire.addAnimal(new Cat("lin",new Breed('Tabby')))
claire.addAnimal(new Fish("james", new Breed('Koi')))


devin.displayAnimals()
claire.displayAnimals()