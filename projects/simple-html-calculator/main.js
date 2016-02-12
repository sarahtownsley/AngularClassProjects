document.getElementById("add").addEventListener("click", function() {
    var firstNumber = document.getElementById("firstnumber").value;
    var secondNumber = document.getElementById("secondnumber").value;
    
    var sum = parseInt(firstNumber) + parseInt(secondNumber);
    
    document.getElementById("add-result").innerHTML = sum;
        
});

document.getElementById("subtract").addEventListener("click", function() {
    var numberOne = document.getElementById("numberone").value;
    var numberTwo = document.getElementById("numbertwo").value;
    
    var difference = parseInt(numberOne) - parseInt(numberTwo);
    
    document.getElementById("subtract-result").innerHTML = difference;
});

document.getElementById("multiply").addEventListener("click", function() {
    var numberFirst = document.getElementById("numberfirst").value;
    var numberSecond = document.getElementById("numbersecond").value;
    
    var product = parseInt(numberFirst) * parseInt(numberSecond);
    
    document.getElementById("multiply-result").innerHTML = product;
});
