//Store Object
(function(){angular.module("Store")
	.controller('ProductsIndexController', ['$http', function($http){
		var shop = this;
		shop.products= [];
			$http.get('https://api.mlab.com/api/1/databases/foostudios/collections/artwork?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT')
			.success(function(data) {
				shop.products = data;
				console.log(data);
			});
	}]);
})();
