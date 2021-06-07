const {Enum} = require("./base/Enum.js")
const {Location} = require("./base/Location.js")
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
    this.hp = breed.hp
    this.location = new Location()
  }

   canAddOwner() {
    return (!this.isOwned) ? true : false
  }

  setOwner(owner) {
    this.owner = owner
    this.isOwned = true
  }

  eat(food) {
    this.hp += food.foodPoints
    return this
  }

  setX(num) {
    this.location.x = num
  }

  setY(num) {
    this.location.y = num
  }

  addX(num) {
    this.location.x += num
  }

  addY(num) {
    this.location.y += num
  }
}

module.exports = {
  Animal
}