const { getBlogEntry } = require('../../services/blog');

function showArticleById (req, res) {
  const { id } = req.params
  const entry = getBlogEntry(+id)
  const title = entry.title

  res.render('article', { title, entry })
}

module.exports = showArticleById