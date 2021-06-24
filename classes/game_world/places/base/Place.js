const placeSize = require("../base/Size.js")
const placeType = require("../base/PlaceType.js")
class Place {
  constructor(size, type) {
    this.population = []
    this.populationCount = this.population.length
    this.buildings = []
    this.size = size
    this.type = type
  }
}

module.exports = {
  Place
}