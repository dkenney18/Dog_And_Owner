const breeds = {
  PUG: 'pug',
  POODLE: 'poodle',
  CORGI: 'corgi',
  GOLDEN_RETREIVER: 'golden_retreiver',
  TERRIER: 'terrier',
  LABRADOOR: 'labradoor',
}

const animal_types = {
  DOG: 'dog',
  CAT: 'cat',
}

class Owner {
  constructor(name) {
    this.name = name
    this.dogs = []
    this.id = generateID(50)
  }

  addDog(dog, owner) {
    if (dog.canAddOwner()) {
      dog.setOwner(owner)
      this.dogs.push(dog)
    }
  }

  displayDogs() {
    this.dogs.forEach((dog) => {
      console.log(`${dog.name} is a ${dog.breed} and is owned by ${dog.owner.name} the dogs id is ${dog.id} and the owners id is ${dog.owner.id}`)
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

devin.addDog(sammy, devin)
devin.addDog(jill, devin)
devin.addDog(fido, devin)
devin.addDog(lina, devin)
devin.displayDogs()