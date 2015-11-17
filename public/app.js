$('.btn').click(function(){
  text = $('.form-control');
  $('#todo-list').last().append(text.val());
  text.val('');
});

//code from tony's lecture
// $.ajax({
//   url: 'http://127.0.0.1:3000/api/todos',
//   method: 'GET',
//   success: function(data){
//     console.log(data)
//   }
// })

// $.ajax({
//   url: 'http://127.0.0.1:3000/api/todos',
//   method: 'POST',
//   data: { text: "test2"},
//   dataType: 'application/json',
//   success: function(data){
//     console.log(data)
//   }
// })
