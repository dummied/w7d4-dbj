// var modal_source = $("#modal-template").html();
// var template = Handlebars.compile(modal_source);

var notes_source = $("#note_template").html();
var note_template = Handlebars.compile(notes_source)


$.getJSON('https://damp-depths-50705.herokuapp.com/api/notes/')
.then(function(r){
  return r.notes.forEach(function(note){
    var display = note_template(note)
    $('#notes').prepend(display)
  })
})


  $('#note').on('submit', function(ev){
    ev.preventDefault()
    // toggle_loading('#note')
    $.post('https://damp-depths-50705.herokuapp.com/api/notes/',
    $(this).serialize())
  })

  $('#notes').on('click', '.tag', function(ev){
    ev.preventDefault()
    $('#notes').html('')
    $.getJSON('https://damp-depths-50705.herokuapp.com/api/notes/tag/' +
    $(this).html())
    .then(function(r){
      $('#header').append(':' + r.tag.name)
      r.tag.notes.forEach(function(note){
        var display = note_template(note)
        $('#notes').prepend(display)
        console.log(tag)
      })
    })
  })



// ).done(function(response){
//   form_handler('#note')
