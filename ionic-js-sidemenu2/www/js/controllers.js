angular.module('starter.controllers', [])

.controller('CreatenewCtrl', function ($scope, projectService) {


    //TODO find out mar ramp/soak cycles for PID controller
    var max = 8;
   
    //Form data for the create new data modal
    $scope.project = {};
    $scope.project.condition = [{ }]

    //CreateProject creates a project array with conditions
    $scope.createProject = function () {
        var project = $scope.project
        projectService.add(project)

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

.controller('StartnewCtrl', function ($scope, projectService) {
    //Shows list of created pre-programmed programs
    $scope.projects = projectService.getAll()

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {  
        $scope.projects = projectService.getAll()
            
    })


})

.controller('EditCtrl', function ($scope, $stateParams, projectService) {
    //TODO find out mar ramp/soak cycles for PID controller
    var max = 8;

    //Form data for the create new data modal
    $scope.project = projectService.getByid($stateParams.id);

    //CreateProject creates a project array with conditions
    $scope.createProject = function () {
        var project = $scope.project
        projectService.add(project)

        history.back()
    }

    $scope.addCondition = function () {
        if ($scope.project.condition.length < max) {
            $scope.project.condition.push({})
        }

    }

    $scope.removeCondition = function () {
        $scope.project.condition.pop()

    }

    $scope.back = function () {
        history.back()
    }
})

.factory('projectService', function () {
    var projects = localStorage.getItem("projects")
    if (projects == null) {
        projects = []
    }
    else {
        //Grabs string from database to convert to an array
        projects = JSON.parse(projects)
    }


    //Displays all Projects
    function getAll() {
        return projects
    }

    //Looks for project that matches function
    function getByid(id) {
        return projects.find(function (project) {
            return project.id == id
        })
    }

    function add(project) {
        if (project.id == null) {
            project.id = projects.length+1 
        }
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
        save()
    }

    //Save
    function save() {
        localStorage.setItem("projects", JSON.stringify(projects))
    }
    //Returing object of all functions
    return {
        getAll: getAll,
        getByid: getByid,
        add: add,
        save: save

    }
});