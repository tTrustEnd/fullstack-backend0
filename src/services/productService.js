const Project = require('../models/project')
const aqp = require('api-query-params');

const createProject = async (data) => {
    if (data.type === "empty_project") {
        let result = Project.create(data)
        return result
    }
    if (data.type === "add-users") {
        let projects = await Project.findById(data.projectsId)
        for (let i = 0; i < data.userId.length; i++) {
            projects.usersInfor.push(data.userId[i]);
        }
        let newproject = await projects.save()
        return newproject;

    }
    if (data.type === "remove-users") {
        let projects = await Project.findById(data.projectsId)
        for (let i = 0; i < data.userId.length; i++) {
            projects.usersInfor.pull(data.userId[i]);
        }
        let newproject = await projects.save()
        return newproject;

    }
    if (data.type === "add-tasks") {
        let projects = await Project.findById(data.projectsId)
        for (let i = 0; i < data.tasksId.length; i++) {
            projects.tasks.push(data.tasksId[i]);
        }
        let newproject = await projects.save()
        return newproject;

    }
    return null;
}
const getProjectService = async (queryString) => {
    let page = queryString.page
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Project.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();

    return result
}
const deleteProjectService = async (id) => {
    try {
        let result = await Project.deleteById(id)
        return result
    }
    catch (error) {
        console.log('error:', error)
    }
}
const updateProjects = async (id, data) => {
    try {
        let result = await Project.updateOne({ id: id }, data)
        return result;
    } catch (error) {
        console.log('error>>:', error)
    }
}
module.exports = {
    createProject,
    getProjectService,
    deleteProjectService, updateProjects
}