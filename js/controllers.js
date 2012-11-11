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
		Lend.add({object:$scope.newWhat,who:$scope.newWho,when:$scope.newWhen});
		$('#addLendSuccess').fadeIn();
	};
	$scope.editLend = function() {
		$('#editLendModal').modal('hide');
		Lend.save({lendId:$scope.selectedLendId,object:$scope.selectedWhat,who:$scope.selectedWho,when:$scope.selectedWhen});
        $('#editLendSuccess').fadeIn();
	};
	$scope.deleteLend = function($lendId) {
		Lend.remove({lendId:$lendId});
        $('#deleteLendModal').modal('hide');
        $('#deleteLendSuccess').fadeIn();
        $scope.lendList = Lend.query();
	};
	
};
