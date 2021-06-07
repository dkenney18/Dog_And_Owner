const {Enum} = require("./Enum")

class Direction extends Enum {}

const direction = new Direction()
direction.add("North")
direction.add("South")
direction.add("east")
direction.add("west")
direction.add("up")
direction.add("down")

module.exports = direction
