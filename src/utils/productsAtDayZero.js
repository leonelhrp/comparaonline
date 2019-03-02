const Product = require('../models/product')
const productName = require('../services/productName')

const productsAtDayZero = [
    new Product(productName.MEDIUM_COVERAGE, 10, 20),
    new Product(productName.FULL_COVERAGE, 2, 0),
    new Product(productName.LOW_COVERAGE, 5, 7),
    new Product(productName.MEGA_COVERAGE, 0, 80),
    new Product(productName.MEGA_COVERAGE, -1, 80),
    new Product(productName.SPECIAL_FULL_COVERAGE, 15, 20),
    new Product(productName.SPECIAL_FULL_COVERAGE, 10, 49),
    new Product(productName.SPECIAL_FULL_COVERAGE, 5, 49),
    new Product(productName.SUPER_SALE, 3, 6),
]

module.exports = productsAtDayZero