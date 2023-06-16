require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');``
const configViewEngine = require('./config/viewEngine');
const app = express();
const mysql = require('mysql2');
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME
const webRoutes = require('./routes/web')
const connection = require('./config/database')
  //config templace engine
  configViewEngine(app)


//config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',webRoutes)
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})