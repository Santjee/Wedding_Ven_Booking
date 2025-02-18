const express= require('express');
const cors=require('cors');
const corsOptions = require('./src/config/cors');
const path = require('path');

const app=express();

app.use('/resources', express.static(path.join(__dirname, "uploads")));

app.use(cors(corsOptions));


require('./src/api/routes')(app)

module.exports = app;