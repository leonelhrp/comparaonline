const CarInsurance = require('../models/carInsurance')
const productsAtDayZero = require('../utils/productsAtDayZero')

class after30Days {
    constructor() {
        this.productsAtDayZero = productsAtDayZero
    }

    productPrinter(product) {
        let returnValue = `${product.name}, ${product.sellIn}, ${product.price}`
        console.log(returnValue)
        return returnValue
    }

    run() {
        let carInsurance = new CarInsurance(this.productsAtDayZero)
        for (let i = 1; i <= 30; i += 1) {
            console.log(`Day ${i}`)
            console.log('name, sellIn, price')
            carInsurance.updatePrice().forEach(this.productPrinter)
            console.log('')
        }
        return true
    }
}

module.exports = after30Days
  