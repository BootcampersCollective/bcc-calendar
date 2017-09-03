const bccCalendar = {
  bindings: {},
  controller: /*@ngInject*/ function (bccCalendarService) {
    let ctrl = this;
    ctrl.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    ctrl.view = true;

    ctrl.switchView = switchView;
    ctrl.setMonth = setMonth;

    ctrl.$onInit = function () {
      setMonth(null);
    };

    function switchView() {
      ctrl.view = !ctrl.view;
    }

    function setMonth(action) {
      switch (action) {
        case 'prev':
          ctrl.current.subtract(1, 'M');
          break;
        case 'next':
          ctrl.current.add(1, 'M');
          break;
        default:
          ctrl.current = bccCalendarService.getToday();
      }
      ctrl.weeks = bccCalendarService.buildMonth(ctrl.current);
      ctrl.titleMonth = ctrl.current.format('MMMM YYYY');
    }
  },
  template: `<div id="cal-container">
    <div id="cal-header">
        <div>{{ $ctrl.titleMonth }}</div>
    </div>
    <div class="nav-row">
        <button class="fa fa-angle-left" ng-click="$ctrl.setMonth('prev')"></button>
        <button ng-click="$ctrl.setMonth()">Today</button>
        <button class="fa fa-angle-right" ng-click="$ctrl.setMonth('next')"></button>
    </div>
    <div id="cal-day-header">
        <div class="day-name" ng-repeat="day in $ctrl.dayNames">{{ day }}</div>
    </div>
    <div class="cal-week" ng-repeat="week in $ctrl.weeks">
        <bcc-calendar-week week="week" view="$ctrl.view"></bcc-calendar-week>
    </div>
</div>
    `
};

angular.module('bcc-calendar').component('bccCalendar', bccCalendar);
