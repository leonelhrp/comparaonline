class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    getName () {
        return this.name
    }

    getSellIn () {
        return this.sellIn
    }
    
    getPrice () {
        return this.price
    }

    setName (value) {
        return this.name = value
    }

    setSellIn (value) {
        return this.sellIn = value
    }
    
    setPrice (value) {
        return this.price = value
    }

}

module.exports = Product