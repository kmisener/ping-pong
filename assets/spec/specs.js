
describe('isPositiveInteger', function() {
  it('is false for any non-number input', function() {
     expect(isPositiveInteger('a')).to.equal(false);
  });

  it('is true for any positive integer', function() {
    expect(isPositiveInteger(9)).to.equal(true);
  });

  it('is false for any negative integer', function() {
    expect(isPositiveInteger(-5)).to.equal(false);
  });
});

describe('pingPong', function() {
  it('determines if userNumber is a multiple of both 3 and 5', function() {
    expect(pingPong(15)).to.equal('pingpong');
  });

  it('determines if userNumber is a multiple of 3', function() {
    expect(pingPong(9)).to.equal('ping');
  });

  it('determines if userNumber is a multiple of 5', function() {
    expect(pingPong(25)).to.equal('pong');
  });

  it('determines if userNumber is not a multiple of 3 or 5', function() {
    expect(pingPong(7)).to.equal('');
  });
});

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
