const generateID = require("./Utility/GenerateID.js")
class Entity {
  constructor(name) {
    this.name = name
    this.id = generateID(50)
  }
}

module.exports = {
  Entity
}