'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/announcement');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.announcement', {
        url: '/announcement',
        views: {
          'tab-announcement': {
            templateUrl: 'main/templates/announcement.html',
            controller: 'AnnouncementCtrl as AnnCtrl'
          }
        }
      })
      .state('main.announcementDetail', {
        url: '/announcement/detail/:id',
        views: {
          'tab-announcement': {
            templateUrl: 'main/templates/announcement-detail.html',
            controller: 'AnnouncementDetailCtrl as AnnDetailCtrl'
          }
        }
      })
      .state('main.notification', {
        url: '/notification',
        views: {
          'tab-notification': {
            templateUrl: 'main/templates/notification.html',
            controller: 'NotificationCtrl as NotiCtrl'
          }
        }
      })
      .state('main.notificationDetail', {
        url: '/notification/detail/:id',
        views: {
          'tab-notification': {
            templateUrl: 'main/templates/notification-detail.html',
            controller: 'NotificationDetailCtrl as NotiDetailCtrl'
          }
        }
      })
      .state('main.chat', {
        url: '/chat',
        views: {
          'tab-chat': {
            templateUrl: 'main/templates/chat.html',
            controller: 'ChatCtrl as ChatCtrl'
          }
        }
      })
      .state('main.chatDetail', {
        url: '/chat/detail/:id',
        views: {
          'tab-chat': {
            templateUrl: 'main/templates/chat-detail.html',
            controller: 'ChatDetailCtrl as ChatDetailCtrl'
          }
        }
      });
});
