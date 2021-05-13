// function myFunction() {
// document.getElementById("displayNumber").innerHTML = "9";
// }

//Numbers
document.getElementById("9").onclick = function() {
     document.getElementById("displayNumber").innerHTML = "9";
}
document.getElementById("8").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "8";
}
document.getElementById("7").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "7";
}
document.getElementById("6").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "6";
}
document.getElementById("5").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "5";
}
document.getElementById("4").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "4";
}
document.getElementById("3").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "3";
}
document.getElementById("2").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "2";
}
document.getElementById("1").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "1";
}
document.getElementById("0").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "0";
}

//Operators

document.getElementById("plus").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "+";
}
document.getElementById("minus").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "-";
}
document.getElementById("divide").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "/";
}
document.getElementById("multiply").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "*";
}
document.getElementById("equals").onclick = function() {
    document.getElementById("displayNumber").innerHTML = "=";
}

function userInput() {
    
    let myVar2 = document.getElementById("displayNumber").value;
}
function numbersAndOperator() {
    console.log (myVar2 + myVar2 + myVar2);
}

