import HomeController from './home_controller';

var moduleName='meanEs6App.controllers';

angular
    .module(moduleName, [])
    .controller('meanEs6App.homeController', HomeController);

export default moduleName;