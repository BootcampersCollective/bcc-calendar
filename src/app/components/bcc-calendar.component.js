const bccCalendar = {
  bindings: {
    events: '<'
  },
  controller: /*@ngInject*/ function (bccCalendarService, bccEventsService) {
    let ctrl = this;
    ctrl.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    ctrl.view = true;

    ctrl.nextMonth = nextMonth;
    ctrl.goToday = goToday;
    ctrl.prevMonth = prevMonth;
    ctrl.switchView = switchView;

    ctrl.$onInit = function () {
      // Get mock data. Data will eventually be passed in via an outside source.
      ctrl.events = bccEventsService.getData();
      goToday();
    };

    function switchView() {
      ctrl.view = !ctrl.view;
    }

    function goToday() {
      ctrl.current = bccCalendarService.getToday();
      ctrl.weeks = bccCalendarService.buildMonth(ctrl.current, ctrl.events);
      ctrl.titleMonth = ctrl.current.format('MMMM YYYY');
    }

    function nextMonth() {
      ctrl.weeks = bccCalendarService.buildMonth(ctrl.current.add(1, 'M'), ctrl.events);
      ctrl.titleMonth = ctrl.current.format('MMMM YYYY');
    }

    function prevMonth() {
      ctrl.weeks = bccCalendarService.buildMonth(ctrl.current.subtract(1, 'M'), ctrl.events);
      ctrl.titleMonth = ctrl.current.format('MMMM YYYY');
    }
  },
  template: `<div id="cal-container">
    <div id="cal-header">
        <div>{{ $ctrl.titleMonth }}</div>
    </div>
    <div class="nav-row">
        <button class="fa fa-angle-left" ng-click="$ctrl.prevMonth()"></button>
        <button ng-click="$ctrl.goToday()">Today</button>
        <button class="fa fa-angle-right" ng-click="$ctrl.nextMonth()"></button>
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
