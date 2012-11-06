'use strict';

/* Services */

angular.module('LendIt', ['ngResource'], function($routeProvider) {
	
	$routeProvider.when('/Home', {templateUrl: 'home.html'});
	$routeProvider.when('/Lend', {templateUrl: 'lend.html', controller: lendCtrl});
	$routeProvider.when('/Loan', {templateUrl: 'loan.html'});
	$routeProvider.when('/About', {templateUrl: 'about.html'});
	$routeProvider.otherwise({redirectTo: '/Home'});
	
}).factory('Lend', function($resource){
	return $resource(server + ':P/services/lends/:method/:action',{P: port, callback:"JSON_CALLBACK"},{
		get:{method:'JSONP'}, // params:{action:'2'}
		list:{method:'JSONP'}, // List all -> No params
		update:{method:'JSONP', params:{method:'update'}},
		insert:{method:'JSONP', params:{method:'insert'}},
		remove:{method:'JSONP', params:{method:'delete'}}
	});
});

// JSONP -> HTTP GET method...
