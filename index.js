class Enum {
  constructor() {
    this.enum = {}
  }

  add(name) {
    this.enum[name.toUpperCase()] = name.toLowerCase()
  }
}

class Entity {
  constructor(name) {
    this.name = name
    this.id = generateID(50)
  }
}

class Animal {
  constructor(name, breed) {
    animalTypes.add(this.constructor.name)
    this.name = name
    this.breed = breed
    this.owner = null
    this.animalType = animalTypes.enum[this.constructor.name.toUpperCase()]
    this.isOwned = false
    this.id = generateID(50)
  }

   canAddOwner() {
    return (!this.isOwned) ? true : false
  }

  setOwner(owner) {
    this.owner = owner
    this.isOwned = true
  }
}

class Owner extends Entity {
  constructor(name) {
    super(name)
    this.animals = []
  }

  addAnimal(animal) {
    if (animal.canAddOwner()) {
      animal.setOwner(this)
      this.animals.push(animal)
    }
  }

  displayAnimals() {
    this.animals.forEach((animal) => {
      console.log(animal)
      //console.log(`${animal.name} is a ${animal.breed.name} and is owned by ${animal.owner.name} the ${animal.constructor.name}'s' id is ${animal.id} and the owners id is ${animal.owner.id}`)
    })
  }
}

class Breed {
  constructor(name) {
    this.name = name
  }
}

//Region Class Definitions 
class Dog extends Animal {}
class Cat extends Animal {}
class Cow extends Animal {}
class Fish extends Animal {}
//End Region Class Definitions 

//Region Enums
class AnimalTypes extends Enum {}
//End Region Enums

//set this up so that each class can add it's own type automagically
const animalTypes = new AnimalTypes()

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

console.log(animalTypes.enum)


function generateID(length) {
  var text = ""
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text
}
