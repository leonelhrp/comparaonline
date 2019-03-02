const expect = require('chai').expect;
const CarInsurance = require('../src/models/carInsurance')
const Product = require('../src/models/product')

describe("Co Test", function () {

  it("should decrease sellIn value on each update", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ])
    const products = coTest.updatePrice()
    expect(products[0].sellIn).equal(-1)
  })

  it("should create empty list when no array provided", function() {
    const coTest = new CarInsurance()
    expect(coTest.products.length).equal(0)
  })

  it("should normal product with price 30, sellIn 10 update price to 29 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 10, 30) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(29)
  })

  it("should normal product with price 30, sellIn 0 update price to 28 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 0, 30) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(28)
  })

  it("should normal product with price 1, sellIn 0 update price to 0 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 0, 1) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(0)
  })

  it("should Full Coverage product with price 30, sellIn 10 update price to 31 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 10, 30) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(31)
  })

  it("should Full Coverage product with price 30, sellIn 0 update price to 32 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 0, 30) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(32)
  })

  it("should Full Coverage product with price 50, sellIn 10 update price to 50 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 10, 50) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(50)
  })

  it("should Full Coverage product with price 48, sellIn 0 update price to 50 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 0, 50) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(50)
  })

  it("should Special Full Coverage product with price 20, sellIn 15 update price to 21 after 1 day(s)", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 15, 20) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(21)
  })

  it("should Special Full Coverage product with price 49, sellIn 10 update price to 50 after 1 day(s)", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 10, 49) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(50)
  })

  it("should Special Full Coverage product with price 25, sellIn 7 update price to 27 after 1 day(s)", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 7, 25) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(27)
  })

  it("should Special Full Coverage product with price 25, sellIn 3 update price to 28 after 1 day(s)", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 3, 25) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(28)
  })

  it("should Special Full Coverage product with price 25, sellIn 0 update price to 0 after 1 day(s)", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 0, 25) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(0)
  })


  it("should Special Full Coverage product with price 25, sellIn 5 update price to 28 after 1 day(s)", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 5, 25) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(28)
  })


  it("should Mega Coverage product with price 80, sellIn -1 update price to 80 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", -1, 80) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(80)
  })

  it("should Mega Coverage product with price 80, sellIn 0 update price to 80 after 1 day", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ])
    const products = coTest.updatePrice()
    expect(products[0].price).equal(80)
  })

})