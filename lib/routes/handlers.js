(function(){

'use strict'
	
	var handlers = {};
	
	var AtlassianCrowd = require('atlassian-crowd');
    
    var CrowdClient = require('atlassian-crowd-client');
    var User = require('atlassian-crowd-client/lib/models/user');
    var _ = require('lodash') 
        
    
    handlers.authenticateuser =  function(request, reply){
                
    // Initialize the Crowd client:
    var crowd = new CrowdClient({
        baseUrl: 'baseurl',
        application: {
            name: 'appname',
            password: 'apppassword'
        },
        sessionTimeout: 100000, // Let the crowd setting be used by setting a value that's way too big.
        options: {
            rejectUnauthorized: false,
            timeout: 30000 // ms
        }
    });
        
    crowd.authentication.authenticate("sad", "sdsd");
        
	   reply('test');
		
	};
 
	module.exports = handlers;
    
    })();