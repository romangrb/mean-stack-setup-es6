import { default as controllersModuleName } from './controllers/app_controllers';

function config($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'templates/home.html',
      controller:'meanEs6App.homeController',
      controllerAs:'homeVm'
    })
    .otherwise({redirectTo:'/'});
}

config.$inject = ['$routeProvider'];

var moduleName = 'meanEs6App';

angular
    .module(moduleName, [
        'ngRoute',
        controllersModuleName
    ])
    .config(config);

export default moduleName;