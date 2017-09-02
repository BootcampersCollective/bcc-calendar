function bccCalendarService() {
  const service = {
    getToday: getToday,
    buildMonth: buildMonth
  };
  return service;

  function getToday() {
    return moment();
  }

  function buildMonth(momentObj) {
    let weeksInMonth = [];

    let monthIndex = momentObj.month();
    let currentMonth = momentObj
      .clone()
      .date(1)
      .day(0);

    let week = currentMonth.clone();
    while (currentMonth.month() <= monthIndex) {
      let daysInWeek = [];

      for (let i = 0; i < 7; ++i) {
        daysInWeek.push({
          dayName: week.format('dd').substring(0, 2),
          day: week.date(),
          isCurrentMonth: week.month() === currentMonth.month(),
          isToday: week.isSame(currentMonth, 'day'),
          date: moment(week)
        });
        week.add(1, 'd');
      }

      weeksInMonth.push(daysInWeek);
      currentMonth.add(1, 'w');
    }

    console.log(weeksInMonth);
    return weeksInMonth;
  }
}

angular.module('bcc-calendar').factory('bccCalendarService', bccCalendarService);
