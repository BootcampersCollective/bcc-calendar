const bccCalendarWeek = {
  bindings: {
    week: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;

    ctrl.$onInit = function () {};
  },
  template: `<div class="week-container">
    <div class="day-container"
         ng-repeat="day in $ctrl.week"
         ng-class="{'is-today': day.isToday, 'inactive-month': !day.isCurrentMonth}">
      <bcc-calendar-day day="day"></bcc-calendar-day>
    </div>
</div>
  `
};

angular.module('bcc-calendar').component('bccCalendarWeek', bccCalendarWeek);
