class Enum {
  constructor() {
    this.enum = {}
  }

  add(name) {
    this.enum[name] = name.toLowerCase()
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
    animalTypes.add(this.constructor.name.toUpperCase())
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
      //console.log(`${animal.name} is a ${animal.breed} and is owned by ${animal.owner.name} the ${animal.constructor.name}'s' id is ${animal.id} and the owners id is ${animal.owner.id}`)
    })
  }
}

//Region Class Definitions 
class Dog extends Animal {}
class Cat extends Animal {}
class Cow extends Animal {}
class Fish extends Animal {}
class Goldfish extends Fish {}
//End Region Class Definitions 

//Region Enums
class Breeds extends Enum {}
class AnimalTypes extends Enum {}
//End Region Enums

//set this up so that each class can add it's own type automagically
const animalTypes = new AnimalTypes()

const breeds = new Breeds()
breeds.add('PUG')
breeds.add('POODLE')
breeds.add('CORGI')
breeds.add('GOLDEN_RETREIVER')
breeds.add('TERRIER')
breeds.add('LABRADOOR')
breeds.add('LONG_HAIRED_CAT')
breeds.add('TABBY_CAT')
breeds.add('BLACK_AND_WHITE')
breeds.add('KOI')

var devin = new Owner("Devin")
var claire = new Owner("Claire")

devin.addAnimal(new Dog("sammy", breeds.enum.PUG))
devin.addAnimal(new Dog("jill", breeds.enum.GOLDEN_RETREIVER))
devin.addAnimal(new Dog("fido", breeds.enum.POODLE))
devin.addAnimal(new Dog("lina", breeds.enum.CORGI))
devin.addAnimal(new Cow("json", breeds.enum.BLACK_AND_WHITE))

claire.addAnimal(new Cat("jane", breeds.enum.LONG_HAIRED_CAT))
claire.addAnimal(new Cat("silu", breeds.enum.LONG_HAIRED_CAT))
claire.addAnimal(new Cat("anabell", breeds.enum.LONG_HAIRED_CAT))
claire.addAnimal(new Cat("lin", breeds.enum.TABBY_CAT))
claire.addAnimal(new Fish("james", breeds.enum.KOI))


devin.displayAnimals()
claire.displayAnimals()

console.log(animalTypes.enum)
console.log(breeds.enum)


function generateID(length) {
  var text = ""
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text
}
