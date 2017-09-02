const bccCalendarDay = {
  bindings: {
    day: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;
  },
  template: `
    <div>
      {{ day.dayName }} {{ day.day }}
    </div>
  `
};

angular.module('bcc-calendar').component('bccCalendarDay', bccCalendarDay);
