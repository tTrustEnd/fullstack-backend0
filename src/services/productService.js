const Project = require('../models/project')

const createProject = async (data) => {
    if (data.type === "empty_project") {
        let result = Project.create(data)
        return result
    }
    if (data.type === "add-users") {
        let projects = await Project.findById(data.projectsId)
        for(let i = 0 ; i < data.userId.length ; i++ ){
            projects.usersInfor.push(data.userId[i]);
        }
        let newproject = await projects.save()
        return newproject;

    }
    return null;
}
module.exports = {
    createProject
}