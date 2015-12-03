
var handlers = require('./handlers');

var routes = [
    {
		path: '/{path*}',
		method: 'GET',
		handler: {
			directory: {
				path: './lib/public',
				listing: false
			}
		}
	},
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            //this is what i want to do for my home page:  render my index.html page and pass in some data to it
            var data = {
                title: 'Authenticate through Crowd',
                message: 'This will simply validate your NT info using Crowd'
            };

            return reply.view('index', data);
        }
    },
    {
        method: 'GET',
        path: '/validate',
        handler: handlers.authenticateuser
        
    }
];

//let's make the routes available to the server
module.exports = routes;