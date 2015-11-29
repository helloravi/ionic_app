'use strict';
angular.module('main')
.controller('NotificationCtrl', function (Notifications) {
  var notiCtrl = this;
  notiCtrl.listOfNotifications = function () {
    return Notifications.getAllNotifications();
  };
});
