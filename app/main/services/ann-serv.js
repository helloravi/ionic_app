'use strict';
angular.module('main')
.service('Announcements', function () {
  var Announcements = this;
  var listOfAnnouncements = [
    {
      id: 1,
      title: 'School Holiday',
      desc: 'School will be closed from 24th Dec 2015 till 3rd Jan 2016 on account of X-Mas vacation.'
    },
    {
      id: 2,
      title: 'School Annual Day',
      desc: 'Annual day celebrations for the year 2015 would be happeneing at the Narada Gana Sabha hall on 12th Dec 2015.All are invited for the occasion.'
    },
    {
      id: 3,
      title: 'Rain Holidays',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 4,
      title: 'Culturals day',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  Announcements.getAllAnnouncements = function () {
    return listOfAnnouncements;
  };

  Announcements.getAnnouncementFor = function (id) {
    var i = 0;
    for (i = 0;i < listOfAnnouncements.length;i++) {
      if (listOfAnnouncements[i].id === parseInt(id)) {
        return listOfAnnouncements[i];
      }
    }
  };
});
