angular.module('introAng', []);

angular.module('introAng')

angular.module('introAng')
	.controller('mainController', ['$scope', function($scope){
		
		$scope.message = "You clicked the button.";
		$scope.bodyMessage = false;
		$scope.list = false;
		$scope.colorChange = {one: false, two:false, three:false };
		

		$scope.userName = '';

		$scope.buttonClick = function(){
			$scope.bodyMessage = true;
			console.log($scope.message)
		};
		$scope.listClick = function(){
			$scope.list = true;
		};
		
		$scope.hover = function(obj, prop){
			obj[prop] = !obj[prop];
			// console.log(prop, "  ",obj[prop]);
		};

        $scope.colorChange.one.titleClick = function(event){
            console.log('!!!', event.target)
            $scope.userName += '!'
        }
        $scope.myFunc = function(input){
        	if(input === 'one')
        	console.log(input)
        }



        $scope.clickConfirm = function(event){
        	if(!confirm("Are you sure you want to leave?")){
        		event.preventDefault()
        		$scope.linkHide = true;
        	}
        }

	}]);

var mainControllerFunc = function($scope){

}
