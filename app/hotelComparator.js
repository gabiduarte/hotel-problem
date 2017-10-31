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

        this.hotels = this.addHotels();
    }

    addHotels() {
        const lakewoodRates = new HotelRates({week: 110, weekend: 90}, {week: 80, weekend: 80});
        const bridgewoodRates = new HotelRates({week: 160, weekend: 60}, {week: 110, weekend: 50});
        const ridgewoodRates = new HotelRates({week: 220, weekend: 150}, {week: 110, weekend: 40});
        const lakewood = new Hotel('Lakewood', 3, lakewoodRates);
        const bridgewood = new Hotel('Bridgewood', 4, bridgewoodRates);
        const ridgewood = new Hotel('Ridgewood', 5, ridgewoodRates);

        return [lakewood, bridgewood, ridgewood];
    }
}

module.exports = HotelComparator;
