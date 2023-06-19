const Task = require('../models/task')
const aqp = require('api-query-params');

module.exports = {
    createTask: async (data) => {
        try {
            if (data.type === 'empty-task') {
                let result = await Task.create(data);
                return result;
            }
        } catch (error) {
            console.log('>>> error:', error)
        }
    },
    getTasks: async (queryString) => {
        let page = queryString.page;
        let limit = queryString.limit;
        const { filter } = aqp(queryString)
        delete filter.page
        let offset = (page - 1) * limit;
        try {
            let result = await Task.find({}).skip(offset).limit(limit).exec();
            return result;
        } catch (error) {
            console.log('>>> error:',error)
        }
    },
    updateTasksService: async (data) => {
        try {
            let result = await Task.updateOne({id:data.id},{...data});
            return result;  
        } catch (error) {
            consolelog('>>. error:',error)
        }
    },
    deleteTaskService: async (id) => {
        try {
            let result = await Task.deleteById(id);
            return result;
        } catch (error) {
            console.log('>>>error:',error)
        }
    }
}