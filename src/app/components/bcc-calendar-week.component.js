const bccCalendarWeek = {
  bindings: {
    week: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;
  },
  template: `<div class="week-container">
    <div class="day-container"
         ng-class="{'is-today': day.isToday}"
         ng-repeat="day in $ctrl.week">
      <bcc-calendar-day day="day"></bcc-calendar-day>
    </div>
</div>
  `
};

angular.module('bcc-calendar').component('bccCalendarWeek', bccCalendarWeek);
