'use strict';

/* Controllers */

/*-------------------*/
// var server = 'http://localhost:8080';
   var server = 'http://lend-it-back.herokuapp.com';
/*-------------------*/

function lendCtrl($scope, $http) {
	$http.jsonp(server + '/services/lends/list?callback=JSON_CALLBACK').success(function(data) {
		$scope.lendList = data;
	});
	$scope.showEditLendModal = function($lendId) {
		$('#editLendModal-' + $lendId).modal();
	};
	$scope.showDeleteLendModal = function($lendId) {
		$('#deleteLendModal-' + $lendId).modal();
	};
	$scope.addLend = function() {
		$('#addLendSuccess').fadeIn();
	};
	$scope.editLend = function($lendId) {
        $('#editLendModal-' + $lendId).modal('hide');
        // Delete action...
        $('#editLendSuccess').fadeIn();
	};
	$scope.deleteLend = function($lendId) {
        $('#deleteLendModal-' + $lendId).modal('hide');
        // Delete action...
        $('#deleteLendSuccess').fadeIn();
	};
};