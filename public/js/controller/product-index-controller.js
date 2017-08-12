(function(){angular.module("Store")
	.controller('ProductIndexController', ['$http', '$routeParams', 'CartService', function($http, $routeParams, CartService){
		var controller = this;
		$http({method: 'GET', url: 'https://api.mlab.com/api/1/databases/foostudios/collections/artwork/' + $routeParams.id +'?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT'})
			.success(function(data) {
 				controller.product = data;
 				console.log(data);
 				console.log($routeParams.id);
 				console.log(data.param.name);
 				console.log(controller);

				CartService.cartItem = {
					"param" : {
						'name': data.param.name,
						'price': data.param.price,
	          'thumbnail':data.param.thumbnail,
	          'description':data.param.description,
	          'main':data.param.main,
	          'incart':true
					}
				};

				CartService.id = $routeParams.id;


 			});
	}]);

})();
