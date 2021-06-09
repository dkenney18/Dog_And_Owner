const placeSize = require("../base/Size.js")
const placeType = require("../base/PlaceType.js")
class Place {
  constructor() {
    this.population = []
    this.populationCount = this.population.length
    this.buildings = []
    this.size = placeSize.enum.SMALL
    this.type = placeType.enum.TOWN
  }
}

module.exports = {
  Place
}