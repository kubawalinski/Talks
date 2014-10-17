angular.module('mobilization', ['ionic', 'ngCordova'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('conference', {
                abstract: true,
                url: "/conference",
                templateUrl: "app/templates/menu.html"
            })

            .state('conference.agenda', {
                url: "/agenda",
                templateUrl: "app/templates/agenda.html"
            })

            .state('conference.speakers', {
                url: "/speakers",
                templateUrl: "app/templates/speakers.html"
            })

            .state('conference.speaker-info', {
                url: "/speakers/:id",
                templateUrl: "app/templates/speaker-info.html"
            })

            .state('conference.device', {
                url: "/device",
                templateUrl: "app/templates/device.html"
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/conference/agenda');
    });

