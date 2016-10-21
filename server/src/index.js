const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('here are the list of root endpoints:');
});

app.use('/api', router);


app.listen(PORT, function() {
    console.log(`up on port ${PORT}!`); 
});
