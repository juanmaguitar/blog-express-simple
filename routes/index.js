const express = require('express')

const { getBlogEntries, getBlogEntry, addBlogEntry } = require('../services/blog');

const showHome = require('./handlers/showHome')
const showAbout = require('./handlers/showAbout')

const showArticleById = require('./handlers/showArticleById')
const removeArticleById = require('./handlers/removeArticleById')
const editArticleById = require('./handlers/editArticleById')

const showFormNewPost = require('./handlers/showFormNewPost')
const addNewPost = require('./handlers/addNewPost')

const showEditPost = require('./handlers/showEditPost')

const router = express.Router();

router.get('/', showHome)
router.get('/about', showAbout)

router.route('/article/:id')
  .get(showArticleById)
  .delete(removeArticleById)
  .put(editArticleById)

router.route('/new')
  .get(showFormNewPost)
  .post(addNewPost)

router.get('/edit/:id', showEditPost)

module.exports = router