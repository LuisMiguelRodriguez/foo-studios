(function(){
//Form
angular.module("Store")
	.controller('ProductsFormController',['$http', function($http){
		this.form = {};
		this.addProduct = function() {			
			$http.post('https://api.mlab.com/api/1/databases/foostudios/collections/artwork?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT', 
			{ param: this.form });
			this.form = {};
		}
	}]);
	
})();