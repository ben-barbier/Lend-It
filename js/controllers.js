'use strict';

/* Controllers */

function lendCtrl($scope, Lend) {

	var infoDisplayTime = 5000; 
	
	$scope.initCtrl = function () {
		$scope.lendList = Lend.query();
		$('#inputWhenAdd').datepicker().on('changeDate', function(ev){
			$scope.newWhen = ev.date.valueOf();
		});
		$('#inputWhenEdit').datepicker().on('changeDate', function(ev){
			$scope.selectedWhen = ev.date.valueOf();
		});
	};
	
	$scope.lendList = new Array();
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
		Lend.add({object:$scope.newWhat,who:$scope.newWho,when:$scope.newWhen}, function(res) {
			$('#addLendSuccess').fadeIn().delay(infoDisplayTime).fadeOut();
			$scope.lendList = Lend.query();
			$scope.newWhat = '';
			$scope.newWho  = '';
			$scope.newWhen = '';
		});
	};
	$scope.editLend = function() {
		Lend.save({lendId:$scope.selectedLendId,object:$scope.selectedWhat,who:$scope.selectedWho,when:$scope.selectedWhen}, function(res) {
			$('#editLendModal').modal('hide');
			$('#editLendSuccess').fadeIn().delay(infoDisplayTime).fadeOut();;
			$scope.lendList = Lend.query();
		});
	};
	$scope.deleteLend = function($lendId) {
		Lend.remove({lendId:$lendId}, function(res) {
			$('#deleteLendModal').modal('hide');
			$('#deleteLendSuccess').fadeIn().delay(infoDisplayTime).fadeOut();;
			$scope.lendList = Lend.query();
		});
	};
	
};
