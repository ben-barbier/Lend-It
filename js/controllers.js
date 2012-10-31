'use strict';

/* Controllers */


function monCtrl($scope) {
    $scope.monModele = '';
    $scope.maMethode = function() {
        console.log($scope.monModele);
    };
};

function lendCtrl($scope) {
	
	$scope.lendList = {"lendList":[
	                               {"object":"DVD south park saison 1","when":"15/07/2012","lendID":1,"who":"Boby"},
	                               {"object":"CD bob marley","when":"20/09/2012","lendID":2,"who":"Alby"},
	                               {"object":"15 euros","when":"01/09/2012","lendID":3,"who":"Albator"},
	                               {"object":"Vélo","when":"04/04/2004","lendID":4,"who":"Bob Dylan"}]};
	
	
	$scope.l = function() {
		$.getJSON(server + "/services/lendList/get?callback=?", function (json) {
			$scope.lendList = json;
		});
	};
	
};