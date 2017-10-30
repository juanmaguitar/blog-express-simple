const _ = require('lodash')
const { getBlogEntries } = require('../../services/blog');

function showHome(req, res) {
  const { sort, direction } = req.query
  const title = "My Blog"
  let entries = getBlogEntries()

  if (sort === 'title') {
    entries = _.orderBy(entries, [sort], [direction]);
  }

  res.render('index',{ title, entries })
}

module.exports = showHome