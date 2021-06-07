const {
  Breed
} = require("../classes/base/Breed.js")

const {
  Animal
} = require("../classes/Animal.js")

const {
  Owner
} = require("../classes/Owner.js")

const {
  Food
} = require("../classes/base/Food")

const {
  Location
} = require("../classes/base/Location")
const generateID = require('../classes/base/Utility/GenerateID')

class Dog extends Animal {}

var assert = require('assert');
var should = require('chai').should()
var expect = require('chai').expect

//setup
class Apple extends Food {}
var pug = new Breed("Pug", 0)
var dog = new Dog("Sam", pug)
var devin = new Owner("Devin")
var apple = new Apple(1)
var location = new Location()
var id_length = 50
var id = generateID(id_length)

eval(2+2)

describe('Breed', function () {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(pug.name, "Pug")
    });

    it('should return Name as string', function () {
      assert.strictEqual(typeof pug.name, typeof "")
    });
  });

  describe('#HP', function () {
    it('should return HP passed', function () {
      assert.strictEqual(pug.hp, 0)
    });

    it('should return HP as int', function () {
      assert.strictEqual(typeof pug.hp, typeof 0)
    });
  });

  describe('#ID', function () {
    it('should return ID as string', function () {
      assert.strictEqual(typeof pug.id, typeof "")
    });

    it('ID length should be 50', function () {
      assert.strictEqual(pug.id.length, 50)
    });
  });
  });

describe('Animal', function () {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(dog.name, "Sam")
    })

    it('should return Name as String', function () {
      assert.strictEqual(typeof dog.name, typeof "")
    })
  })

  describe('#AnimalType', function () {
    it('should return Name passed', function () {
      assert.strictEqual(dog.animalType, "dog")
    })

     it('should return Name as String', function () {
      assert.strictEqual(typeof dog.animalType, typeof "")
    })
  })

  describe('#ID', function () {
    it('should return ID as string', function () {
      assert.strictEqual(typeof dog.id, typeof "")
    });

    it('ID length should be 50', function () {
      assert.strictEqual(dog.id.length, 50)
    });
  });

  describe('#Breed', function () {
    it('should return Name passed', function () {
      assert.strictEqual(pug.name, "Pug")
    });
    it('should return Name as string', function () {
      assert.strictEqual(typeof pug.name, typeof "")
    });
      it('should return HP passed', function () {
      assert.strictEqual(pug.hp, 0)
    });
     it('should return HP as int', function () {
      assert.strictEqual(typeof pug.hp, typeof 0)
    });
  });

  describe('#Owner', function () {
    it('should return null when not assigned an owner', function () {
      assert.strictEqual(typeof dog.owner, typeof null)
    });

     it('can add owner', function () {
      dog.setOwner(devin)
      assert.strictEqual(dog.isOwned, true)
      assert.strictEqual(dog.owner.name, "Devin")
    });

     it('isOwned is set when new owner is added', function () {
      dog.setOwner(devin)
      assert.strictEqual(dog.isOwned, true)
    });

    it('owner is exsists when added', function () {
      dog.setOwner(devin)
      should.exist(dog.owner)
    });

    it('owner name matches name passed', function () {
      dog.setOwner(devin)
      assert.strictEqual(dog.owner.name, "Devin")
    });
  });

   describe('#Eat', function () {
    it('should exsist', function () {
       dog.eat.should.be.a('function');
    });

     it('should increase animal HP by Foods food points', function () {
      dog.hp = 0
      dog.eat(apple)
      assert.strictEqual(dog.hp, 1)
    });
  });

