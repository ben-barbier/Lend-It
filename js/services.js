'use strict';

/* Services */

angular.module('LendIt', ['ngResource']).
factory('Lend', function($resource){
	return $resource(server + ':P/services/lends/:method/:action',{P: port, callback:"JSON_CALLBACK"},{
		get:{method:'JSONP'}, // params:{action:'2'}
		list:{method:'JSONP'}, // List all -> No params
		update:{method:'JSONP', params:{method:'update'}},
		insert:{method:'JSONP', params:{method:'insert'}},
		remove:{method:'JSONP', params:{method:'delete'}}
	});
});

// JSONP -> HTTP GET method...
