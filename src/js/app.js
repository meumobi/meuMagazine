angular.module('MeuMagazine', [
  'ngRoute',
  'mobile-angular-ui',
  'MeuMagazine.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});