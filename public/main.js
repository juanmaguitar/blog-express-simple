$('.post-item .remove').on('click', function(e){
  const idBlogEntry = $(this).data('id')

  const url = `/article/${idBlogEntry}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then( response => {
      alert(response)
      window.location.href = '/'
    })
})

$('.edit-post').on('submit', function(e) {
  e.preventDefault()
  const idBlogEntry = $(this).data('id')
  const title = $(this).find('[name="title"]').val()
  const body = $(this).find('[name="body"]').val()

  const url = `/article/${idBlogEntry}`
  const method = 'PUT'
  const data = { title, body }

  $.ajax({ url, method, data })
    .then( response => {
      alert(response)
      window.location.href = '/'
    })

})