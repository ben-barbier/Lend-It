'use strict';

/* Controllers */

/*-------------------*/
// var server = 'http://localhost:8080';
   var server = 'http://lend-it-back.herokuapp.com';
/*-------------------*/

function lendCtrl($scope, $resource) {
	
	$scope.lend = $resource(server + '/services/lends/list',
		{action:'test', callback:"JSON_CALLBACK"},
		{get:{method:'JSONP'}});
	
	$scope.lendList = $scope.lend.get();
	
	$scope.newWhat = '';
	$scope.newWho  = '';
	$scope.newWhen = '';
	
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