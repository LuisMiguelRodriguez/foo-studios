(function(){angular.module("Store")
	.controller('ProductIndexController', ['$http', '$routeParams', function($http, $routeParams){
		var controller = this;
		$http({method: 'GET', url: 'https://api.mlab.com/api/1/databases/foostudios/collections/artwork/' + $routeParams.id +'?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT'})
			.success(function(data) {
 				controller.product = data;
 				console.log(data);
 				console.log($routeParams.id);
 				console.log(data.param.name);
 				console.log(controller);
 			});
	}]);

})();