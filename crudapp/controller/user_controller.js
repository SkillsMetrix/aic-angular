angular.module('myApp').controller('contactController', [
    '$scope', 'ContactService', function ($scope, ContactService) {


        $scope.users = ContactService.list()

        $scope.saveUser= function(){
        ContactService.save($scope.user)
        $scope.user={}
        }
    }

    
])
