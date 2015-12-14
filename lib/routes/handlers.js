(function(){

'use strict'
	
	var handlers = {};

    var CrowdClient = require('atlassian-crowd-client');
        
    handlers.authenticateuser =  function(request, reply){
        
        // Initialize the Crowd client:
        var crowd = new CrowdClient({
            baseUrl: 'url',
            application: {
                name: 'name',
                password: 'password'
            },
            sessionTimeout: 100000, // Let the crowd setting be used by setting a value that's way too big. 
            options: {
                rejectUnauthorized: false,
                timeout: 30000 // ms
            }
        });
       
        crowd.authentication.authenticate("z", "z").then(function (response) {
            reply(response.email);
        }).catch(function (err) {
            reply(err.message);
        });		
    };
    
        module.exports = handlers;
    
})();