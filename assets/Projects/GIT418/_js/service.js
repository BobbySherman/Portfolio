/*
    GIT417-418: Lawn care Service Page script
    Author: Bobby Sherman
    Date:   8/22/21-12/5/21
*/

// ANCHOR: Module 6: CHAPTER 12 - JQUERY
// NOTE: globale variable
var quote = $("form .quote");

// NOTE: button click event
$("#btn_calc").click(function() {
    // NOTE: store service value
    var selectedService = $("form #selectService").val();
    
    // NOTE: store job size value
    var jobSize = $("form input.radio:checked").val();

    // NOTE:
    //  if: no service selected add message and outline select field 
    //  else: Multiply values in the html method + remove: message and outlione
    if (selectedService === "") {
        $("form .p-sub").after("<p class='userMsg'>Please select a service!</p>");
        $("#selectService").addClass("outline");
    } else {
        quote.html(selectedService * jobSize);
        $("form .userMsg").remove();
        $("#selectService").removeClass("outline");
    }
});


// ANCHOR: MODULES 2 + 4 
/*
// Global result variable
var result = document.getElementById("quote");

// Module 4 - Exception Handling
// check if service is selected
function checkService() {
    var selectService = document.getElementById("selectService"); // assigns selectService to HTML id for dropdown list
    try { // exception statement
        for (var i = 1; i < 5; i++) { // counter variable loop
            if (selectService[i].selected) { // checks if a dropdown option is selected
                calcQuote(); // if a dropdown option selected start calcQuote function
                i = 6; // stops loop
            }
        }
        if (i = 5) { // if no dropdown option is selected create a throw message string
            throw "Select service above";
        }
    }
    catch(message) { // print throw message to quote id
        result.innerHTML = message; // assign message to result variable
    }
} 
*/


/* 
Debugging Summary
I used the console to set breakpoints. 
The step over and step into features helped track the try/catch and if statements. 
While stepping through the functions I watched the call stack, watch, and scope sections to track the variable values and function calls.
*/


// module 2 - service page - Calculation
// Btn click event + calculate quote function


/* 
function calcQuote() {
    // check for which radio btn is checked + apply value to "sizeTotal" variable
    var size = 0; // define size variable
    var large = document.getElementById("lrJob"); // assign large variable to HTML id="lrJob"
    var average = document.getElementById("avJob"); // assign average variable to HTML id="avJob"
    var small = document.getElementById("smJob"); // assign small variable to HTML id="smJob"

    // uses boolean value conditional operator to check which radio button is selected + adds first value to "size" variable if true and second value if false
    (large.checked) ? (size += 4) : (size += 0); 
    (average.checked) ? (size += 2) : (size += 0);
    (small.checked) ? (size += 1) : (size += 0);
    
    // assigns true or false value of each radio button to "sizeTotal" variable
    sizeTotal = size;

    // check which dropdown option is selected + apply that value to "serviceTotal" variable
    var service = 0; // define service variable
    var mow = document.getElementById("mowServ"); // assign mow variable to HTML id="mowServ"
    var snow = document.getElementById("snowServ"); // assign clean variable to HTML id="cleanServ"
    var treat = document.getElementById("treatServ"); // assign treat variable to HTML id="treatServ"
    var clean = document.getElementById("cleanServ"); // assign snow variable to HTML id="snowServ"

    // uses boolean value conditional operator to check which dropdown option selected + adds first value to "service" variable if true and second value if false
    
    (mow.selected) ? (service += 60) : (service += 0); 
    (snow.selected) ? (service += 35) : (service += 0);
    (treat.selected) ? (service += 30) : (service += 0);
    (clean.selected) ? (service += 60) : (service += 0);

    // assigns true or false value of each radio button to "serviceTotal" variable
    serviceTotal = service;

    // Display result through HTML id="quote"
    result = document.getElementById("quote").innerHTML = "$" + (serviceTotal * sizeTotal);
}

// Creates events listeners
function createEventListeners() {
    // fires the "checkService" function
    document.getElementById("btn_calc").addEventListener("click", checkService, false);
}

// resets form
function resetForm() {
    document.getElementById("avJob").checked = true;
}

// Executes after browser window loads
window.addEventListener("load", resetForm, false);
window.addEventListener("load", createEventListeners,false);
*/