const express = require('express');
const path = require('path')
const _ = require('lodash')
const bodyParser = require('body-parser')

const app = express();

const { getBlogEntries, getBlogEntry, addBlogEntry } = require('./blog');

counter = 10

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  const { sort, direction } = req.query
  const title = "My Blog"
  let entries = getBlogEntries()

  if (sort === 'title') {
    entries = _.orderBy(entries, [sort], [direction]);
  }

  res.render('index',{ title, entries })
});

app.get('/about', function(req, res) {
  const title = "About Me"

  res.render('about', { title })
});

app.get('/article/:id', function(req, res) {
  const { id } = req.params
  const entry = getBlogEntry(+id)
  const title = entry.title

  res.render('article', { title, entry })
});

app.get('/new', function(req, res) {
  res.render('new')
});

app.post('/new', function(req, res) {
  const { title, body } = req.body
  const newPost = { title, body }
  newPost.id = ++counter
  newPost.published = +new Date()
  addBlogEntry(newPost)
  res.redirect('/')
});

app.listen(3000);
console.log('Listening on PORT 3000...')