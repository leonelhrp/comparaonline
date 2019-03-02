const expect = require('chai').expect;
const after30Days = require('../src/services/after30Days')
const Product = require('../src/models/product')
const productName = require('../src/services/productName')

describe("After 30 Days Test", function() {
    
    it("should print values when prompted with productPrinter", function() {
        const after = new after30Days();
        const product =  new Product(productName.MEDIUM_COVERAGE, 10, 20)

        expect(after.productPrinter(product)).equal(`${productName.MEDIUM_COVERAGE}, 10, 20`);
    })

    it("should create test array with 9 items", function() {
        const after = new after30Days();
        expect(after.productsAtDayZero.length).equal(9);
    })
  

    it("should run return true for success", function() {
        const after = new after30Days();
        expect(after.run()).equal(true);
    })

});
  

