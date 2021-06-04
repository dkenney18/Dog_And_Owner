const { Breed } = require("../classes/base/Breed.js")
const { Animal } = require("../classes/Animal.js")
const { Owner } = require("../classes/Owner.js")
const { Food } = require("../classes/base/Food")

class Dog extends Animal { }
class Cat extends Animal{ }

var assert = require('assert');
var should = require('chai').should();

//setup
var pug = new Breed("Pug", 0)
var dog = new Dog("Sam", pug)

describe('Breed', function() {
  describe('#Name', function() {
    it('should return Name passed', function() {
      assert.strictEqual(pug.name, "Pug")
    });
  });

  describe('#Name', function() {
    it('should return Name as string', function() {
      var pug = new Breed("Pug", 0)
      assert.strictEqual(typeof pug.name, typeof "Pug")
    });
  });

  describe('#HP', function() {
    it('should return HP passed', function() {
      var pug = new Breed("Pug", 0)
      assert.strictEqual(pug.hp, 0)
    });
  });

  describe('#HP', function() {
    it('should return HP as int', function() {
      var pug = new Breed("Pug", 0)
      assert.strictEqual(typeof pug.hp, typeof 0)
    });
  });
});

describe('Animal', function() {
  describe('#Name', function() {
    it('should return Name passed', function() {
      assert.strictEqual(dog.name, "Sam")
    })
  })

  describe('#Name', function() {
    it('should return Name as String', function() {
      assert.strictEqual(typeof dog.name, typeof "Sam")
    })
  })

  describe('#Breed', function() {
    it('should return Name passed', function() {
      assert.strictEqual(pug.name, "Pug")
    });
  });

  describe('#Breed', function() {
    it('should return Name as string', function() {
      assert.strictEqual(typeof pug.name, typeof "Pug")
    });
  });

  describe('#Breed', function() {
    it('should return HP passed', function() {
      assert.strictEqual(pug.hp, 0)
    });
  });

  describe('#Breed', function() {
    it('should return HP as int', function() {
      assert.strictEqual(typeof pug.hp, typeof 0)
    });
  });

  describe('#Owner', function() {
    it('should return null when not assigned an owner', function() {
      assert.strictEqual(typeof dog.owner, typeof null)
    });
  });

  describe('#Owner', function() {
    it('can add owner', function() {
      var dog1 = new Dog("lin", new Breed("Pug", 0))
      var devin = new Owner("Devin")
      dog1.setOwner(devin)
      assert.strictEqual(dog1.isOwned, true)
      assert.strictEqual(dog1.owner.name, "Devin")
    });
  });

  describe('#Owner', function() {
    it('isOwned is set when new owner is added', function() {
      var dog1 = new Dog("lin", new Breed("Pug", 0))
      var devin = new Owner("Devin")
      dog1.setOwner(devin)
      assert.strictEqual(dog1.isOwned, true)
    });
  });

  describe('#Owner', function() {
    it('owner is not null', function() {
      var dog1 = new Dog("lin", new Breed("Pug", 0))
      var devin = new Owner("Devin")
      dog1.setOwner(devin)
      should.exist(dog1.owner)
    });
  });
})
