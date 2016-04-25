angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		friendService.login(user).then(function( response ) {
			if (response.data.friends) {
				$location.path('/profile');
			} else {
				alert("No user!");
			}
		});
	};

});
