angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ListCtrl', function($scope) {
	
$http.get('http://app-salvadorcaetano.rhcloud.com/teste.php?jsoncallback').
  success(function(data, status, headers, config) {
	  $scope.items = [{item: data}];
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
	console.log("ERRO");
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  
})

 .controller('PerfilCtrl', function ($scope) {
	$scope.PerfilnavTitle = 'PERFIL <span class="navbar-right"><i class=" icon ion-person"></i></span>'; 
})

 .controller('InicioCtrl', function ($scope) {
	$scope.InicionavTitle = 'Início <span class="navbar-right"><i class=" icon ion-home"></i></span>'; 
})

 .controller('DefinicoesCtrl', function ($scope) {
	$scope.DefinicoesnavTitle = 'Definições <span class="navbar-right"><i class=" icon ion-gear-b"></i></span>'; 
})

 .controller('ContactosCtrl', function ($scope) {
	$scope.ContactosnavTitle = 'Contactos <span class="navbar-right"><i class=" icon ion-ios-telephone"></i></span>'; 
})