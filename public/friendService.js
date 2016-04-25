angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      console.log(user);
      return $http.post('/api/login', JSON.stringify(user));
    },

    getFriends: function() {
    	return $http.get('/api/profiles');
    }
  };
});
