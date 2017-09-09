const bccCalendarWeek = {
  bindings: {
    week: '<',
    events: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;

    ctrl.$onInit = function () {};
  },
  template: `<div class="week-container">
    <div class="day-container"
         ng-class="{'is-today': day.isToday}"
         ng-repeat="day in $ctrl.week">
      <bcc-calendar-day day="day" events="$ctrl.events"></bcc-calendar-day>
    </div>
</div>
  `
};

angular.module('bcc-calendar').component('bccCalendarWeek', bccCalendarWeek);
