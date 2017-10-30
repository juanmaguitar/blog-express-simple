let entries = require('../data/entries.json')

function getBlogEntries() {
  return entries;
}

function getBlogEntry(id) {
  return entries.find( entry => entry.id === id)
}

function addBlogEntry(post) {
  entries.push(post)
}

function removeBlogEntry(id) {
  entries = entries.filter( post => post.id !== +id)
}

module.exports = { getBlogEntries, getBlogEntry, addBlogEntry, removeBlogEntry }