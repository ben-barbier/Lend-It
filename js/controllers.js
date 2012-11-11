'use strict';

/* Controllers */

function lendCtrl($scope, Lend) {
	
	$scope.initCtrl = function () {
		//TODO: see why INIT is launch 2 times
//		alert('init');
		$scope.lendList = Lend.query();
		$('#inputWhenAdd').datepicker().on('changeDate', function(ev){
			$scope.newWhen = ev.date.valueOf();
		});
		$('#inputWhenEdit').datepicker().on('changeDate', function(ev){
			$scope.selectedWhen = ev.date.valueOf();
		});
	};
	
	$scope.lendList = [];
	$scope.newWhat = '';
	$scope.newWho  = '';
	$scope.newWhen = '';
	$scope.selectedLendId = '';
	$scope.selectedWho  = '';
	$scope.selectedWhat = '';
	$scope.selectedWhen = '';
	
	$scope.showEditLendModal = function($lendId, $what, $who, $when) {
		$scope.selectedLendId = $lendId;
		$scope.selectedWho  = $who;
		$scope.selectedWhat = $what;
		$scope.selectedWhen = $when;
		$('#editLendModal').modal();
	};
	$scope.showDeleteLendModal = function($lendId, $what, $who, $when) {
		$scope.selectedLendId = $lendId;
		$scope.selectedWho  = $who;
		$scope.selectedWhat = $what;
		$scope.selectedWhen = $when;
		$('#deleteLendModal').modal();
	};
	$scope.addLend = function() {
		Lend.add({object:$scope.newWhat,who:$scope.newWho,when:$scope.newWhen});
		$('#addLendSuccess').fadeIn();
		$scope.lendList = Lend.query();
	};
	$scope.editLend = function() {
		$('#editLendModal').modal('hide');
		Lend.save({lendId:$scope.selectedLendId,object:$scope.selectedWhat,who:$scope.selectedWho,when:$scope.selectedWhen});
        $('#editLendSuccess').fadeIn();
        $scope.lendList = Lend.query();
	};
	$scope.deleteLend = function($lendId) {
		$('#deleteLendModal').modal('hide');
		Lend.remove({lendId:$lendId});
        $('#deleteLendSuccess').fadeIn();
        $scope.lendList = Lend.query();
	};
	
};
