const {Enum} = require("./Enum")

class Size extends Enum {}

const placeSize = new Size()
placeSize.add("small")
placeSize.add("medium")
placeSize.add("large")


module.exports = placeSize