describe('#Location', function () {

   it('should exsist', function () {
      should.exist(dog.location)
    });
    
    it('setX() should exsist', function () {
      dog.setX.should.be.a('function');
    });

   it('setY() should exsist', function () {
      dog.setX.should.be.a('function');
    });

    it('up() should exsist', function () {
      dog.up.should.be.a('function');
    });

     it('down() should exsist', function () {
       dog.down.should.be.a('function');
    });

     it('left() should exsist', function () {
      dog.left.should.be.a('function');
    });

    it('right() should exsist', function () {
       dog.right.should.be.a('function');
    });

    it('setX should set X to int passed', function () {
      dog.setX(10)
      assert.strictEqual(dog.location.x, 10)
    });

      it('setY should set Y to int passed', function () {
        dog.setY(5)
        assert.strictEqual(dog.location.y, 5)
    });

     it('left should subtract the number passed from num', function () {
      dog.setX(10)
      dog.left(10)
      assert.strictEqual(dog.location.x, 0)
    });

     it('right should add the number passed from num', function () {
      dog.setX(10)
      dog.right(10)
      assert.strictEqual(dog.location.x, 20)
    });

 it('up should add the number passed from num', function () {
      dog.setY(10)
      dog.up(10)
      assert.strictEqual(dog.location.y, 20)
    });

     it('down should subtract the number passed from num', function () {
      dog.setY(10)
      dog.down(10)
      assert.strictEqual(dog.location.y, 0)
    });

     it('2 properties', function() {
      assert.strictEqual(Object.keys(location).length, 2)
    })

     it('x', function() {
      should.exist(location.x)
    })
     it('y', function() {
      should.exist(location.y)
    })

     it('x returned as int', function() {
       assert.strictEqual(typeof location.x, typeof 0)
    })

    it('y returned as int', function() {
       assert.strictEqual(typeof location.y, typeof 0)
    })

     it('x as 0 if not defined', function() {
       assert.strictEqual(location.x, 0)
    })

    it('y as 0 if not defined', function() {
       assert.strictEqual(location.y, 0)
    })

    it('x as setX(int)', function() {
       let location1 = new Location(1,1)
       assert.strictEqual(location1.x, 1)
    })

    it('x as setY(int)', function() {
      let location1 = new Location(1,1)
       assert.strictEqual(location1.y, 1)
    })
  })

   describe('#Direction', function() {
      it('should have property direction', function () {
        should.exist(dog.direction)
    });

     it('should have function setDirection()', function () {
        dog.setDirection.should.be.a('function');
    });

     it('should return north when set', function () {
       dog.setDirection(direction.enum.NORTH)
       assert.strictEqual(dog.direction, 'north')
    });

     it('should return south when set', function () {
       dog.setDirection(direction.enum.SOUTH)
         assert.strictEqual(dog.direction, 'south')
    });

     it('should return east when set', function () {
       dog.setDirection(direction.enum.EAST)
         assert.strictEqual(dog.direction, 'east')
    });

     it('should return west when set', function () {
       dog.setDirection(direction.enum.WEST)
         assert.strictEqual(dog.direction, 'west')
    });

     it('should return up when set', function () {
       dog.setDirection(direction.enum.UP)
         assert.strictEqual(dog.direction, 'up')
    });

     it('should return down when set', function () {
       dog.setDirection(direction.enum.DOWN)
         assert.strictEqual(dog.direction, 'down')
    });

     it('should return north as string when set', function () {
       dog.setDirection(direction.enum.NORTH)
        assert.strictEqual(typeof dog.direction, typeof '')
    });

     it('should return south as string when set', function () {
       dog.setDirection(direction.enum.SOUTH)
         assert.strictEqual(typeof dog.direction, typeof '')
    });
    
     it('should return east as string when set', function () {
       dog.setDirection(direction.enum.EAST)
         assert.strictEqual(typeof dog.direction, typeof '')
    });

     it('should return west as string when set', function () {
       dog.setDirection(direction.enum.WEST)
         assert.strictEqual(typeof dog.direction, typeof '')
    });

     it('should return up as string when set', function () {
       dog.setDirection(direction.enum.UP)
       assert.strictEqual(typeof dog.direction, typeof '')
    });

     it('should return down as string when set', function () {
       dog.setDirection(direction.enum.DOWN)
       assert.strictEqual(typeof dog.direction, typeof '')
    });
  })
})

describe('Owner', function () {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(devin.name, "Devin")
    });

     it('should return Name as string', function () {
      assert.strictEqual(typeof devin.name, typeof "")
    });
  });

  describe('#getAnimalByName', function () {
    it('should return animal', function () {
      var pug2 = new Breed("Pug", 0)
      var dog2 = new Dog("Sam", pug)
      var devin2 = new Owner("Devin")
      devin2.addAnimal(dog2)
      var pet = devin2.getAnimalByName("Sam")

      assert.strictEqual(pet.name, dog2.name)
      assert.strictEqual(pet.breed, dog2.breed)
      assert.strictEqual(pet.breed.name, dog2.breed.name)
      assert.strictEqual(pet.breed.hp, dog2.breed.hp)
      assert.strictEqual(pet.owner, dog2.owner)
      assert.strictEqual(pet.owner.name, dog2.owner.name)
      assert.strictEqual(pet.animalType, dog2.animalType)
      assert.strictEqual(pet.isOwned, dog2.isOwned)
      assert.strictEqual(pet.hp, dog2.hp)
      assert.strictEqual(pet.location, dog2.location)
      assert.strictEqual(pet.location.x, dog2.location.x)
      assert.strictEqual(pet.location.y, dog2.location.y)
      assert.strictEqual(pet.direction, dog2.direction)
      assert.strictEqual(pet, dog2)
    });
  });

  describe('#Should contain functions', function() {
     it('addAnimal() exists', function () {
     devin.addAnimal.should.be.a('function')
    });
    it('getAnimalByName() exists', function () {
     devin.getAnimalByName.should.be.a('function')
    });
    it('displayAnimals() exists', function () {
     devin.displayAnimals.should.be.a('function')
    });
  })

  describe('#Array', function () {
    it('should return empty array when no animals have been added', function () {
      assert.strictEqual(devin.animals.length, 0)
    });

     it('should return length 1 when animal added', function () {
      var claire = new Owner("Claire")
      var poodle = new Breed("Poodle")
      var dog1 = new Dog("lam", poodle)
      claire.addAnimal(dog1)
      assert.strictEqual(claire.animals.length, 1)
    });
  });

  describe('#ID', function () {
    it('should return ID as string', function () {
      assert.strictEqual(typeof devin.id, typeof "")
    });
    it('ID length should be 50', function () {
      assert.strictEqual(devin.id.length, 50)
    });
  });
});

