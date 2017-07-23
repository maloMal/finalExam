//Hello There friend, I need your help. Please write out the functionallity to get, write, update, and delete data. I know some(SOME??) of the routes have been written out. 
//Deleting and Updating should be by ID and after, I should be showing the get page. mainCtrl should also be empty. 
//To give you a hint, you have to make HTTP calls and I believe Angular has a module for that...I don't remember. 
//Please do not adjust the names of the controllers and the angular module. 
//I hate front end


angular.module("examApp.controllers", [])
    .controller("mainCtrl", function($scope){})
    .controller("getCtrl", function($scope, $http){
    $http.get("/index"){
        .then(function(resp){
            $scope.Get = resp.data;
        });
    }

    })
    .controller("postCtrl", function($scope, $http){
    $scope.Post = function(){
        
    }

    })
    .controller("updateCtrl", function($scope, $http){
    $scope.Edit = function(){
        
    }
    
    $scope.Delete = function(){
        $http.put('')
    }

    })
//    .controller("deleteCtrl", function(){
//    probably not needed. Update can delete or edit. 
//})