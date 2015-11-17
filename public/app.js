var $exes = $('.glyphicon-remove')
var $star = $('.glyphicon-star')
var $checkboxes = $('.checkboxes')
var $span = $('span')
var $paras = $('p')
var text = $('#todo')

function removeDiv() {
  $(this).parent().hide('slow');
}
$exes.click(removeDiv);

function colorStar(){
  $(this).toggleClass('active');
}
$star.click(colorStar);

function strikethrough(){
  $(this).next().next().toggleClass('strikethrough');
}
$checkboxes.click(strikethrough);

$('.btn').click(function(){
  text = $('#todo')
  $('.list').last().append('<p><input type="checkbox" class="checkboxes"><i class="glyphicon glyphicon-star"></i><span>'+ text.val() +'</span><i class="glyphicon glyphicon-remove"></i></p>');
  text.val('');
  $('p').last().hide();
  $('p').last().show('slow');
  event.preventDefault();
  $exes = $('.glyphicon-remove')
  $star = $('.glyphicon-star')
  $checkboxes = $('.checkboxes')
  $span = $('span')
  $paras = $('p')
  $exes.click(removeDiv);
  $star.click(colorStar);
  $checkboxes.click(strikethrough);
})

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
