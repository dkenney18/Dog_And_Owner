const {Enum} = require("./Enum")

class PlaceType extends Enum {}

const placeType = new PlaceType()
placeType.add("town")
placeType.add("city")

module.exports = placeType
