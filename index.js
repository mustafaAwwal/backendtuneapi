/******************************************************
 ************** Dependency EXPRESS *************** 
 ******************************************************/
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

/******************************************************
 **************** App Initialization *************** 
 ******************************************************/

const app = express();
require('./config/express.config')(app);

// const PORT = 8080;
// const HOST = '0.0.0.0';


/******************************************************
 ************** App MYSQL Connection *************** 
 ******************************************************/

const db = require('./config/db.config');


/******************************************************
 ************** Bootstrap App *************** 
 ******************************************************/

 var PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('app is live at 1234');
});


