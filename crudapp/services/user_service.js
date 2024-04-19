angular.module('myApp').service('ContactService', function () {
    var id=1
    users = []
    this.list = function () {
        return users
    }
    this.save=function(user){
        user.id=id++
        users.push(user)
    }
})
