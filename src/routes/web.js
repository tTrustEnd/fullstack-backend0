const express = require('express');
const { getHomepage, getABC,
     postCreateUser,getCreatePage,
     getUpdatePage,postUpdateUser,
     postDeleteUser,postHandleDeleteUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)

router.get('/hoidanit', getABC)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)
router.post('/create-user',postCreateUser)
router.post('/update-user',postUpdateUser)
router.post('/delete-user',postHandleDeleteUser)
router.post('/delete-user/:id',postDeleteUser)


module.exports = router;