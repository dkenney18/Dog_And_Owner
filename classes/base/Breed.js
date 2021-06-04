const generateID = require("./Utility/GenerateID")
class Breed {
  constructor(name, hp) {
    this.name = name
    this.hp = hp
    this.id = generateID(50)
  }
}

module.exports = {
  Breed
}