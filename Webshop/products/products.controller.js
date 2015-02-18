(function(){
     "use strict";

     angular
          .module("Main.products", [])
          .controller('productsController', productsController);

          function productsController($scope, $rootScope, productsService, cartService){

              $scope.test = "Hej";
               
               var modelProducts = function(data){
                    $scope.products = data;
               }

               var modelCategories = function(data){
                    $scope.categories = data;
               }

               // var getCategoriesSelected = function(){
               //     return categoriesSelected;
               // }

                $scope.addToCart = function(product, quantity){
                    var quantity = this.quantity;
                  if ($rootScope.cartProducts[product.name]){
                         $rootScope.cartProducts[product.name]['quantity'] += quantity;
                  }
                  else {
                  
                  cartService.addProductToCart(product, quantity);
                  }
               }

          //      $scope.categoryChange = function(category){
          //      var i = $scope.categoriesSelected.indexOf(category);
          //      if(i > -1){
          //           $scope.categoriesSelected.splice(i, 1);
          //      }
          //      else{
          //           $scope.categoriesSelected.push(category);
          //      }
          // }

          // $scope.categoryFilter = function(product){
          //      if($scope.categoriesSelected.length > 0){
          //           if($scope.categoriesSelected.indexOf(product.category) < 0){
          //                return;
          //           }
          //      }
          //      return product;
          // }

          productsService.getProducts()
               .then(modelProducts);

          productsService.getCategories()
               .then(modelCategories);
          }         


          var updateCategoriesSelected = function(){
               $scope.categoriesSelected = productsService.getCategoriesSelected();
          }

          $scope.productFilter = function(product){
               return productsService.productFilter(product);
          }

          $scope.categoryChange = function(category){
               productsService.categoryChange(category);
               updateCategoriesSelected();
          }

          updateCategoriesSelected();


}());