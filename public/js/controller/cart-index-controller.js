// (function(){angular.module("Store")
// 	.controller('CartController', ['$http','CartService','ngCart', function($http, CartService, ngCart){
//
// 		// CartService.cartItem.param.incart = true;
// 		var item = CartService.cartItem;
//
// 		// $.ajax({
// 		// 	url: "https://api.mlab.com/api/1/databases/foostudios/collections/artwork/" + CartService.id + "?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT",
// 		//   data: JSON.stringify( { "$set" :  CartService.cartItem }),
// 		//   type: "PUT",
// 		//   contentType: "application/json" } );
// 		// 	console.log('in controller');
//
// 			// $http.get('https://api.mlab.com/api/1/databases/foostudios/collections/artwork?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT')
// 			// 	.success(function(data) {
// 			// 		console.log(data);
// 			// 		console.log("in get request car controller");
// 			// 	});
//
//
// 			$http.post('https://api.mlab.com/api/1/databases/foostudios/collections/cart?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT',
// 			{item});
//
// 			var items = this;
// 			items.products = [];
//
// 			$http.get('https://api.mlab.com/api/1/databases/foostudios/collections/cart?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT')
// 				.success(function(data){
// 					CartService.shoppingCart = data;
// 					console.log(data);
// 					items.products = CartService.shoppingCart;
// 					console.log('Cart Service ' + items.products);
// 				});
//
//
// 	}]);
//
// })();
//
// // "param": {"name": 0,"price": 0,"thumbnail": 0,"description": 0,"main": 0,"incart": 1}
//
// // Useless code
// 		// $.ajax({ url: "https://api.mlab.com/api/1/databases/foostudios/collections/artwork/598d1891bd966f43384f3dc8?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT",
// 		//   data: JSON.stringify( { "$set" : {
// 		// 		"param" : {
// 		// 			"incart": true
// 		// 		} } }),
// 		//   type: "PUT",
// 		//   contentType: "application/json" } );
// 		// 	console.log('in controller');
//
// 		// $http.put('https://api.mlab.com/api/1/databases/foostudios/collections/artwork/598d1962c2ef162753866dfe?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT', cartValue)
// 		// 	.success(function(data) {
// 		// 		console.log(data);
// 		// 		console.log("Blah BLah");
// 		// 	})
// 		// 	.error(function (data, status, header, config) {
// 		// 		console.log('failed you foo');
//     //   });
