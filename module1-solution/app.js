angular.module("LunchCheck",[])
.controller("LunchCheckController",LCC);
LCC.$inject=['$scope'];
function LCC($scope)
{
  $scope.message="";
  $scope.items="";

  $scope.func=function(){
    var count=0;
    list_of_items=$scope.items.split(",");
    count=list_of_items.length;
    if(count==1 && list_of_items[0]=='')
       $scope.message="Please enter data first";
    else
    if(count<=3)
      $scope.message="Enjoy!";
    else if(count>3)
      $scope.message="Too Much!";


  }
}
