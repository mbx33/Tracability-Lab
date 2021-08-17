const express = require('express');
const { request } = require('http');
const app = express();

const path = require('path');

const port = process.env.PORT || 4040;

app.use(express.json());

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: 'b1bf4ee9e6194090a7a8bd4b7bc5d55b',
  captureUncaught: true,
  captureUnhandledRejections: true
});

app.use(rollbar.errorHandler());

app.get('/', function(req, res) {
    rollbar.log("Hello This is working")
    res.sendFile(path.join(__dirname, '../client/index.html'))
});


app.get('/weather', function(req, res) { 
    try {
        weather(20, 70)
        console.log(weather) 
     } catch (warning) {
         rollbar.error(error)  
         console.warning(warning)      
    }        
})


app.listen(port, function() {
    console.log(`Slushaiyu on ${port}`)
})
