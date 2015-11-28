'use strict';
angular.module('main')
.controller('AnnouncementCtrl', function (Announcements) {
  var annCtrl = this;
  annCtrl.listOfAnnouncements = function () {
    return Announcements.getAllAnnouncements();
  };
});
