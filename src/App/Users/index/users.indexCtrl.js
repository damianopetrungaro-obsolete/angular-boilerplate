(function() {

  'use strict';

    // Pass the usersIndexCtrl to the app
    angular
        .module('app')
        .controller('usersIndexCtrl', usersIndexCtrl);


    // Inject dependecies in the usersIndexCtrl
    usersIndexCtrl.$inject = ['usersFactory'];

    
    // Define the usersIndexCtrl
    function usersIndexCtrl(usersFactory) {


        // Define usersIndex as this for ControllerAs and auto-$scope
        var usersIndex = this;


        // Define the usersIndex functions that will be passed to the view
        usersIndex.users = [];                                              // Array for list of users


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        index()

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersIndexCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersIndexCtrl init');
        }


        // Get all users.
        function index() {

            return usersFactory.index().then(function(data) {

            	// Assign data to array and return them
	            usersFactory.users = data.data;
                console.log('utenti', usersFactory.users);
	            return usersIndex.users;

            }, function(data) {

            	// Custom function for error handling
                console.log('Errore: ',data);

            });
        };
    }

})();
