'use strict';
angular.module('main')
.controller('ChatDetailCtrl', function ($stateParams, Chat) {
  var ctrl = this;
  ctrl.chat = Chat.get($stateParams.id);
});
