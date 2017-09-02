function bccCalendarService() {
	const service = {
			getToday: getToday,
			buildMonth: buildMonth,
			buildWeekday: buildWeekday
	};
	return service;

	function getToday () {
			return moment();
	}

	function buildMonth(ctrl, begMonth, currMonth) {
			
	}

	function buildWeekday(weekDay, currMonth) {

	}
}

angular.module('bcc-calendar')
		.factory('bccCalendarService', bccCalendarService);
