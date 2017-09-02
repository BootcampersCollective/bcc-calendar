const bccCalendarDay = {
		bindings: {
				day: '<'
		},
		controller: /*@ngInject*/ function () {
				let ctrl = this;

				ctrl.$onInit = function () {};
		},
		template: `
    <div class="cal-day">
      <div>{{ $ctrl.day.dayName }} - {{ $ctrl.day.dayNum }}</div>
      <div>{{$ctrl.day.long}}</div>
    </div>
  `
};

angular.module('bcc-calendar').component('bccCalendarDay', bccCalendarDay);
