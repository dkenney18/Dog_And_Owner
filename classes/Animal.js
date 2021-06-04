const {Enum} = require("./base/Enum.js")
const generateID = require("./base/Utility/GenerateID.js")

class AnimalTypes extends Enum {}

//set this up so that each class can add it's own type automagically
const animalTypes = new AnimalTypes()

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

module.exports = {
  Animal
}