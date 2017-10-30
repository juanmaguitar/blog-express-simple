const express = require('express')

const { getBlogEntries, getBlogEntry, addBlogEntry } = require('../services/blog');

const showHome = require('./handlers/showHome')
const showAbout = require('./handlers/showAbout')
const showArticleById = require('./handlers/showArticleById')
const showFormNewPost = require('./handlers/showFormNewPost')
const addNewPost = require('./handlers/addNewPost')

const router = express.Router();

router.get('/', showHome)
router.get('/about', showAbout)
router.get('/article/:id', showArticleById )

router.route('/new')
  .get(showFormNewPost)
  .post(addNewPost)

module.exports = router