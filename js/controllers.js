'use strict';

/* Controllers */

/*-------------------*/
// var server = "http://127.0.0.1"; var port = ":8080";
   var server = "http://lend-it-back.herokuapp.com"; var port = "";
/*-------------------*/

function lendCtrl($scope, Lend) {
	
	$scope.initCtrl = function () {
		//TODO: see why INIT is launch 2 times
//		alert('init');
		$scope.lendList = Lend.query();
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
		
//		Lend.object = "OBJECT INSERT";
//		Lend.who = "WHO INSERT";
//		Lend.when = "12/12/2012";
		Lend.add();
//		Lend.save();
		
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
        $scope.lendList = Lend.query();
	};
	
};
