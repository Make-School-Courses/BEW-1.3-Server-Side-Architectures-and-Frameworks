
/* 

The resources are all basically the same story they argue for Vanilla JS over jQuery. 
While this is fine. It seems a waste of time to read the same thing over again. 

The stretch.js challenge is the most interesting part of the whole lesson and provides 
most challenge. This challenge actually makes an argument for jQuery! This could be a 
great eye opening moment, maybe it should be a required challenge. 
  
*/




// `$('#todos')`

var todos = document.getElementById('todos');


// `.text()`

var text = todos.textContent;

// `.text("hello!")`

todos.textContent = 'hello!'


// `.val()`

var v = element.value;


// `.prepend()`

element.prepend(something);


// `.addClass('bold')`

todos.classList.add('clssName');


// $(document).ready()

$(window).on("load", function(){
  // Handler when all assets (including images) are loaded
});


// INSTRUCTIONS: REWRITE THIS IN VANILLA JAVASCRIPT

// $(document).ready(function() {
//
//   // SUBMIT POST FORM
//   $('#post-form').submit(function (e) {
//     e.preventDefault();
//
//     var post = $(this).serialize();
//
//     $.ajax({
//       type: 'POST',
//       url: '/posts',
//       data: post,
//       success: function(data) {
//         $('#posts').prepend(
//           "<div class='list-item'>" +
//             "<p>" + data.title + "</p>" +
//             data.description +
//           "</div>"
//         );
//         // window.location.href = "/posts/" + data._id
//       },
//       error: function(err) {
//         console.log(err);
//       }
//     });
//   });
//
// });


$(window).on("load", function(){
  var postForm = document.getElementById('post-form');
  
  postForm.addEventListener('submit', function(e){
    e.preventDefault();
    var post = $(this).serialize();
  })
  
  $('#post-form').submit(function (e) {
    e.preventDefault();

    

    $.ajax({
     type: 'POST',
     url: '/posts',
     data: post,
     success: function(data) {
       $('#posts').prepend(
         "<div class='list-item'>" +
           "<p>" + data.title + "</p>" +
           data.description +
         "</div>"
       );
       // window.location.href = "/posts/" + data._id
     },
     error: function(err) {
       console.log(err);
     }
    });
    });
});