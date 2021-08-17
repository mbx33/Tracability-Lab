const express = require('express');
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

app.get('/', function(req, res) {
    rollbar.log("Hello world!");
    res.sendFile(path.join(__dirname, '../client/index.html'))
});


app.get("/api/weather", (req, res) => {
    rollbar.log("Hell");
})



app.listen(port, function() {
    console.log(`Listening on ${port}`)
})
