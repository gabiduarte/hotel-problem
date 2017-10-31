const Parser = require('./parser');
const Hotel = require('./hotel');
const HotelRates = require('./hotelRates');

class HotelComparator {
    constructor(input) {
        try {
            this.parser = new Parser(input);
        } catch(e) {
            throw 'You need to add a valid input';
        }
    }
}

module.exports = HotelComparator;
