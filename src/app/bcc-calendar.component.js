const bccCalendar = {
  bindings: {},
  controller: /*@ngInject*/ function (bccCalendarService) {
    let ctrl = this;

    // Days in the week.
    ctrl.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    ctrl.selected = null;

    ctrl.select = select;
    ctrl.nextMonth = nextMonth;
    ctrl.prevMonth = prevMonth;

    ctrl.$onInit = function () {
      ctrl.today = bccCalendarService.getToday();
      ctrl.titleMonth = ctrl.today.format('MMMM YYYY');
    };

    function select(day) {
      ctrl.selected = day.date;
    }

    function nextMonth() {
      let nMonth = null;
      if(ctrl.selected) {
        nMonth = ctrl.selected.month();
      } else {
        nMonth = ctrl.today.month();
      }

      ctrl.weeks = bccCalendarService.buildMonth(nMonth);
    }

    function prevMonth() {
      let pMonth = null;
      if(ctrl.selected) {
        pMonth = ctrl.selected.month();
      } else {
        pMonth = ctrl.today.month();
      }

      ctrl.weeks = bccCalendarService.buildMonth(pMonth);
    }

  template: `
      <div id="cal-container">
        <div id="cal-header">
          <button class="fa fa-angle-left" ng-click="prevMonth()"></button>
          <div>{{ titleMonth }}</div>
          <button class="fa fa-angle-right" ng-click="nextMonth()"></button>
        </div>
        <div id="cal-day-header">
          <div class="day-name" ng-repeat="day in dayNames">{{ day }}</div>
        </div>
        <div class="cal-week" ng-repeat="week in $ctrl.weeks">
          <bcc-calendar-week week="week"></bcc-calendar-week>
        </div>
      </div>
    `
};

angular.module('bcc-calendar').component('bccCalendar', bccCalendar);
