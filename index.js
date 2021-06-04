const { Enum } = require("./classes/base/Enum.js")
const { Entity } = require("./classes/base/Entity.js")
const { Breed } = require("./classes/base/Breed.js")
const { Animal } = require("./classes/Animal.js")
const { Owner } = require("./classes/Owner.js")
const generateID = require("./classes/base/Utility/GenerateID.js")

class Dog extends Animal {}
class Cat extends Animal {}
class Cow extends Animal {}
class Fish extends Animal {}

var devin = new Owner("Devin")
var claire = new Owner("Claire")

devin
.addAnimal(new Dog("sammy", new Breed('Pug')))
.addAnimal(new Dog("jill", new Breed('Golder Retrever')))
.addAnimal(new Dog("fido", new Breed('Poodle')))
.addAnimal(new Dog("lina", new Breed('Corgi')))
.addAnimal(new Cow("jason", new Breed('Black and white')))

claire
.addAnimal(new Cat("jane", new Breed('Long Haired')))
.addAnimal(new Cat("silu", new Breed('Long Haired')))
.addAnimal(new Cat("anabell", new Breed('Long Haired')))
.addAnimal(new Cat("lin",new Breed('Tabby')))
.addAnimal(new Fish("james", new Breed('Koi')))


devin.displayAnimals()
claire.displayAnimals()