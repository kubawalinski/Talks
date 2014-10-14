angular.module('mobilization')

    .controller("SpeakerInfoCtrl", function($stateParams, confApi){
        var vm = this;

        vm.speaker = confApi.getSpeaker($stateParams.id);
    })

    .controller("SpeakersCtrl", function(confApi){
        var vm = this;

        vm.speakers = confApi.getSpeakers();
    })

    .controller("AgendaCtrl", function(confApi, $scope, $timeout){
        var vm = this;

        vm.loadAgenda = function(forceRefresh){
            vm.agenda = confApi.getAgenda(forceRefresh);
            if(forceRefresh){
                $timeout(function(){
                    $scope.$broadcast('scroll.refreshComplete');
                }, 1000);
            }
        };

        vm.loadAgenda(false);
    })

    .controller('CordovaCtrl', function($scope, $cordovaDevice, $cordovaFlashlight, $cordovaDialogs) {
        var vm = this;

        try {
            vm.model = $cordovaDevice.getModel();
        }
        catch(e){

        }

        vm.turnOnFlashlight = function() {
            $cordovaFlashlight.switchOn()
                .then(
                function (success) {
                    $cordovaDialogs.alert("Flashlight on!");
                },
                function (error) {
                    $cordovaDialogs.alert("Problem turning on the flashlight :(");
                }
            )
        };

        vm.turnOffFlashlight = function(){
            $cordovaFlashlight.switchOff()
                .then(
                function (success) {
                    $cordovaDialogs.alert("Flashlight off!");
                },
                function (error) {
                    $cordovaDialogs.alert("Problem turning off the flashlight :(");
                }
            )
        };

        vm.beep = function(){
            $cordovaDialogs.beep(3);
        };
    });
