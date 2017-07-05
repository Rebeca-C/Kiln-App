/////Managing Service for Program Edits and Saves
//angular.module('starter.services', [])

//.factory('projectService', function () {
//    var projects = JSON.parse(localStorage.getItem('projects'))

//    //Displays all Projects
//    function getAll() {
//        return projects
//    }

//    //Looks for project that matches function
//    function getByid(id) {
//        return projects.find(function (project) {
//            return project.id == id 
//        })
//    }

//    function add(project) {
//        //Looks though Projects array and returns project id, to prevent duplicates
//        var index = projects.findIndex(function (saveproject) {
//            return saveproject.id == project.id;
//        })

//        //Saves data or overwrite if it's a duplicate
//        if (index >= 0) {
//            projects[index] = project
//        }
//        else {
//            projects.push(project)
//        }

//        //Saves to local web storage
//        save()  
//    }

//    //Save
//    function save(){
//        localStorage.setItem("projects", JSON.stringify(projects))
//    }
//    //Returing object of all functions
//    return {
//        getAll: getAll,
//        getByid: getByid,
//        add:add,
//        save:save

//    }
//})