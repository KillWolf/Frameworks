(function(){
	"use strict";

	var productsService = function($http) {

		var getProducts = function() {
			return $http.get("data/products.json")
				.then(function(response){
					return response.data;
				})

		}

		return {
			getProducts: getProducts;
		}
	}

	angular
		.module("Main")
		.factory("productsService", productsService);
})();