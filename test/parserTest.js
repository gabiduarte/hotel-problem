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

	describe('#validateCustomer()', function() {
		let parser;

		it('should return true when customerType is Regular or Rewards', function() {
			parser = new Parser('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)');
			expect(parser.validateCustomer()).to.be.true;
		});

		it('should return false when customerType is empty', function() {
			parser = new Parser(': 20Mar2009(fri)');
			expect(parser.validateCustomer()).to.be.false;
		});

		it('should return false when customerType is different than Regular or Rewards', function() {
			parser = new Parser('Rewards date1, date2, date3');
			expect(parser.validateCustomer()).to.be.false;
		});
	});
});
