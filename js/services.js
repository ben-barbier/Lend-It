'use strict';

/* Services */

angular.module('LendIt', ['ngResource'], function($routeProvider) {
	
	$routeProvider.when('/Home', {templateUrl: 'home.html'});
	$routeProvider.when('/Lend', {templateUrl: 'lend.html', controller: lendCtrl});
	$routeProvider.when('/Loan', {templateUrl: 'loan.html'});
	$routeProvider.when('/About', {templateUrl: 'about.html'});
	$routeProvider.otherwise({redirectTo: '/Home'});
	
	// configure html5 to get links working on jsfiddle
	//$locationProvider.html5Mode(true);
	
}).factory('Lend', function($resource){
	return $resource(server + ':P/services/lends/:lendId',{P: port},{
		get:{method:'GET'}, // params:{lendId:'2'}
		query:{method:'GET'}, // List all -> no params
		save:{method:'POST'},
		add:{method:'PUT'},
		remove:{method:'DELETE'} // params:{lendId:'2'}
	});
});

// JSONP -> HTTP GET method...
