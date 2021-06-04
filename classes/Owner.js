const {Entity} = require("./base/Entity.js")

class Owner extends Entity {
  constructor(name) {
    super(name)
    this.animals = []
  }

  addAnimal(animal) {
    if (animal.canAddOwner()) {
      animal.setOwner(this)
      this.animals.push(animal)
    }
    return this
  }

  displayAnimals() {
    this.animals.forEach((animal) => {
      console.log(animal)
      //console.log(`${animal.name} is a ${animal.breed.name} and is owned by ${animal.owner.name} the ${animal.constructor.name}'s' id is ${animal.id} and the owners id is ${animal.owner.id}`)
    })
  }
}

module.exports = {
  Owner
}
