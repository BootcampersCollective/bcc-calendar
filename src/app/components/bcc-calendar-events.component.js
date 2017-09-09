const bccCalendarEvents = {
  bindings: {
    events: '<'
  },
  controller: /*@ngInject*/ function () {
    let ctrl = this;

    ctrl.$onInit = function () {};
  },
  template: `
    <div class="bcc-events">
      <ul>
        <li
          ng-repeat="event in $ctrl.events"
          ng-if="$ctrl.events">
            {{event.start_time.format('LT')}} - {{ event.name }}
        </li>
      </ul>
    </div>
  `
};

angular.module('bcc-calendar').component('bccCalendarEvents', bccCalendarEvents);
