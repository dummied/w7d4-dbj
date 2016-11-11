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




// ).done(function(response){
//   form_handler('#note')
