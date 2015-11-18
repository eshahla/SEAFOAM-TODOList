$('.btn').click(function(){
  text = $('.form-control');
  $('#todo-list').last().append(text.val());
  text.val('');
});

$.ajax({
  url: '/api/todos',
  method: 'GET',
  success: function(data){
    // console.log(data)
      data.forEach(function(i){
        var text = $('.todo');
        var input = i.item
        console.log(i.item)
        $('.checkbox').last().append('<p><div class="checkbox"><label><input type="checkbox" ng-click="deleteTodo(todo._id)">' + input + '</label></div></p>')
        //
      })
    }
})

// $.ajax({
//         url: '/movies'
//         ,method: 'GET'
//         ,success: function(data){
//             console.log(data);
//
//             data.forEach(function(m){
//               var nameSpan = '<span class="movie-name">' + "Movie: " + m.name + '</span>'
//               var ratingSpan = '<span class="movie-rating">' + "Rating: " + m.rating + '</span>'
//               var showDetails ='<button class="show-details" id="'+ m._id +'" >Show Details</button>'
//               var li = '<li>' + nameSpan + " | " + ratingSpan + " | " + showDetails + '</li>'
//               $('.movies-list').append(li)
//             });
//             $('.show-details').on('click', function(evt){
//               console.log('let us make a request to get the details');
//               var movieId = this.id;
//               //or console.log(evt.target.id)
//               $.ajax({
//                 //or /movies/ + evt.target.id
//                 url: '/movies/' + movieId
//                 ,method: 'GET'
//                 ,success: function(data){
//                   console.log(data);
//                 }
//               })
//             })
//         }
//       })
//     })


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
