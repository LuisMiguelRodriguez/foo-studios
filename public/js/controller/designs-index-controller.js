//Store Object
(function(){angular.module("Store")
	.controller('DesignsIndexController', ['$http', function($http){
		var designStudio = this;
		designStudio.designs= [];
			$http.get('https://api.mlab.com/api/1/databases/foostudios/collections/artwork?apiKey=6LbeBBCgh5azm84Rz5dQejCJv0h4iiRT')
			.success(function(data) {
				designStudio.designs = data;
				console.log(data);
			});
	}]);
})();
