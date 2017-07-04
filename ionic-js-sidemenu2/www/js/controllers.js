angular.module('starter.controllers', [])

.controller('CreatenewCtrl', function ($scope, $ionicModal, $timeout) {


    //TODO find out mar ramp/soak cycles for PID controller
    var max = 8;
    var projects = localStorage.getItem("projects")
    if (projects == null) {
        projects = []
    }
    else {
        //Grabs string from database to convert to an array
        projects = JSON.parse(projects)
    }

    //Form data for the create new data modal
    $scope.project = {};
    $scope.project.id = projects.length + 1;
    $scope.project.condition = [{
        temperature: "",
        rampspeed: "",
        time: ""
    }]

    //CreateProject creates a project array with conditions
    $scope.createProject = function () {
        var project = $scope.project
        //Looks though Projects array and returns project id, to prevent duplicates
        var index = projects.findIndex(function (saveproject) {
            return saveproject.id == project.id;
        })

        //Saves data or overwrite if it's a duplicate
        if (index >= 0) {
            projects[index] = project
        }
        else {
            projects.push(project)
        }

        //Saves to local web storage
        localStorage.setItem("projects", JSON.stringify(projects))

        history.back()
    }

    $scope.addCondition = function () { 
        if ($scope.project.condition.length < max ) {
            $scope.project.condition.push({})
        }

    }

    $scope.removeCondition = function () {
        $scope.project.condition.pop()

    }

    $scope.back = function() {
        history.back()
    }

})

.controller('StartnewCtrl', function ($scope, $ionicModal, $timeout) {
    //Shows list of created pre-programmed programs
    $scope.projects = JSON.parse(localStorage.getItem('projects'))

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {  
        $scope.projects = JSON.parse(localStorage.getItem('projects'))
            
    })


});