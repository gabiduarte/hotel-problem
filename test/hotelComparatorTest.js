const HotelComparator = require('../app/HotelComparator');

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
});
