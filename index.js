const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( routes )

app.listen(3000);
console.log('Listening on PORT 3000...')