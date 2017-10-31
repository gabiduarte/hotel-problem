const HotelComparator = require('../app/HotelComparator');
const Parser = require('../app/Parser');
const Hotel = require('../app/Hotel');
const HotelRates = require('../app/HotelRates');
const sinon = require('sinon');


const expect = require('chai').expect;

describe('HotelComparator', function() {
    describe('#constructor', function() {
        it('should instantiate a new parser', function() {
            let comparator = new HotelComparator('Rewards: 18Apr2001, 19Apr2002');

            expect(comparator.parser).to.not.be.undefined;
        });

        it('should add hotels to comparator when there is an input', function() {
            let comparator = new HotelComparator('Rewards: 18Apr2001, 19Apr2002');

            expect(comparator.hotels.length).to.equal(3);
        });

        it('should throw an error when there is no input', function() {
            expect(function() {
                return new HotelComparator('');
            }).to.throw('You need to add a valid input');
        });
    });

    describe('#findHighestRatingHotel', function() {
        it('should return the highest rating hotel amongst two hotels', function() {
            const fakeHotel = new Hotel('Fake Hotel', 3, {});
            const fakeHotel2 = new Hotel('Fake Hotel 2', 5, {});
            let comparator = new HotelComparator('Rewards: 18Apr2010, 19Apr2011');

            expect(comparator.findHighestRatingHotel(fakeHotel, fakeHotel2)).to.equal(fakeHotel2);
        });
    });

    describe('#calculateRateForHotel', function() {
        it('should return correct rate for week and weekends', function() {
            //create fakeHotel information
            const fakeHotelRate = new HotelRates({week: 100, weekend: 200}, {week: 10, weekend: 20});
            const fakeHotel = new Hotel('Fake Hotel', 3, fakeHotelRate);

            let comparator = new HotelComparator('Rewards: 18Apr2001, 19Apr2001');
            let dummyParser = new Parser('Rewards: 18Apr2001, 19Apr2001');

            sinon.stub(dummyParser, 'customerType').value('Regular');
            sinon.stub(dummyParser, 'calculateDaysOfTheWeek').returns({week: 4, weekend: 2});

            comparator.parser = dummyParser;
            expect(comparator.calculateRateForHotel(fakeHotel)).to.equal(800);
        });
    });
});
