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

const animal_types = {
  DOG: 'dog',
  CAT: 'cat',
}

class Owner {
  constructor(name) {
    this.name = name
    this.animals = []
    this.id = generateID(50)
  }

  addAnimal(animal, owner) {
    if (animal.canAddOwner()) {
      animal.setOwner(owner)
      this.animals.push(animal)
    }
  }

  displayAnimals() {
    this.animals.forEach((animal) => {
      console.log(`${animal.name} is a ${animal.breed} and is owned by ${animal.owner.name} the dogs id is ${animal.id} and the owners id is ${animal.owner.id}`)
    })
  }
}

class Animal {
  constructor(name, breed, type, owner = null) {
    this.name = name
    this.breed = breed
    this.owner = owner
    this.owned = false
    this.type = type
    this.id = generateID(50)
  }

   canAddOwner() {
    return (!this.owned) ? true : false
  }

  setOwner(owner) {
    if (this.canAddOwner()) {
      this.owner = owner
      this.owned = true
    }
  }

  speak() {}
}

class Dog extends Animal {
  speak() {
    console.log("Woof")
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow")
  }
}

function generateID(length) {
  var text = ""
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text
}

var devin = new Owner("Devin")
var sammy = new Dog("sammy", breeds.PUG, animal_types.DOG)
var fido = new Dog("fido", breeds.POODLE, animal_types.DOG)
var jill = new Dog("jill", breeds.GOLDEN_RETREIVER, animal_types.DOG)
var lina = new Dog("lina", breeds.CORGI, animal_types.DOG)
var jane = new Cat("jane", breeds.LONG_HAIRED_CAT, animal_types.CAT)
var silu = new Cat("silu", breeds.LONG_HAIRED_CAT, animal_types.CAT)
var anabell = new Cat("anabell", breeds.LONG_HAIRED_CAT, animal_types.CAT)
var lin = new Cat("lin", breeds.TABBY_CAT, animal_types.CAT)
var inna = new Cat("inna", breeds.TABBY_CAT, animal_types.CAT)
var linus = new Cat("linus", breeds.TABBY_CAT, animal_types.CAT)

devin.addAnimal(sammy, devin)
devin.addAnimal(jill, devin)
devin.addAnimal(fido, devin)
devin.addAnimal(lina, devin)

devin.addAnimal(jane, devin)
devin.addAnimal(silu, devin)
devin.addAnimal(anabell, devin)
devin.addAnimal(lin, devin)
devin.addAnimal(inna, devin)
devin.addAnimal(linus, devin)
devin.displayAnimals()