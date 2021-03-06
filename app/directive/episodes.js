'use strict';

angular.module('app')
    .directive('episodesMenu', ['$location', function ($location) {

        function link(scope, element, attrs) {

            var id = $location.search().id;

            scope.texte_MatchReturn = "";
            scope.hasBackEpisode = false;
            scope.accessible = false;

            scope.episodes = [
                {job: 'Président', hasBackEpisode: true, texte_MatchReturn: 'Coach Agile', accessible: true},
                {job: 'CTO'},
                {job: 'Dir. Xebia Studio'},
                {job: 'Dir. Recrutement', hasBackEpisode: true, texte_MatchReturn: 'Developpeur', accessible: true},
                {job: 'Dir. Marketing', hasBackEpisode: true, texte_MatchReturn: 'Data Scientist', accessible: true},
                {job: 'DAF', hasBackEpisode: true, texte_MatchReturn: 'Technical Leader', accessible: true},
                {job: 'COO'},
                {job: 'Dir. Commerciale', hasBackEpisode: true, texte_MatchReturn: 'Dev. Android', accessible: true},
                {job: 'Consultant Manager'}

            ];

            for (var index in scope.episodes){
                var episode = scope.episodes[index];
                if (episode.job === id){
                    scope.texte_MatchReturn = episode.texte_MatchReturn;
                    scope.hasBackEpisode = episode.hasBackEpisode;
                    scope.accessible = episode.accessible;
                    scope.url = '#/retour?id='+episode.texte_MatchReturn;
                }

                if(episode.texte_MatchReturn == id && episode.hasBackEpisode) {
                    scope.texte_MatchReturn = episode.job;
                    scope.hasBackEpisode = episode.hasBackEpisode;
                    scope.accessible = episode.accessible;
                    scope.url = '#/details?id='+episode.job;
                }
            }

        }

        return {
            link: link,
            scope: {},
            restrict: 'E',
            templateUrl: 'app/directive/episodes.html'
        };
    }]);