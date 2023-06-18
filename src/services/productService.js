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
    return null;
}
const getProjectService = async (queryString) => {
    let page = queryString.page
    const { filter, limit, population } = aqp(queryString);
    console.log(population)
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Project.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();

    return result
}
module.exports = {
    createProject,
    getProjectService
}