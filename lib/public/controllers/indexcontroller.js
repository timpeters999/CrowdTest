//this will add IndexController to the ThisApp angular app.
(function () {
    'use strict';
    
    var app= angular.module('ThisApp');
    app.controller('IndexController', function ($http) {
        
        this.authenticate = function() {
            //this.thisiswhatyoutyped = this.username + " + " + this.password;
           
            $http({
                url: '/validate',
                method: "POST",
                data: { 'username' : this.username, 'password': this.password }
            }).success(function(response) {
                alert(response);
            
            });   
        };
    });
 
}());