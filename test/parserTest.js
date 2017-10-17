var Parser = require('../app/parser');
var expect = require('chai').expect;

describe('Parser', function() {

	describe('#constructor', function() {
		it('should split argument into customerType and dateRange', function() {
			let parser = new Parser('Rewards: 18Mar2001(tues), 19Mar2001(wed)');

			expect(parser.customerType).to.equal('Rewards');
			expect(parser.dateRange).to.equal(' 18Mar2001(tues), 19Mar2001(wed)');
		});

		it('should throw error when initializing Parser without arguments', function() {
			expect(function() {
					return new Parser()
				}).to.throw('You need to type an input');
		});
	});
});
