const generateID = require("./Utility/GenerateID.js")
class Entity {
  constructor(name) {
    this.name = name
    this.id = generateID
  }
}

module.exports = {
  Entity
}