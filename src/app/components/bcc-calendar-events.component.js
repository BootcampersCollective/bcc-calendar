const bccCalendarEvents = {
  bindings: {
    events: '<',
    day: '<'
  },
  controller: /*@ngInject*/ function (bccEventsService) {
    let ctrl = this;
    ctrl.isToday = isToday;

    ctrl.$onInit = function () {};

    function isToday(dayDate, eventDate) {
      return bccEventsService.isEventToday(dayDate, eventDate);
    }
  },
  template: `
    <div class="bcc-events">
      <ul>
        <li ng-repeat="event in $ctrl.events" ng-if="$ctrl.isToday($ctrl.day, event.start_time)">{{ event.name }}</li>
      </ul>
    </div>
  `
};

angular.module('bcc-calendar').component('bccCalendarEvents', bccCalendarEvents);
