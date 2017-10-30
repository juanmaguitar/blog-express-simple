const { editBlogEntry } = require('../../services/blog');

function editArticleById (req, res) {
  const { id } = req.params
  const { title, body } = req.body

  editBlogEntry( id, title, body )
  res.send(`
edited post w/ id ${id}
title: ${title}
body: ${body}
`)

}

module.exports = editArticleById