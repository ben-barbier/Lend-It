'use strict';

/* Services */

angular.module('lendServices', ['ngResource']).
	factory('Lend', function($resource){
		return $resource('lends/:lendId.json', {}, {
			query: {
				method:'GET', 
				params:{lendId:'lends'}, 
				isArray:true}
		});
	});