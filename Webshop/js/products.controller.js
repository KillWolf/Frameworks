(function(){
	"use strict";

     angular
     	.module("Main.products",[])
     	.controller("productsController", productsController);

     function productsController($scope, productsService, cartService){
     	
     	var modelProducts = function(data) {
     		$scope.products = data;
     	}

     	$scope.addToCart = function(product) {
     		var quantity = this.quantity;
     		cartService.addProductToCart(product, quantity);
     	}

     	productsService.getProduct()
     		.then(modelProducts);	

     }

     	

})();