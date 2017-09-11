function bccCalendarService() {
  const service = {
    getToday: getToday,
    buildMonth: buildMonth
  };
  return service;

  function getToday() {
    return moment();
  }

  function buildMonth(momentObj, eventsList) {
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
          date: moment(week),
          events: []
        });

        // Look through events and store corresponding event in correct day.
        for (let j = 0; j < eventsList.length; ++j) {
          eventsList[j].start_time = moment(eventsList[j].start_time);
          eventsList[j].end_time = moment(eventsList[j].end_time);

          if (eventsList[j].start_time.isSame(daysInWeek[i].date, 'day')) {
            daysInWeek[i].events.push(eventsList[j]);
          }
        }

        week.add(1, 'd');
      }

      weeksInMonth.push(daysInWeek);
      current.add(1, 'w');
    } while (current.month() === momentObj.month());

    return weeksInMonth;
  }
}

angular.module('bcc-calendar').factory('bccCalendarService', bccCalendarService);
