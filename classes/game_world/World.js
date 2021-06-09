class World {
  constructor() {
    this.entities = []
    this.lands = []
  }

  addEntity(entity) {
    this.entities.push(entity)
  }

  addLand(land) {
    this.lands.push(land)
  }
}