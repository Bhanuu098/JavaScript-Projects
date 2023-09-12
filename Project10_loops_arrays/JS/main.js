//while loop
function call_loop(){
    var digit =" ";
    X = 1;
    while(X<6){
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = digit;
}

//length property
let Name_1 = "Bhanuka";
document.write(Name_1.length);

//for loop
var students = ["Bhanu", "Nav", "Mishu", "Mamta", "Raghav"];
var content = "";
var Y;
function for_loop(){
    for(Y=0; Y<students.length; Y++){
        content += students[Y] + "<br>";
    }
    document.getElementById("list_of_students").innerHTML = content;
}

//arrays and objects
function cat_pics(){
    var cat_picture = [];
    cat_picture[0] = "Sleeping";
    cat_picture[1] = "Playing";
    cat_picture[2] = "Eating";
    cat_picture[3] = "Purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_picture[2] + ".";
}

//Constant Keyword
function constant_function(){
    const student = {name : "Bhanu", age : 24, marks: 84};
    document.getElementById("const").innerHTML = student.name + " got " + student.marks +" marks.";
}

//let keyword
var C = 88;
document.write("<br>" + C);
{
    let C = 53
    document.write("<br>" + C);
}
document.write("<br>" + C);

//object 
let car = {
    make: "dodge",
    model: "Viper",
    year: "2021",
    color: "Red",
    description : function(){
        return "The car is a "+ this.year + this.color + this.make + this.model;
    }
}
document.getElementById("car_object").innerHTML = car.description();
