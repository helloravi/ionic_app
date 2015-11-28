'use strict';
angular.module('main')
.controller('AnnouncementDetailCtrl', function ($stateParams, Announcements) {
  var annDetCtrl = this;
  annDetCtrl.currentAnnouncement = Announcements.getAnnouncementFor($stateParams.id);
  console.log(annDetCtrl.currentAnnouncement);
});
