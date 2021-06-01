const breeds = {
  PUG: 'pug',
  POODLE: 'poodle',
  CORGI: 'corgi',
  GOLDEN_RETREIVER: 'golden_retreiver',
  TERRIER: 'terrier',
  LABRADOOR: 'labradoor',
  LONG_HAIRED_CAT: 'long_haired_cat',
  TABBY_CAT: 'tabby cat'
}

class Entity {
  constructor(name) {
    this.name = name
    this.id = generateID(50)
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

class Animal {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.owner = null
    this.animalType = this.constructor.name
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

class Dog extends Animal {}

class Cat extends Animal {}

function generateID(length) {
  var text = ""
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text
}

var devin = new Owner("Devin")
var claire = new Owner("Claire")

devin.addAnimal(new Dog("sammy", breeds.PUG))
devin.addAnimal(new Dog("jill", breeds.GOLDEN_RETREIVER))
devin.addAnimal(new Dog("fido", breeds.POODLE))
devin.addAnimal(new Dog("lina", breeds.CORGI))

claire.addAnimal(new Cat("jane", breeds.LONG_HAIRED_CAT))
claire.addAnimal(new Cat("silu", breeds.LONG_HAIRED_CAT))
claire.addAnimal(new Cat("anabell", breeds.LONG_HAIRED_CAT))
claire.addAnimal(new Cat("lin", breeds.TABBY_CAT))


devin.displayAnimals()
claire.displayAnimals()