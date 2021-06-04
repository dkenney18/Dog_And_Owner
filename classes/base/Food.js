const {Item} = require("./Item")

class Food extends Item {
    constructor(foodPoints) {
        super()
      this.foodPoints = foodPoints
    }
  }
  
  module.exports = {
    Food
  }