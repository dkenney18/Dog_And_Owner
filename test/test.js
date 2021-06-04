const { Breed } = require("../classes/base/Breed.js")
const { Animal } = require("../classes/Animal.js")
const { Owner } = require("../classes/Owner.js")
const { Food } = require("../classes/base/Food")

var assert = require('assert');

describe('Breed', function() {
  describe('#Name', function() {
    it('should return Name passed', function() {
      var pug = new Breed("Pug", 0)
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
