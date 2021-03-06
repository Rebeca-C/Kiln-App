// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/homemenu.html',
  })

 //Homepage menu 
      .state('app.homemenu', {
          url: '/homemenu',
          views: {
              'mainmenuContent': {
                  templateUrl: 'templates/homemenu.html',

              }
          }
      })

  //Start new Project child of Home Menu
      .state('app.startnew', {
          url: '/startnew',
          views: {
              'mainmenuContent': {
                  templateUrl: 'templates/startnew.html',
                  controller: 'StartnewCtrl'
              }
          }
      })

  //Edit Projects child of Start new Project
        .state('app.editproject', {
            url: '/editproject',
            views: {
                'mainmenuContent': {
                    templateUrl: 'templates/editproject.html',
                    controller: 'StartnewCtrl'
                }
            }

        })

    //Edit Projects child of Start new Project
    //Recycle Create new page to Edit data
    .state('app.editprojectid', {
        url: '/editproject/:id',
        views: {
            'mainmenuContent': {
                templateUrl: 'templates/createnew.html',
                controller: 'EditCtrl'
            }
        }

    })

  //Create new Project child of Start new Project
       .state('app.createnew', {
           url: '/createnew',
           views: {
               'mainmenuContent': {
                   templateUrl: 'templates/createnew.html',
                   controller: 'CreatenewCtrl'
               }
           }
       })


  //Dispay Program to run
       .state('app.runproject', {
           url: '/runproject/:id',
           views: {
               'mainmenuContent': {
                   templateUrl: 'templates/runproject.html',
                   controller: 'RunprojectCtrl'
               }
           }
       })

    //Warm Kiln child of Home Menu
      .state('app.warmkiln', {
          url: '/warmkiln',
          views: {
              'mainmenuContent': {
                  templateUrl: 'templates/warmkiln.html',

              }
          }
      })

      //Firing Log child of Home Menu
      .state('app.firinglog', {
          url: '/firinglog',
          views: {
              'mainmenuContent': {
                  templateUrl: 'templates/firinglog.html'
              }
          }
      })

      //Settings child of Home Menu
      .state('app.settings', {
          url: '/settings',
          views: {
              'mainmenuContent': {
                  templateUrl: 'templates/settings.html',

              }
          }
      })

      //Firing Process Begins
    .state('app.firinginprocess', {
        url: '/firinginprocess',
        views: {
            'mainmenuContent': {
                templateUrl: 'templates/firinginprocess.html',
                controller: 'FiringCtrl'

            }
        }
    })

      //Firing Cycles
    .state('app.firingcycles', {
        url: '/firingcycles',
        views: {
            'mainmenuContent': {
                templateUrl: 'templates/firingcylces.html',

            }
        }
    })

      //Firing Kiln Status
    .state('app.kilnstatus', {
        url: '/kilnstatus',
        views: {
            'mainmenuContent': {
                templateUrl: 'templates/kilnstatus.html',

            }
        }
    })

      //Firing menu
    .state('app.firingmenu', {
        url: '/firingmenu',
        views: {
            'mainmenuContent': {
                templateUrl: 'templates/firingmenu.html',

            }
        }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/homemenu');
});
