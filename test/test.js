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

const direction = require("../classes/base/Direction")

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

describe('Breed', function () {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(pug.name, "Pug")
    });
  });

  describe('#Name', function () {
    it('should return Name as string', function () {
      assert.strictEqual(typeof pug.name, typeof "")
    });
  });

  describe('#HP', function () {
    it('should return HP passed', function () {
      assert.strictEqual(pug.hp, 0)
    });
  });

  describe('#HP', function () {
    it('should return HP as int', function () {
      assert.strictEqual(typeof pug.hp, typeof 0)
    });
  });

  describe('#ID', function () {
    it('should return ID as string', function () {
      assert.strictEqual(typeof pug.id, typeof "")
    });
  });

  describe('#ID', function () {
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
  })

  describe('#Name', function () {
    it('should return Name as String', function () {
      assert.strictEqual(typeof dog.name, typeof "")
    })
  })

  describe('#AnimalType', function () {
    it('should return Name passed', function () {
      assert.strictEqual(dog.animalType, "dog")
    })
  })

  describe('#AnimalType', function () {
    it('should return Name as String', function () {
      assert.strictEqual(typeof dog.animalType, typeof "")
    })
  })

  describe('#ID', function () {
    it('should return ID as string', function () {
      assert.strictEqual(typeof dog.id, typeof "")
    });
  });

  describe('#ID', function () {
    it('ID length should be 50', function () {
      assert.strictEqual(dog.id.length, 50)
    });
  });

  describe('#Breed', function () {
    it('should return Name passed', function () {
      assert.strictEqual(pug.name, "Pug")
    });
  });

  describe('#Breed', function () {
    it('should return Name as string', function () {
      assert.strictEqual(typeof pug.name, typeof "")
    });
  });

  describe('#Breed', function () {
    it('should return HP passed', function () {
      assert.strictEqual(pug.hp, 0)
    });
  });

  describe('#Breed', function () {
    it('should return HP as int', function () {
      assert.strictEqual(typeof pug.hp, typeof 0)
    });
  });

  describe('#Owner', function () {
    it('should return null when not assigned an owner', function () {
      assert.strictEqual(typeof dog.owner, typeof null)
    });
  });

  describe('#Owner', function () {
    it('can add owner', function () {
      dog.setOwner(devin)
      assert.strictEqual(dog.isOwned, true)
      assert.strictEqual(dog.owner.name, "Devin")
    });
  });

  describe('#Owner', function () {
    it('isOwned is set when new owner is added', function () {
      dog.setOwner(devin)
      assert.strictEqual(dog.isOwned, true)
    });
  });

  describe('#Owner', function () {
    it('owner is exsists when added', function () {
      dog.setOwner(devin)
      should.exist(dog.owner)
    });
  });

  describe('#Owner', function () {
    it('owner name matches name passed', function () {
      dog.setOwner(devin)
      assert.strictEqual(dog.owner.name, "Devin")
    });
  });

   describe('#Eat', function () {
    it('should exsist', function () {
      should.exist(dog.eat(apple))
    });
  });

   describe('#Eat', function () {
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
    
    it('setX should exsist', function () {
      should.exist(dog.setX(0))
    });

   it('setY should exsist', function () {
      should.exist(dog.setY(0))
    });

    it('setX should set X to int passed', function () {
      dog.setX(10)
      assert.strictEqual(dog.location.x, 10)
    });

      it('setY should set Y to int passed', function () {
        dog.setY(5)
        assert.strictEqual(dog.location.y, 5)
    });

     it('addX should add the number passed to x', function () {
      dog.setX(0)
      dog.addX(10)
      assert.strictEqual(dog.location.x, 10)
    });

    it('addY should set the number passed to y', function () {
        dog.setY(0)
        dog.addY(5)
        assert.strictEqual(dog.location.y, 5)
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
})

describe('Owner', function () {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(devin.name, "Devin")
    });
  });

  describe('#Name', function () {
    it('should return Name as string', function () {
      assert.strictEqual(typeof devin.name, typeof "")
    });
  });

  describe('#Array', function () {
    it('should return empty array when no animals have been added', function () {
      assert.strictEqual(devin.animals.length, 0)
    });
  });

  describe('#Array', function () {
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
  });

  describe('#ID', function () {
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
  })

  describe('#Name', function () {
    it('should return Name as String', function () {
      assert.strictEqual(typeof apple.name, typeof "")
    })
  })

  describe('#ID', function () {
    it('should return ID as string', function () {
      assert.strictEqual(typeof apple.id, typeof "")
    });
  });

  describe('#ID', function () {
    it('ID length should be 50', function () {
      assert.strictEqual(apple.id.length, 50)
    });
  });

  describe('#Food Points', function () {
    it('should return Food Points passed', function () {
      assert.strictEqual(apple.foodPoints, 1)
    });
  });

  describe('#Food Points', function () {
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