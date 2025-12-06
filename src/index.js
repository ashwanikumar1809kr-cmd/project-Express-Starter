const express = require('express');
const bodyParser = require('body-parser');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());




app.listen(ServerConfig.PORT,async () => {
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}...!!`);    
});


//34.5.12.8:5500 -> socket  address for other laptop
//localhost:5500-> socket address fpr own laptop       