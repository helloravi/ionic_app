'use strict';
angular.module('main')
.service('Chat', function () {
  var chat = this;
  var chats = [{
    id: 0,
    name: 'Class Teacher',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Maths Teacher',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Science Teacher',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'English Teacher',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Hindi Teacher',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  chat.all = function () {
    return chats;
  };

  chat.remove = function (chat) {
    chats.splice(chats.indexOf(chat), 1);
  };

  chat.get = function (chatId) {
    for (var i = 0; i < chats.length; i++) {
      if (chats[i].id === parseInt(chatId)) {
        return chats[i];
      }
    }
    return null;
  };

});
