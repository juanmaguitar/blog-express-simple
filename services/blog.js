let entries = require('../data/entries.json')

function getBlogEntries() {
  return entries;
}

function getBlogEntry(id) {
  return entries.find( entry => entry.id === +id)
}

function addBlogEntry(post) {
  entries.push(post)
}

function removeBlogEntry(id) {
  entries = entries.filter( post => post.id !== +id)
}

function editBlogEntry(id, title, body) {
  entries = entries.map( post => {
    if (post.id == +id) {
      post.title = title
      post.body = body
    }
    return post
  })
}

module.exports = { getBlogEntries, getBlogEntry, addBlogEntry, removeBlogEntry, editBlogEntry }