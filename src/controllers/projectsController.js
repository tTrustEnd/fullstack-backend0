const {createProject} = require('../services/productService')
module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body)
      res.status(200).json({
        EC:0,
        data:result
      })
    }
}