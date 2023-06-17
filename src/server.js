require('dotenv').config();
const { config } = require('dotenv');
const express = require('express'); ``
const configViewEngine = require('./config/viewEngine');
const app = express();
const mysql = require('mysql2');
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const routerAPI = require('./routes/api')
const fileUpload = require('express-fileupload');


//config templace engine
configViewEngine(app)
app.use(fileUpload());

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', webRoutes);

app.use('/v1/api', routerAPI);


(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`)
    })
  } catch (error) {
    console.log('check error>>.', error)
  }

})()

