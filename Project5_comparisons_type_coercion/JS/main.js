document.write(typeof "Hello");
document.write("<br>");
document.write(typeof 3);
document.write("<br>");
document.write("10" +5) //coercion
function my_function(){
    document.getElementById("test").innerHTML = 0/0;
}
function my_function2(){
    document.getElementById("test2").innerHTML = isNaN("This is string");
}
function my_function3(){
    document.getElementById("test3").innerHTML = isNaN("008");
}
document.write("<br>")
document.write(2E310);
document.write("<br>")
document.write(-2E810);
document.write("<br>")
document.write(10>8);
document.write("<br>")
document.write(5<4);
document.write("<br>")
console.log(2+2);
document.write("<br>")
console.log(6>8);
document.write("<br>")
document.write(10 == 10);
document.write("<br>")
document.write(10 == 8);
document.write("<br>")
X = 10;
Y = 10;
document.write(X === Y);
A = 10;
B = "hello";
document.write("<br>");
document.write(A === B);
document.write("<br>");
C = "Hello";
D = "Hello";
document.write(C === D);
document.write("<br>");
document.write(10>5 && 5<4);
document.write("<br>");
document.write(10>5 || 5<4);
document.write("<br>");
document.write(!10>5);