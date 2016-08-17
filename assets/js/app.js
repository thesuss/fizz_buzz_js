
var onReadyEvents = function(){
  $('#click_me').click(function() {
    var number = $('#number').val();
    $('#display_message').html(fizz_buzz(number));
  });
}
