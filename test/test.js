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

class Dog extends Animal {}

var assert = require('assert');
var should = require('chai').should()


//setup
class Apple extends Food {}
var pug = new Breed("Pug", 0)
var dog = new Dog("Sam", pug)
var devin = new Owner("Devin")
var apple = new Apple(0)

describe('Breed', function () {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(pug.name, "Pug")
    });
  });

  describe('#Name', function () {
    it('should return Name as string', function () {
      var pug = new Breed("Pug", 0)
      assert.strictEqual(typeof pug.name, typeof "Pug")
    });
  });

  describe('#HP', function () {
    it('should return HP passed', function () {
      var pug = new Breed("Pug", 0)
      assert.strictEqual(pug.hp, 0)
    });
  });

  describe('#HP', function () {
    it('should return HP as int', function () {
      var pug = new Breed("Pug", 0)
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
      assert.strictEqual(typeof dog.name, typeof "Sam")
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
      assert.strictEqual(typeof pug.name, typeof "Pug")
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
})

describe('Owner', function () {
  describe('#Name', function () {
    it('should return Name passed', function () {
      assert.strictEqual(devin.name, "Devin")
    });
  });

  describe('#Name', function () {
    it('should return Name as string', function () {
      assert.strictEqual(typeof devin.name, typeof "Devin")
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
      assert.strictEqual(typeof apple.name, typeof "Sam")
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
      assert.strictEqual(apple.foodPoints, 0)
    });
  });

  describe('#Food Points', function () {
    it('should return Food Points as int', function () {
      assert.strictEqual(typeof apple.foodPoints, typeof 0)
    });
  });
})