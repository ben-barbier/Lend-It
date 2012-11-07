'use strict';

/* Controllers */

/*-------------------*/
// var server = "http://127.0.0.1"; var port = ":8080";
   var server = "http://lend-it-back.herokuapp.com"; var port = "";
/*-------------------*/

function lendCtrl($scope, Lend) {
	
	$('.datepicker').datepicker();
	
	$scope.lendList = Lend.list();
	
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
		// Edit action...
        $('#editLendModal-' + $lendId).modal('hide');
        $('#editLendSuccess').fadeIn();
	};
	$scope.deleteLend = function($lendId) {
		Lend.remove({action:$lendId});
        $('#deleteLendModal-' + $lendId).modal('hide');
        $('#deleteLendSuccess').fadeIn();
//        $scope.lendList = Lend.list();
//        $scope.lendList.$apply;
	};
	
};