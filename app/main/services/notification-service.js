'use strict';
angular.module('main')
.service('Notifications', function () {
  var Notifications = this;
  var listOfNotifications = [
    {
      id: 1,
      title: 'Payment Reminder',
      desc: 'Please pay the term fees for this quarter by 31st Dec 2015.'
    },
    {
      id: 2,
      title: 'Green day celebrations',
      desc: 'Please make your children wear green color dresses on 12th Dec as we are having a green day celebration.'
    },
    {
      id: 3,
      title: 'PTA',
      desc: 'We have scheduled a parent teacher meet for your kids class on 15th Dec. Please attend.'
    },
    {
      id: 4,
      title: 'Holiday Homework',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  Notifications.getAllNotifications = function () {
    return listOfNotifications;
  };

  Notifications.getNotificationFor = function (id) {
    var i = 0;
    for (i = 0;i < listOfNotifications.length;i++) {
      if (listOfNotifications[i].id === parseInt(id)) {
        return listOfNotifications[i];
      }
    }
  };
});
