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

	splitDateRange() {
		return this.dateRange.split(',');
	}

	calculateDaysOfTheWeek() {
		let [weekDays, weekendDays] = [0,0];
		
		this.splitDateRange().map((dateString) => {
			const currentDay = new Date(dateString).getDay();
			if (this.validateDate(currentDay)) {
				if (currentDay == 6 || currentDay == 0) {
					weekendDays++;
				} else {
					weekDays++;
				}
			}			
		});
		return {week: weekDays, weekend: weekendDays};
	}
}

module.exports = Parser;
