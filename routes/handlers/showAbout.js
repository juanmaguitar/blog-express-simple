function showAbout(req, res) {
  const title = "About Me"
  res.render('about', { title })
}

module.exports = showAbout