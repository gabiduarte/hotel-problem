class Parser {
	constructor(input) {
		if (!input) {
			throw 'You need to type an input';
		}

		let [customerType, dateRange] = input.split(":");
		this.customerType = customerType;
		this.dateRange = dateRange || "";
	}

	validateCustomer() {
		return this.customerType == 'Regular' || this.customerType == 'Rewards';
	}

	validateDate(date = "") {
		return Number.isInteger(date);
	}
}

module.exports = Parser;
