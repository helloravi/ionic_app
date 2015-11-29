'use strict';
angular.module('main')
.controller('NotificationDetailCtrl', function ($stateParams, Notifications) {
  var notiDetCtrl = this;
  notiDetCtrl.currentNotification = Notifications.getNotificationFor($stateParams.id);
});
