function bccCalendarService() {
  const service = {
    getToday: getToday,
    buildMonth: buildMonth,
    buildWeekday: buildWeekday
  };
  return service;

  function getToday() {
    return moment();
  }

  function buildMonth(ctrl, begMonth, currMonth) {
    // Array of objects where each object represents a week in the month
    // and contains an array of days for the respective week.
    ctrl.weeksInMonth = [];

    // Stores the number of the month (moment is zero-based so Jan = 0, Dec = 11);
    let mIdx = begMonth.month();
    // Copy so that the values can be modified without modifying the original.
    let month = begMonth.clone();

    // Calculates and pushes the first week. This needs to happen since the
    // first week could have mixed dates from the prev month and current month.
    ctrl.weeksInMonth.push({
      daysInWeek: buildWeekDays(month.clone(), currMonth)
    });
    // Move to the next week in the current month.
    month.add(1, 'w');

    do {
      // Store the index of the current month value.
      mIdx = month.month();
      // For each week object, push an array where each array index is a day in
      // the current week. Pass in a copy of 'month' so that it can be manipulated
      // without changing the month in this function.
      ctrl.weeksInMonth.push({
        daysInWeek: buildWeekDays(month.clone(), currMonth)
      });
      // Move to the next week in the current month.
      month.add(1, 'w');
      // Continue looping while in the same month.
    } while (mIdx === month.month());
  }

  function buildWeekday(weekDay, currMonth) {
    const NUM_DAYS_IN_WEEK = 7;

    let daysInWeek = [];
    for (let i = 0; i < NUM_DAYS_IN_WEEK; ++i) {
      // Pushes an object to the array where each day contains information
      // needed for the calendar day.
      daysInWeek.push({
        dayName: weekDay.format('dd').substring(0, 2),
        day: weekDay.date(),
        isCurrentMonth: weekDay.month() === currMonth.month(),
        isToday: weekDay.isSame(currMonth, 'day'),
        date: moment(weekDay)
      });
      // Move to the next day in the week.
      weekDay.add(1, 'd');
    }
    // Return the array of days to the calling routine.
    return daysInWeek;
  }
}

angular.module('bcc-calendar').factory('bccCalendarService', bccCalendarService);
