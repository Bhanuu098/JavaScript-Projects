function addition_function(){
    var addition = 2+2;
    document.getElementById("math").innerHTML=" 2+2= " + addition;
}
function sub_function(){
    var sub = 7-3;
    document.getElementById("math2").innerHTML=" 7-3= " + sub;
}
function multi_function(){
    var multi = 7*3;
    document.getElementById("math3").innerHTML=" 7*3= " + multi;
}
function divide_function(){
    var division = 8/4;
    document.getElementById("math4").innerHTML=" 8/4= " + division;
}
function multiple_function(){
    var result = 7-3+7*8/4; //to multiply numbers
    document.getElementById("multiple").innerHTML=" 7-3+7*8/4= " + result;
}
function modulus_operator(){
    var remainder = 7%3; //to get remainder
    document.getElementById("modulus").innerHTML=" When you divide 7 by 3,the remainder will be " + remainder;
}
function negation_operator(){
    var y = 10
    document.getElementById("negation").innerHTML = -y; //to get complement 
}
var A = 5;
A++;
document.write(A);
document.write("<br>");
var B = 6;
B--;
document.write(B);
document.write("<br>");
window.alert(Math.random() *100);
document.write("<br>");
document.write(Math.E);
document.write("<br>");
document.write(Math.PI);




