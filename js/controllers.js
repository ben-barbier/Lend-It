'use strict';

/* Controllers */

/*-------------------*/
// var server = "http://127.0.0.1"; var port = ":8080";
   var server = "http://lend-it-back.herokuapp.com"; var port = "";
/*-------------------*/

function lendCtrl($scope, Lend) {
	
	$scope.initCtrl = function () {
		$scope.lendList = Lend.list();
		$('.datepicker').datepicker();
	};
	
	$scope.lendList = [];
	$scope.newWhat = '';
	$scope.newWho  = '';
	$scope.newWhen = '';
	$scope.selectedLendId = '';
	$scope.selectedWho  = '';
	$scope.selectedWhat = '';
	$scope.selectedWhen = '';
	
	$scope.showEditLendModal = function($lendId, $who, $what, $when) {
		$scope.selectedLendId = $lendId;
		$scope.selectedWho  = $who;
		$scope.selectedWhat = $what;
		$scope.selectedWhen = $when;
		$('#editLendModal').modal();
	};
	$scope.showDeleteLendModal = function($lendId, $who, $what, $when) {
		$scope.selectedLendId = $lendId;
		$scope.selectedWho  = $who;
		$scope.selectedWhat = $what;
		$scope.selectedWhen = $when;
		$('#deleteLendModal').modal();
	};
	$scope.addLend = function() {
		$('#addLendSuccess').fadeIn();
	};
	$scope.editLend = function($lendId) {
		// Edit action...
        $('#editLendModal').modal('hide');
        $('#editLendSuccess').fadeIn();
	};
	$scope.deleteLend = function($lendId) {
		Lend.remove({action:$lendId});
        $('#deleteLendModal').modal('hide');
        $('#deleteLendSuccess').fadeIn();
        $scope.lendList = Lend.list();
	};
	
};
