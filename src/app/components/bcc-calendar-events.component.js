const bccCalendarEvents = {
  bindings: {
    events: '<',
    day: '<'
  },
  controller: /*@ngInject*/ function (bccEventsService) {
    let ctrl = this;
    ctrl.isEventToday = isEventToday;
    ctrl.makeMoment = makeMoment;

    ctrl.$onInit = function () {};

    function isEventToday(dayDate, eventDate) {
      return bccEventsService.isEventToday(dayDate, eventDate);
    }

    function makeMoment(event) {
      return moment(event);
    }
  },
  template: `
    <div class="bcc-events">
      <ul>
        <li
          ng-repeat="event in $ctrl.events"
          ng-if="$ctrl.isEventToday($ctrl.day, $ctrl.makeMoment(event.start_time))">
            {{$ctrl.makeMoment(event.start_time).format('LT')}} - {{ event.name }}
        </li>
      </ul>
    </div>
  `
};

angular.module('bcc-calendar').component('bccCalendarEvents', bccCalendarEvents);
