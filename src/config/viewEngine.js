const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    app.set('views',path.join('./src','/views')) // kieu 1
    app.set('view engine', 'ejs')
    app.use(express.static('./src/public/'))// kieu 2
}
module.exports = configViewEngine;