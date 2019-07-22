var app=angular.module("MyApp",[])
app.controller("MyCtrl",function($scope,$rootScope){
    
    $rootScope.sindex=null;
    $scope.employee=employees;

   
    $scope.view = function (index) {
        
        var EId = $scope.employee[index].eId;
        var name = $scope.employee[index].name;
        var sal = $scope.employee[index].sal;
        alert("eId: " + EId + "\nName: " + name + "salary:" +sal);
    };
    $scope.delete = function (index) {
        $scope.employee.splice(index, 1 );
        }
    $scope.submit=function() 
        {
            var emp={}
            emp.eId=$scope.eId;
            emp.name=$scope.name;
            emp.sal=$scope.sal;
            $scope.employee.push(emp)
        }
        $scope.save=function(){

            $scope.employee[$rootScope.sindex].eId=$scope.EID;
            $scope.employee[$rootScope.sindex].name=$scope.NAME;
            $scope.employee[$rootScope.sindex].sal=$scope.SAL;
        }
         $scope.edit=function(index)
         {
            $rootScope.sindex=index;
            $scope.EID=$scope.employee[index].eId
            $scope.NAME= $scope.employee[index].name
            $scope.SAL=$scope.employee[index].sal
         }   
         $scope.filter1=function(Salary)
         {
            
            $scope.sort=Salary;
         }   
         $scope.filter1=function(Salary)
         {
            
            $scope.sort=Salary;
         }   
    

    
})
