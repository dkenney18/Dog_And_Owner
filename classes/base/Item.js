const generateID = require("./Utility/GenerateID")

class Item {
    constructor() {
        this.name = this.constructor.name
        this.id = generateID(50)
    }
}

module.exports = {
    Item
  }