const bccCalendarWeek = {
  bindings: {
    week: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;
  },
  template: `
    <div class="day-container" ng-repeat="day in $ctrl.week">
      <bcc-calendar-day day="day"></bcc-calendar-day>
    </div>
  `
};

angular.module('bcc-calendar').component('bccCalendarWeek', bccCalendarWeek);
