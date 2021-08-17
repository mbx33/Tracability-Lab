const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 4040;

app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/index.html'))
});



app.listen(port, function() {
    console.log(`Listening on ${port}`)
})
