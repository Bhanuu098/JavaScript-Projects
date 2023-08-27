function myDictionary(){
    var Human = {
        Gender:"Female",
        Age:"25",
        Qualification:"Bachelor's",
    };
    document.getElementById("dictionary").innerHTML = Human.Qualification;
}
function myDictionary2(){
    var Human2 = {
        Gender:"Male",
        Age:"26",
        Qualification:"Master's",
    }
    delete Human2.Gender;
    document.getElementById("dictionary2").innerHTML = Human2.Gender;
}