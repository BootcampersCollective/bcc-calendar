function bccEventModal() {
  const directive = {
    bindings: {
      events: '<'
    },
    restrict: 'EA',
    link: link,
    template: `
    <div class=bcc-modal-container>

    </div>
  `
  };
  return directive;

  function link() {}
}

angular.module('bcc-calendar-events').directive('bcc-event-modal', bccEventModal);
