(function(){angular.module("Store")
	.controller('CartController', ['$http','CartService', function($http, CartService){
    console.log(CartService.cartItem);

		CartService.cartItem.param.incart = true;
		console.log(CartService.cartItem);

		$.ajax({
			url: "https://api.mlab.com/api/1/databases/foostudios/collections/artwork/" + CartService.id + "?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT",
		  data: JSON.stringify( { "$set" :  CartService.cartItem }),
		  type: "PUT",
		  contentType: "application/json" } );
			console.log('in controller');

	}]);

})();



// Useless code
		// $.ajax({ url: "https://api.mlab.com/api/1/databases/foostudios/collections/artwork/598d1891bd966f43384f3dc8?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT",
		//   data: JSON.stringify( { "$set" : {
		// 		"param" : {
		// 			"incart": true
		// 		} } }),
		//   type: "PUT",
		//   contentType: "application/json" } );
		// 	console.log('in controller');

		// $http.put('https://api.mlab.com/api/1/databases/foostudios/collections/artwork/598d1962c2ef162753866dfe?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT', cartValue)
		// 	.success(function(data) {
		// 		console.log(data);
		// 		console.log("Blah BLah");
		// 	})
		// 	.error(function (data, status, header, config) {
		// 		console.log('failed you foo');
    //   });
