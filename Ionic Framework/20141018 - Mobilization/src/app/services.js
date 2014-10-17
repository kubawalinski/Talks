angular.module('mobilization')

    .factory("confApi", function(){
        var speakers = JSON.parse('[{"id": 1,"name": "Kuba Waliński","bio": "Short Bio for Kuba here...","following":true},{"id": 2,"name": "Krzysztof Zabłocki","bio": "Short Bio for Krzysztof here...","following":false},{"id": 3,"name": "Chris Wacławek","bio": "Short Bio for Chris here...","following":false},{"id": 4,"name": "Anastasia Kazakova","bio": "Short Bio for Anastasia here...","following":false},{"id": 5,"name": "Mariusz Lisiecki","bio": "Short Bio here...","following":true}]');
        var agenda = JSON.parse('[{"title": "Ionic Framework","time": "9:10 - 9:55" },{"title": "Jak pisać mniej kodu?","time": "10:15 - 11:00" },{"title": "World of beacon enabled apps","time": "11:20 - 12:05" },{"title": "Tools and Techniques that help maintain a high quality code base","time": "12:25 - 13:10" },{"title": "Tuningując Xcode","time": "14:30 - 15:15" }]');

        function getSpeakers(){
            return speakers;
        }

        function getAgenda(forceRefresh){
            var result = agenda;
            if(forceRefresh && agenda[0].title != "Registration"){
                result.splice(
                    0,
                    0,
                    {title:"Registration", time: "7:30 - 9:00"},
                    {title:"Welcome", time: "9:00 - 9:10"}
                );
            }
            return result;
        }

        function getSpeaker(speakerId){
            return speakers.filter(function(speaker){
               return speaker.id == speakerId
            })[0];
        }

        return{
            getSpeakers: getSpeakers,
            getSpeaker: getSpeaker,
            getAgenda: getAgenda
        }
    });