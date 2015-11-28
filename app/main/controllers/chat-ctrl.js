'use strict';
angular.module('main')
.controller('ChatCtrl', function (Chat) {
  var ctrl = this;
  ctrl.chats = Chat.all();
  ctrl.remove = function (chat) {
    Chat.remove(chat);
  };
});
