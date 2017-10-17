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
}

module.exports = Parser;