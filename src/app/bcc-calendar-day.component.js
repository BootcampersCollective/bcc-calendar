const bccCalendarDay = {
		bindings: {
				day: '<'
		},
		controller: /*@ngInject*/ function () {
				let ctrl = this;

				ctrl.$onInit = function () {};
		},
		template: `
    <span class="cal-day">
      <div>{{$ctrl.day.day}}</div>
    </span>
  `
};

angular.module('bcc-calendar').component('bccCalendarDay', bccCalendarDay);
