var app = angular.module('personal_website_app', []);

app.controller('peronal_website_controller',function($scope,$http){
	$scope.insertHighScoreData = function(){
		var highScoreData = JSON.stringify({'game':$scope.game, 'initials':$scope.initials, 'score':$scope.score});
		console.log("game: " + $scope.game);
		console.log("initials: " + $scope.initials);
		console.log("score: " + $scope.score);
		$http.post("insertHighScoreData.php",highScoreData)
	.success(function(data,status,headers,config){
		console.log("data inserted successfully");
	});
	}
});
