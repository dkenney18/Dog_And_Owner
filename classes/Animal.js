const {Enum} = require("./base/Enum.js")
const {Location} = require("./base/Location.js")

const directions = require("./base/Direction.js")
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
    this.direction = directions.enum.NORTH
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

  left(num) {
    this.direction = directions.enum.WEST
    this.location.x -= num
  }

  right(num) {
    this.direction = directions.enum.EAST
    this.location.x += num
  }

  up(num) {
    this.direction = directions.enum.NORTH
    this.location.y += num
  }

  down(num) {
    this.direction = directions.enum.SOUTH
    this.location.y -= num
  }

  setDirection(directionEnum) {
    this.direction = directionEnum
  }
}

module.exports = {
  Animal
}