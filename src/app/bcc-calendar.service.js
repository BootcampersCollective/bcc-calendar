function bccCalendarService() {
  const service = {
    getToday: getToday,
    buildMonth: buildMonth,
    setMonth: setMonth
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
          isCurrentMonth: week.month() === momentObj.month(),
          isToday: week.isSame(getToday(), 'day'),
          date: moment(week)
        });
        week.add(1, 'd');
      }

      weeksInMonth.push(daysInWeek);
      current.add(1, 'w');
    } while (current.month() === momentObj.month());
    // console.log(weeksInMonth);
    return weeksInMonth;
  }

  function setMonth(action, momentObj) {
    switch (action) {
      case 'prev':
        return momentObj.subtract(1, 'M');
      case 'next':
        return momentObj.add(1, 'M');
    }
    return getToday();
  }
}

angular.module('bcc-calendar').factory('bccCalendarService', bccCalendarService);
