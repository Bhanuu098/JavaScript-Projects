//concat() method
function full_sentence(){
    var part_1 = "When we add";
    var part_2 = " 2 and 4,";
    var part_3 = " it will become "
    var part_4 = 2+4+".";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat").innerHTML = whole_sentence;
}

//slice() method
function slice(){
    var Sentence = "I am studying at Pitman Training Southampton.";
    var section = Sentence.slice(10, 20);
    document.getElementById("slice").innerHTML = section;
}

//uppercase() method
function uppercase_method(){
    var sentence_2 = "My name is Bhanuka Bansal";
    var upper = sentence_2.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

//search() method
function search_method(){
    var sentence_3 = "I am learning Web Development";
    var search = sentence_3.search("learning");
    document.getElementById("search").innerHTML = search;
}

//number to string() methods
function string_method(){
    var X = 209;
    document.getElementById("number_to_string").innerHTML = X.toString();
}

//Precision() method
function precision_method(){
    var Y = 12.0987654362881;
    document.getElementById("precision").innerHTML = Y.toPrecision(5);
}

//toFixed() method
function fixed_method(){
    var number = 5.8097;
    var fixed = number.toFixed();
    document.getElementById("fixed").innerHTML = fixed;
}

//valueOf() method
function value_of(){
    var text = "Hello, World";
    var result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}