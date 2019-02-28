// Word Play
// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.

$(document).ready(function() {
  $('#number_form').submit(function(event){
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());

    let array = [];

    // for (var index = 1; index <= number1/number2; index++) {
    //   array.push(number2 * index);
    // }

    for (var index = number2; index <= number1; index += number2) {
      array.push(index);
    }
    alert(array);
  });
});
