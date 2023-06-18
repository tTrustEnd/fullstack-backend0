const {createProject, getProjectService} = require('../services/productService')
module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body)
      res.status(200).json({
        EC:0,
        data:result
      })
    },
    getProjects: async (req, res) => {
        console.log(req.query)
        let result = await getProjectService(req.query)
        res.status(200).json({
            EC:0,
            data:result
        })
    }
}