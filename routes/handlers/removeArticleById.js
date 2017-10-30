const { removeBlogEntry } = require('../../services/blog');

function removeArticleById (req, res) {
  const { id } = req.params
  removeBlogEntry(id)
  res.send(`removed post w/ id ${id}...`)

}

module.exports = removeArticleById