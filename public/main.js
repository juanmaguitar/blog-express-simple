$('.post-item .remove').on('click', function(e){
  const idBlogEntry = $(this).data('id')
  const url = `/article/${idBlogEntry}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then( response => {
      window.location.href = '/'
    })
})