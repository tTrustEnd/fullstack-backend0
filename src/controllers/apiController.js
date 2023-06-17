const User = require('../models/user')
const {uploadSingleFile, uploadMultiFile} = require('../services/fileService')

const getUsersAPI = async(req, res) => {
    let results = await User.find({})
  return res.status(200).json({
    errorCode:0,
    data:results
  })
 }
 const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
  let user  = await User.create(
       { email,
        name,
        city}
    )
 return res.status(200).json({
    errorCode:0,
    data:user
 })
}
const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId
    let user =  await User.updateOne({_id:userId},{name:name,city:city,email:email})
    return res.status(200).json({
        errorCode:0,
        data: user
    })
}
const DeleteUserAPI = async(req, res) => {
    let userId = req.body.userId
    let user = await User.deleteOne({_id:userId})
   return res.status(200).json({
        errorCode:200,
        data: user
    })
}
const uploadSingleFileAPI =async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
  let result = await uploadSingleFile(req.files.image);
      console.log('check result',result)
    return res.send('oke single')
}
const uploadMultiFileAPI = (req, res) => {
    // console.log('checkkkk',req.files.image)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      console.log(req.files.image.length)
      if(req.files.image.length > 1){
        uploadMultiFile(req.files.image)
      }
      if(req.files.image.name)
      {    uploadSingleFile(req.files.image)
      }
   
     
    res.send('Multi')
}
 module.exports = {
    getUsersAPI,
    postCreateUserAPI,putUpdateUserAPI,
    DeleteUserAPI,
    uploadSingleFileAPI,uploadMultiFileAPI
 }