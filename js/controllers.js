'use strict';

/* Controllers */


function monCtrl($scope) {
    $scope.monModele = '';
    $scope.maMethode = function() {
        console.log($scope.monModele);
    };
};

function lendCtrl($scope, $http) {
	$http.jsonp('http://lend-it-back.herokuapp.com/services/lends/list?callback=JSON_CALLBACK').success(function(data) {
		$scope.lendList = data;
	});
	$scope.editLend = function($lendId) {
		alert('edit: ' + $lendId);
		$('#editLendModal-' + $lendId).modal();
	};
	$scope.deleteLend = function($lendId) {
		alert('delete: ' + $lendId);
		$('#deleteLendModal-' + $lendId).modal();
	};
};