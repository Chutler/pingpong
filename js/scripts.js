// Business Logic
function pingPong(inputNumber) {
    var output = [];
    for (var i = 1; i <= inputNumber; i++) {
      if (i % 15 === 0) {
        output.push("ping-pong");
      } else if (i % 3 === 0) {
        output.push("ping");
      } else if (i % 5 === 0) {
        output.push("pong");
      } else  {
        output.push(i);
      }
    }
    return output;
  }
  
  // User Interface Logic
  $(document).ready(function() {
    $('form#pong').submit(function(event) {
      event.preventDefault();
      var inputNumber = $('#inputNumber').val();
      var output = pingPong(inputNumber);       // calls the function and returns the resulting array
    //   console.log(output)
      output.forEach(function(element) {        // write the list of elements to the dom
        $('#results').append("<li>" + element + "</li>");
      });
    });
  });
