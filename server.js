// create a server
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require("cors");
const path = require("path");

const route = require('./routes/user_route.js');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/',route);

app.get('/', (req, res) => {
  res.send('Nirav API is live!');
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));


// document.writeln("Hello Yash");

app.listen(PORT, () => {
    console.log(`Listening at server = `);
})
