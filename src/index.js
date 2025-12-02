const express = require('express');

const ServerConfig = require('./config/serverConfig');

const app = express();

app.listen(ServerConfig.PORT, () => {
    console.log(`server started at port ${ServerConfig.PORT}...!!`);
})


//34.5.12.8:5500 -> socket  address for other laptop
//localhost:5500-> socket address fpr own laptop