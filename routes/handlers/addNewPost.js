const { addBlogEntry } = require('../../services/blog');
let counter = 10;

function addNewPost (req, res) {
  const { title, body } = req.body
  const newPost = { title, body }
  newPost.id = ++counter
  newPost.published = +new Date()
  addBlogEntry(newPost)
  res.redirect('/')
}

module.exports = addNewPost