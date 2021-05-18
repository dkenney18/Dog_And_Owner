const breeds = {
  PUG: 'pug',
  POODLE: 'poodle',
  CORGI: 'corgi',
  GOLDEN_RETREIVER: 'golden_retreiver',
  TERRIER: 'terrier',
  LABRADOOR: 'labradoor',
}

class Owner {
  constructor(name) {
    this.name = name
    this.dogs = []
  }

  addDog(dog, owner) {
    if (dog.hasOwner()) {
      dog.setOwner(owner)
      this.dogs.push(dog)
    }
  }

  displayDogs() {
    this.dogs.forEach((dog) => {
      console.log(`${dog.name} is a ${dog.breed} and is owned by ${dog.owner.name}`)
    })
  }
}

class Dog {
  constructor(name, breed, owner=null) {
    this.name = name
    this.breed = breed
    this.owner = owner
    this.owned = false
  }

  hasOwner() {
    if (!this.owned) {
      return true
    }
    return false
  }

  setOwner(owner) {
    if (this.hasOwner()) {
      this.owner = owner
      this.owned = true
    } 
  }

  getOwner() {
    return this.owner
  }
}

var devin = new Owner("Devin")
var sammy = new Dog("sammy", breeds.PUG)
var fido = new Dog("fido", breeds.POODLE)
var jill = new Dog("jill", breeds.GOLDEN_RETREIVER)
var lina = new Dog("lina", breeds.CORGI)

devin.addDog(sammy, devin)
devin.addDog(jill, devin)
devin.addDog(fido, devin)
devin.addDog(lina, devin)
devin.displayDogs()