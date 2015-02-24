(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, $rootScope, productsService, $routeParams, cartService){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];

		}

		$scope.addToCart = function(product, quantity){
                    var quantity = this.quantity;
                    console.log(product)
                  if ($rootScope.cartProducts[product.name]){
                         $rootScope.cartProducts[product.name]['quantity'] += quantity;
                  }
                  else {
                  
                  cartService.addProductToCart(product, quantity);
                  }
               }

		productsService.getProduct($routeParams.id)
			.then(modelProduct);
	}

}());