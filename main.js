//Answer
  var answerDiv = document.getElementById("answer");

//Button
  var button = document.getElementById("calculate-button");

//Function
  function addition (num1, num2){

//Variables
    var num1 =document.getElementById("value-one");
    var num2 =document.getElementById("value-two");

//Make Variables numbers
    var number1 = Number(num1.value);
    var number2 = Number(num2.value);

//Arithmetic
      var sum = number1 + number2;
      answerDiv.innerHTML =+ sum;
}





button.addEventListener('click', addition);
