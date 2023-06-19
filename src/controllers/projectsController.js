const {createProject, getProjectService, deleteProjectService,updateProjects} = require('../services/productService')
module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body)
      res.status(200).json({
        EC:0,
        data:result
      })
    },
    getProjects: async (req, res) => {
        let result = await getProjectService(req.query)
        res.status(200).json({
            EC:0,
            data:result
        })
    },
    deleleProjects: async(req, res) => {
        let result = await deleteProjectService(req.body.id)
        res.status(200).json({
            EC:0,
            data:result
        })
    },
    updateProjects: async (req, res) => {
        let {id, name,endDate, description } = req.body;
        let data = {
            name,endDate,description
        }
        let result = await updateProjects(id, data)
        return res.status(200).json({
            EC:0,
            data:result
        })
    }
}