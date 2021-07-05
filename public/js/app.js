angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello there hope everything is fine with you';

    this.people = [
        { name: 'Rudolph Reindeer'      },
        { name: 'Tree Trunks'           },
        { name: 'Mr. Potato Roosevelt'  }
    ]; 
}