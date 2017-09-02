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

    let current = momentObj
      .clone()
      .date(1)
      .day(0);

    let week = current.clone();

    do {
      let daysInWeek = [];
      for (let i = 0; i < 7; ++i) {
        daysInWeek.push({
          dayName: week.format('dddd'),
          day: week.date(),
          isCurrentMonth: week.month() === current.month(),
          isToday: week.isSame(current, 'day'),
          date: moment(week)
        });
        week.add(1, 'd');
      }

      weeksInMonth.push(daysInWeek);
      current.add(1, 'w');
    } while (current.month() === momentObj.month());
    return weeksInMonth;
  }
}

angular.module('bcc-calendar').factory('bccCalendarService', bccCalendarService);
