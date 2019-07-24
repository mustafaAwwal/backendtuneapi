/******************************************************
 *************+ Dependencies *************** 
 ******************************************************/

const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const fs = require('fs');   
// const express = require('express'); //? --** Use if necessary **--    


//  EXPOSTS
module.exports = (app) => {

    // Enabling Cors
    app.use(cors());

    // Pars application/JSON
    app.use(bodyParser.json());

    // Pars application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // Setting Path to Route Folder
    var routPath = './routes/';
    fs.readdirSync(routPath).forEach((file) => {
        var route = routPath + file;
        require('../'+route)(app);
    })

}