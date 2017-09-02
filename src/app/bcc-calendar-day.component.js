const bccCalendarDay = {
  bindings: {
    day: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;

    ctrl.$onInit = function () {};
  },
  template: `
    <span class="cal-day">
      <div ng-class="{'inactive-month': !$ctrl.day.isCurrentMonth, 'is-today': $ctrl.day.isToday}">
          {{$ctrl.day.day}}
      </div>
    </span>
  `
};

angular.module('bcc-calendar').component('bccCalendarDay', bccCalendarDay);
