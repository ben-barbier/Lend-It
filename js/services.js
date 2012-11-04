'use strict';

/* Services */

angular.module('LendIt', ['ngResource']).
factory('Lend', function($resource){
	return $resource(server + ':P/services/lends/:action',{P: port, callback:"JSON_CALLBACK"},{
		get:{method:'JSONP', params:{action:'2'}},
		query:{method:'JSONP', params:{action:'list'}}, //List all
		save:{method:'POST'},
		remove:{method:'DELETE'}
	});
});
