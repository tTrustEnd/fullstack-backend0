const connection = require('../config/database')
const {getAllusers, getUserById, updateUserById, deleteUserById} = require('../services/CRUDService')
const getHomepage = async(req, res) => {
   let results = await getAllusers()
    return res.render('home.ejs',{listUsers:results})
}
const getABC = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let [result, field] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?,?,?)`, [email, name, city],
    )
    res.redirect('/')
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
const getUpdatePage = async(req, res) => {
    const userId = req.params.id
    let user  = await getUserById(userId)
   return res.render('edit.ejs',{userEdit:user})
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId
    await updateUserById(email, city, name,userId)
    // res.send('create user success')
    res.redirect('/')
}
const postDeleteUser = async(req, res) => {
    const userId = req.params.id
    let user  = await getUserById(userId)
    res.render('delete.ejs',{userDelete:user})
}
const postHandleDeleteUser = async(req, res) => {
    let userId = req.body.userId
    console.log(userId)
    await deleteUserById(userId)
res.redirect('/')
}
 module.exports = {
    getHomepage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser
}
