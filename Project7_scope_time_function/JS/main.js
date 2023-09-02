//Global Variable
var X = 20;
function Add_Numbers_1(){
    document.write(20 + X + "<br>");
}
function Add_Numbers_2(){
    document.write(30 + X + "<br>");
}
Add_Numbers_1();
Add_Numbers_2();

//Local Variable
function Add_Numbers_3(){
    var Z = 20;
    document.write(30 + Z + "<br>");
}
function Add_Numbers_4(){
    document.write(Z + 20);
}
Add_Numbers_3();
Add_Numbers_4();

//Method Assignment
function get_date(){
    if(new Date().getHours()<18){
        document.getElementById("greetings").innerHTML = "How are You?";
    }
}

//If Statement
function if_s(){
    if (2<3){
        document.getElementById("if_statement").innerHTML="How Are You?"
    }
}

//Else Statement
function Age_function(){
    Age = document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else{
        Vote = "You are not old enough to Vote!";
    }
    document.getElementById("how_old_are_you").innerHTML = Vote;
}

//Else If statement
function Time_function(){
    var Time = new Date().getHours();
    var reply;
    if(Time < 12 == Time > 0){
        reply = "It is a Morning time!";
    }
    else if(Time >= 12 == Time<18){
        reply = "It is afternoon";
    }
    else{
        reply = "It is evening time";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}