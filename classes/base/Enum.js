class Enum {
  constructor() {
    this.enum = {}
  }

  add(name) {
    this.enum[name.toUpperCase()] = name.toLowerCase()
    return this
  }
}

module.exports = {
  Enum
}