describe('Food', function() {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(apple.name, "Apple")
    })
     it('should return Name as String', function () {
      assert.strictEqual(typeof apple.name, typeof "")
    })
  })

  describe('#ID', function () {
    it('should return ID as string', function () {
      assert.strictEqual(typeof apple.id, typeof "")
    });
    it('ID length should be 50', function () {
      assert.strictEqual(apple.id.length, 50)
    });
  });

  describe('#Food Points', function () {
    it('should return Food Points passed', function () {
      assert.strictEqual(apple.foodPoints, 1)
    });
    it('should return Food Points as int', function () {
      assert.strictEqual(typeof apple.foodPoints, typeof 1)
    });
  });
})

describe('generateID', function () {
  describe('#Length', function () {
    it('should return length passed', function() {
      assert.strictEqual(id.length, id_length)
    })
  })

  describe('#TypeReturned', function() {
      it('should return ID as string', function () {
      assert.strictEqual(typeof id, typeof "")
    });
  })

   describe('#Contains', function () {
    it('should contain uppercase letters', function() {
      expect(id).to.match(/.*[A-Z].*/)
    })

     it('should contain lowecase letters letters', function() {
      expect(id).to.match(/.*[a-z].*/)
    })

     it('should contain numbers', function() {
      expect(id).to.match(/.*[0-9].*/)
    })
  })
})


describe('directions', function () {
 describe('#Has', function() {
      it('should have property enum', function () {
        should.exist(direction.enum)
    });

     it('should contain north', function () {
        should.exist(direction.enum.NORTH)
    });
     it('should contain south', function () {
        should.exist(direction.enum.SOUTH)
    });
     it('should contain east', function () {
        should.exist(direction.enum.EAST)
    });
     it('should contain west', function () {
        should.exist(direction.enum.WEST)
    });
    it('should contain up', function () {
        should.exist(direction.enum.UP)
    });
    it('should contain down', function () {
        should.exist(direction.enum.DOWN)
    });

     it('should return north', function () {
        assert.strictEqual(direction.enum.NORTH, 'north')
    });
     it('should return south', function () {
         assert.strictEqual(direction.enum.SOUTH, 'south')
    });
     it('should return east', function () {
         assert.strictEqual(direction.enum.EAST, 'east')
    });
     it('should return west', function () {
         assert.strictEqual(direction.enum.WEST, 'west')
    });
     it('should return up', function () {
         assert.strictEqual(direction.enum.UP, 'up')
    });
     it('should return down', function () {
         assert.strictEqual(direction.enum.DOWN, 'down')
    });


     it('should return north as string', function () {
        assert.strictEqual(typeof direction.enum.NORTH, typeof '')
    });

     it('should return south as string', function () {
         assert.strictEqual(typeof direction.enum.SOUTH, typeof '')
    });

     it('should return east as string', function () {
         assert.strictEqual(typeof direction.enum.EAST, typeof '')
    });

     it('should return west as string', function () {
         assert.strictEqual(typeof direction.enum.WEST, typeof '')
    });

     it('should return up as string', function () {
         assert.strictEqual(typeof direction.enum.UP, typeof '')
    });

     it('should return down as string', function () {
         assert.strictEqual(typeof direction.enum.DOWN, typeof '')
    });

    it('should have length 6', function () {
         assert.strictEqual(Object.keys(direction.enum).length, 6)
    });
  })
})

describe('Location', function() {
  describe('#Has', function() {
    it('2 properties', function() {
      assert.strictEqual(Object.keys(location).length, 2)
    })

     it('x', function() {
      should.exist(location.x)
    })
     it('y', function() {
      should.exist(location.y)
    })

     it('x returned as int', function() {
       assert.strictEqual(typeof location.x, typeof 0)
    })

    it('y returned as int', function() {
       assert.strictEqual(typeof location.y, typeof 0)
    })

     it('x as 0 if not defined', function() {
       assert.strictEqual(location.x, 0)
    })

    it('y as 0 if not defined', function() {
       assert.strictEqual(location.y, 0)
    })

    it('x as location passed', function() {
       let location1 = new Location(1,1)
       assert.strictEqual(location1.x, 1)
    })

    it('y as location passed', function() {
      let location1 = new Location(1,1)
       assert.strictEqual(location1.y, 1)
    })
  })
})