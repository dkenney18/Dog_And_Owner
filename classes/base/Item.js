const generateID = require("./Utility/GenerateID")

class Item {
    constructor(itemObject) {
        this.name = itemObject.name
        this.value = itemObject.value
        this.damage = itemObject.damage
        this.id = generateID(50)
    }
}

module.exports = {
    Item
  }