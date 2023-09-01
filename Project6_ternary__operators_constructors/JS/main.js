//Part 1
function Age(){
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age<18)? "You are not eligible":"You are eligible";
    document.getElementById("vote").innerHTML = Can_Vote + " to vote.";
}
//end part 1

//Part 2
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color +
    "-coloured " + Erik.Vehicle_Model + " manufactured in "+ Erik.Vehicle_Year+".";
}
//End Part 2

//Part 3
function Student(Name, Marks){
    this.Student_Name = Name;
    this.Student_Marks = Marks;
}
var Nav = new Student("Nav", 28);
var Sat = new Student("Sat", 29);
function Marks(){
    document.getElementById("K_and_C").innerHTML = Sat.Student_Name + " got " + Sat.Student_Marks + " marks out of 50."
}   
//End Part 3

//Part 4
A = True;
document.write(A);
//End Part 4

//Part 5
function Count_Function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var Starting_Point = 9;
        function Plus_One(){Starting_Point +=1;}
        Plus_One();
        return Starting_Point;
    }
}
//End Part 5