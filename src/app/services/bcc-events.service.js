function bccEventsService() {
  const service = {
    getData: getData,
    isEventToday: isEventToday
  };
  return service;

  function isEventToday(dayDate, eventDate) {
    return dayDate.isSame(eventDate, 'day');
  }

  // This is mock data. The idea is that this data will be passed in
  // to the calendar component from an outside source.
  function getData() {
    return [
      {
        description: 'Doesn’t this piece make you want to set sail?',
        end_time: '2017-09-16T20:00:00-0600',
        name: 'Painting Class: Sailboat by Monet',
        place: {
          name: 'A place'
        },
        start_time: '2017-09-16T17:30:00-0600'
      },
      {
        description: 'Doesn’t this piece make you want to set sail?',
        end_time: '2017-09-16T20:00:00-0600',
        name: 'Painting Class: Sailboat by Monet',
        place: {
          name: 'A place'
        },
        start_time: '2017-09-16T17:30:00-0600'
      },
      {
        description: 'This is not the kind of alcohol you drink.',
        end_time: '2017-09-15T20:00:00-0600',
        name: 'Class: Intro to Alcohol Ink',
        place: {
          name: 'A place'
        },
        start_time: '2017-09-15T17:30:00-0600'
      },
      {
        description: 'Unwind by making a simple set of jewelry to compliment your wardrobe.',
        end_time: '2017-09-13T20:00:00-0600',
        name: 'Class: Intro to Jewelry Basics',
        place: {
          name: 'A Place'
        },
        start_time: '2017-09-13T17:30:00-0600'
      },
      {
        description: 'We are kicking off the school year with this FREE event that is All about Families!',
        end_time: '2017-08-18T19:30:00-0600',
        name: 'All about Families Mini-Mall',
        place: {
          name: 'A place'
        },
        start_time: '2017-08-18T17:00:00-0600'
      },
      {
        description: 'Please join us for a book signing for the newly released picture book.',
        end_time: '2017-06-24T12:30:00-0600',
        name: 'Babies and Old Ladies - book signing/storytime',
        place: {
          name: 'A place'
        },
        start_time: '2017-06-24T09:30:00-0600'
      },
      {
        description: 'Join us for our next painting class.',
        end_time: '2017-05-20T20:00:00-0600',
        name: 'Painting Class: Strawberries',
        place: {
          name: 'A place'
        },
        start_time: '2017-05-20T17:30:00-0600'
      },
      {
        description: 'Join us for this fun painting class where we will create “Waterlilies”',
        end_time: '2017-04-22T20:00:00-0600',
        name: 'Painting Class: Waterlilies by Monet',
        place: {
          name: 'A place'
        },
        start_time: '2017-04-22T17:30:00-0600'
      },
      {
        description: 'Get a jump on your spring shopping!',
        end_time: '2017-04-08T18:30:00-0600',
        name: 'Spring 2017 Mini-Mall',
        place: {
          name: 'A place'
        },
        start_time: '2017-04-08T16:00:00-0600'
      },
      {
        description: 'Are you a kid at heart?',
        end_time: '2017-03-17T22:00:00-0600',
        name: 'Grown-Up Game Night',
        place: {
          name: 'A place'
        },
        start_time: '2017-03-17T19:00:00-0600'
      },
      {
        description: 'Are you a kid at heart?',
        end_time: '2017-02-17T21:00:00-0700',
        name: 'Grown-Up Game Night',
        place: {
          name: 'A place'
        },
        start_time: '2017-02-17T18:00:00-0700'
      },
      {
        description: 'Everywhere I look, God Is There.',
        end_time: '2017-02-08T18:00:00-0700',
        name: 'Book Signing with Susan Roberts',
        place: {
          name: 'A place'
        },
        start_time: '2017-02-08T15:00:00-0700'
      },
      {
        description: 'Everywhere I look, God Is There',
        end_time: '2017-01-28T12:00:00-0700',
        name: 'Book Signing with Susan Roberts',
        place: {
          name: 'A place'
        },
        start_time: '2017-01-28T09:00:00-0700'
      },
      {
        description: 'Abuse is rampant in our society.',
        end_time: '2017-01-26T21:00:00-0700',
        name: 'Empowered!',
        place: {
          name: 'A place'
        },
        start_time: '2017-01-26T18:30:00-0700'
      },
      {
        description: 'Learn to paint this beautiful piece by Claude Monet.',
        end_time: '2017-01-21T20:00:00-0700',
        name: 'A place',
        place: {
          name: '5340 Coffee & Events'
        },
        start_time: '2017-01-21T17:30:00-0700'
      },
      {
        description: 'Are you a kid at heart?',
        end_time: '2017-01-20T21:00:00-0700',
        name: 'Grown-Up Game Night',
        place: {
          name: 'A place'
        },
        start_time: '2017-01-20T18:00:00-0700'
      },
      {
        description: 'Bring your project to work on, & enjoy conversation.',
        end_time: '2016-12-16T22:00:00-0700',
        name: 'Needle Arts Gathering',
        place: {
          name: 'A place'
        },
        start_time: '2016-12-16T19:00:00-0700'
      }
    ];
  }
}

angular.module('bcc-calendar').factory('bccEventsService', bccEventsService);
