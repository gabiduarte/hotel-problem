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

	describe('#validateDate(date)', function() {
		let parser = new Parser(':');

		it('should return true when argument is a day of the week', function() {
			expect(parser.validateDate(6)).to.be.true;
		});

		it('should return false when there is no argument', function() {
			expect(parser.validateDate()).to.be.false;
		});

		it('should return false when argument is not a day of the week', function() {
			expect(parser.validateDate('')).to.be.false;
			expect(parser.validateDate(NaN)).to.be.false;
			expect(parser.validateDate('20abr2009')).to.be.false;
		});
	});

	describe('#calculateDaysOfTheWeek()', function() {
		it('should add week and weekendDays when passing a valid dateRange', function(){
			let parser = new Parser('Regular: 18oct2017(wed), 19oct2017(thurs), 20oct2017(fri), 21oct2017(sat), 22oct2017(sun)');
			expect(parser.calculateDaysOfTheWeek()).to.deep.equal({week: 3, weekend: 2});
		});
		
		it('should not add any days when there is no dateRange value', function(){
			let parser = new Parser('Regular: ');
			
			expect(parser.calculateDaysOfTheWeek()).to.deep.equal({week: 0, weekend: 0});
		});

		it('should not add any days when passing an invalid dateRange string', function() {
			let parser = new Parser('Rewards: 20out2018, 90set2001, 75apr2010');

			expect(parser.calculateDaysOfTheWeek()).to.deep.equal({week: 0, weekend: 0});
		});
	});
});
