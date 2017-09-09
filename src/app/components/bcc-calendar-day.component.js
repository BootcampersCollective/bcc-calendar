const bccCalendarDay = {
  bindings: {
    day: '<',
    events: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;

    ctrl.$onInit = function () {};
  },
  template: `
    <span class="cal-day">
      <div></div>
          {{$ctrl.day.day}}
          <bcc-calendar-events day="$ctrl.day.date" events="$ctrl.events"></bcc-calendar-events>
      </div>
    </span>
  `
};

angular.module('bcc-calendar').component('bccCalendarDay', bccCalendarDay);
