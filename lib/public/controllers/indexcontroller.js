//this will add IndexController to the ThisApp angular app.
(function () {
    'use strict';
    
    var app= angular.module('ThisApp');
    app.controller('IndexController', function ($http) {
        
        this.authenticate = function() {
            this.thisiswhatyoutyped = this.username + " + " + this.password;
            
            $http.get("/validate").success(function(response) {
               
            });
            
        };
        
        
    
    });
 
}());