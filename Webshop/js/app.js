(function () {

	"use strict";

	angular
		.module("Main", [])
		.controller("MainController", MainController);

		function MainController($scope, $http) {

		$scope.categoriesSelected = new Array ();

		var getProducts = function(response) {

			$scope.products = response.data;
		}

		var getCategories = function(response) {
			$scope.categories = response.data;
		}

		var getError = function(reason) {

			$scope.error = "Something happened with the data";

		}

		$scope.categoryChange = function(category) {

			var i = $scope.categoriesSelected.indexOf(category);
			if(i > -1) {
				$scope.categoriesSelected.splice(i, 1);

			}
			else {
			$scope.categoriesSelected.push(category);
			}
			
		}

		$scope.cart = []
        
      
      
      $scope.addToCart = function(product){

         $scope.cart.push(product);

      }



		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0) {
			  	if($scope.categoriesSelected.indexOf(product.category) < 0){
			  	    return;
			  	}
			}
			return product;
		}
		

		$http.get("data/products.json")
			.then(getProducts, getError);

		$http.get("data/categories.json")
			.then(getCategories, getError);
	}



})();