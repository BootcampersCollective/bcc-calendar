function bccCalendarService() {
  const service = {
    getToday: getToday,
    buildMonth: buildMonth
    // buildWeekday: buildWeekday
  };
  return service;

  function getToday() {
    return moment();
  }

  function buildMonth(month) {
    let x = moment(month).daysInMonth();
  }

  //   function buildWeekday(day) {
  //     const NUM_DAYS_IN_WEEK = 7;

  //     let daysInWeek = [];
  //     for (let i = 0; i < NUM_DAYS_IN_WEEK; ++i) {
  //       // Pushes an object to the array where each day contains information
  //       // needed for the calendar day.
  //       daysInWeek.push({
  //         dayName: weekDay.format('dd').substring(0, 2),
  //         day: weekDay.date(),
  //         isCurrentMonth: weekDay.month() === currMonth.month(),
  //         isToday: weekDay.isSame(currMonth, 'day'),
  //         date: moment(weekDay)
  //       });
  //       // Move to the next day in the week.
  //       weekDay.add(1, 'd');
  //     }
  //     // Return the array of days to the calling routine.
  //     return daysInWeek;
  //   }
}

angular.module('bcc-calendar').factory('bccCalendarService', bccCalendarService);
