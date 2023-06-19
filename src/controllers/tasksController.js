const {createTask,getTasks,updateTasksService,deleteTaskService} = require('../services/taskService')
module.exports = {
    postCreateTasks: async (req, res) => {
        console.log(req.body)
        let result = await createTask(req.body)
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    getCreateTasks: async (req, res) => {
        let result = await getTasks(req.query)
        res.status(200).json({
            EC:0,
            data:result
        })
    },
    updateCreateTasks: async (req, res) => {
        let result = await updateTasksService(req.body)
      return res.status(200).json({
        EC:0,
        data:result
      })
    },
    deleteCreateTasks: async (req, res) => {
        let result = await deleteTaskService(req.body.id)
       return res.status(200).json({
        EC:0,
        data:result
       })
    }
}