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

  getAnimalByName(name) {
    for (let i = 0; i < this.animals.length; i++) {
      const element = this.animals[i];
      if (element.name == name) {
        return element
      }
      
    }
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
