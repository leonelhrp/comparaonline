const productName = require('../services/productName')

class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }
    updatePrice() {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].getName() !== productName.FULL_COVERAGE && this.products[i].getName() !== productName.SPECIAL_FULL_COVERAGE) {
                if (this.products[i].getPrice() > 0) {
                    if (this.products[i].getName() !== productName.MEGA_COVERAGE) {
                        this.products[i].setPrice(this.products[i].getPrice() - 1)
                    }
                }
            } else {
                if (this.products[i].getPrice() < 50) {
                    this.products[i].setPrice(this.products[i].getPrice() + 1)
                    if (this.products[i].getName() == productName.SPECIAL_FULL_COVERAGE) {
                        if (this.products[i].getSellIn() < 11) {
                            if (this.products[i].getPrice() < 50) {
                                this.products[i].setPrice(this.products[i].getPrice() + 1)
                            }
                        }
                        if (this.products[i].getSellIn() < 6) {
                            if (this.products[i].getPrice() < 50) {
                                this.products[i].setPrice(this.products[i].getPrice() + 1)
                            }
                        }
                    }
                }
            }
            if (this.products[i].getName() !== productName.MEGA_COVERAGE) {
                this.products[i].setSellIn(this.products[i].getSellIn() - 1)
            }
            if (this.products[i].sellIn < 0) {
                if (this.products[i].getName() !== productName.FULL_COVERAGE) {
                    if (this.products[i].getName() !== productName.SPECIAL_FULL_COVERAGE) {
                        if (this.products[i].getPrice() > 0) {
                            if (this.products[i].getName() !== productName.MEGA_COVERAGE) {
                                this.products[i].setPrice(this.products[i].getPrice() - 1)
                            }
                        }
                    } else {
                        this.products[i].setPrice(this.products[i].getPrice() - this.products[i].getPrice())
                    }
                } else {
                    if (this.products[i].getPrice() < 50) {
                        this.products[i].setPrice(this.products[i].getPrice() + 1)
                    }
                }
            }
        }

        return this.products;
    }
}

module.exports = CarInsurance