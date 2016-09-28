export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('sign_in', {
      url: '/',
      controller: 'sign_in',
      controllerAs: 'signinCtrl',
      templateUrl: "app/sign_in/sign_in.html"
    })
    .state('sign_up', {
      url: '/sign_up',
      controller: 'sign_up',
      controllerAs: 'signupCtrl',
      templateUrl: 'app/sign_up/sign_up.html'
    })
}
