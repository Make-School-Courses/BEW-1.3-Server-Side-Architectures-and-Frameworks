const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect

const utils = require('../utils')

// console.log(utils.sayHello())
// console.log(utils.area(5, 5))

it('should say hello', () => {
  const hello = utils.sayHello()
  expect(hello).to.be.a('string')
  expect(hello).to.equal('Hello')
  expect(hello).with.lengthOf(5)
})

it('should return the area of a 5 by 6 rectangle', () => {
  const w = 5
  const h = 6
  const area = utils.area(w, h)
  expect(area).to.be.a('number')
  expect(area).to.be.equal(w * h)
})

it('should return the are of a circle of radius 5', () => {
  const radius = 5
  const area = utils.circleArea(radius)
  expect(area).to.be.a('number')
  expect(area).to.be.equal(Math.PI * radius * radius)
})

it('Should create a new (object) Item with name and price');

it('Should return an array containing all items in cart');

it('Should add a new item to the shopping cart');

it('Should return the number of items in the cart');

it('Should remove items from cart');

// Stretch challenges

it('Should update the count of items in the cart');

it('Should remove an item when its count is 0');

it('Should return the total cost of all items in the cart');
