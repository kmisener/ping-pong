var isPositiveInteger =  function(userNumber) {
  if (isNaN(userNumber) || (userNumber < 0)) {
    return false;
  } // end if
  else {
    return true;
  } // end else
}; // end isPositiveInteger

var pingPong = function(userNumber) {
  if(userNumber%3 === 0 && userNumber%5 === 0) {
    return 'pingpong';
  } // end if
  else if(userNumber%3 === 0) {
    return 'ping';
  } // end else if
  else if(userNumber%5 === 0) {
    return 'pong';
  } // end else if
  else {
    return '';
  } // end else
}; // end pingPong

$(document).ready(function() {
  $("form#pingpong-number").submit(function(event) {
    var userInput = parseInt($("input#user-input").val());
    var isValidInput = isPositiveInteger(userInput);

    $('#results').empty();

    if(isValidInput) {
      for(var i = 1; i <= userInput; i++) {

        var result = pingPong(i);

        switch(result) {
          case "pingpong":
            $("<li>pingpong</li>").appendTo("#results");
            break;

          case "ping":
            $("<li>ping</li>").appendTo("#results");
            break;

          case "pong":
            $("<li>pong</li>").appendTo("#results");
            break;

          default:
            $("<li>"+i+"</li>").appendTo("#results");
        } // end switch
      } // end for
    } // end if
    else {
      alert('Please enter a positive integer');
      $('#results').empty();
      $('#user-input').val('');
    } // end else

    event.preventDefault();
  }); //end form submit
}); // end document.ready()

//Remove row-eq-height class for mobile device for full width columns
$(window).resize(function(){
   var width = $(window).width();
   var rowEqHeight = $('#content').hasClass('row-eq-height');

   if(width < 750){
       $('#content').removeClass('row-eq-height');
   }
   else {
     if(!rowEqHeight) {
       $('#content').addClass('row-eq-height');
     }
   }
})
.resize();
