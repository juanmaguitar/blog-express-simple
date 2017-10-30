const { getBlogEntry } = require('../../services/blog');

function showEditPost (req, res) {
  const { id } = req.params
  const entry = getBlogEntry(id)
  console.log(id)
  console.log(entry)
  res.render('edit', { entry })
}

module.exports = showEditPost