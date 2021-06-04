const {Item} = require("./Item")

class Food extends Item {
    constructor(foodObject) {
      this.name = foodObject.name
      this.foodPoints = foodObject.foodPoints
    }
  }
  
  module.exports = {
    Food
  }