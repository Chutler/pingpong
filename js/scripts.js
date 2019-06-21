// Business Logic
function pingPong(inputNumber) {
    var output = [];
    for (var i = 1; i <= inputNumber; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output.push("pingpong");
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
    $("form#pong").submit(function(event) {
      $("#results").empty();                    // clears out the results div on a subsequent submit - this was a hail mary
      var inputNumber = $("#inputNumber").val();
      var output = pingPong(inputNumber);       // calls the function and returns the resulting array
      output.forEach(function(value) {          // write the list of elements to the dom
        $("#results").append("<li>" + value + "</li>");
      });
      event.preventDefault();
    });
  });


