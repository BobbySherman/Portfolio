/*  GIT417-418: Abott Lawncare Contact Page
    Author: Bobby Sherman
    Date:   8/22/21-12/5/21
*/
"use strict";

// Module 3 - decision making
// array with cues for switch statments
var dayLength = ["fullDay", "fullDay", "fullDay", "fullDay", "fullDay", "halfDay", "off"];


// decision-making-function to fill hours of opperation section
function hoursOfOpperation() {
    for (var i = 0; i <= 6; i++) { // uses variable i to run staements and loop increment until i = 6
        var hours = document.getElementsByClassName("dayHours")[i]; // assigns "dayHours" class to hours variable + increment through classes
        
        // uses i variable to refence dayLength index to cases
        switch (dayLength[i]) {
            // prints half day hours for saturday
            case "halfDay": 
                hours.innerHTML = "7:00am &#8211; 12:00pm";
                break;

            // prints closed for sunday
            case "off":
                hours.innerHTML = "Closed";
                break;

            // prints full day hours for Monday through Friday
            default:
                hours.innerHTML = "7:00am &#8211; 5:00pm";
                break;
        }
    }
}




// Chapter 9 - Validate Formatting for server
// Chapter 6 - Empty form field Validation
// global Variables
var formValidity;
var inputValid;


/* from chapter 6
function validateInputs() {
    var formInputs = document.querySelectorAll("#contactForm input"); // assign all contact inputs
    var userMessage = document.querySelector("#userMessage"); // assign message div

    try { // check for empty inputs, apply border + input validity if empty
        var currentInput;

        for (var i = 0; i < formInputs.length - 1; i++) {
            currentInput = formInputs[i];
            if (currentInput.value === "") {
                currentInput.style.border = "1.5px solid red";
                inputValid = false; // progress to throw and catch
            } else {
                currentInput.style.border = ""; // reset border
                inputValid = true;
            }
        }

        validateReason();

        // throw if not valid
        if (inputValid === false) {
            throw "Please fix the outlined fields";
        } else {
            // reset message div
            userMessage.innerHTML = "";
            userMessage.style.border = "";
            userMessage.style.padding = "";
            userMessage.style.marginBottom = "";
        }
    }
}*/

// function to validate form fields
function validateFields() {
    var userMessage = document.querySelector("#userMessage"); // assign message div

    try { 
        inputValid = true;
        nameFormat();
        emailFormat();
        phoneFormat();
        addressFormat();
        validateReason();
        commentsFormat();
        

        // throw if not valid
        if (inputValid === false) {
            throw "Please fix the outlined fields";
        } else {
            // reset message div
            userMessage.innerHTML = "";
            userMessage.style.border = "";
            userMessage.style.padding = "";
            userMessage.style.marginBottom = ""; 
        }
    }

    // show message, apply css style
    catch(msg) {
        userMessage.style.border = "2px solid red";
        userMessage.style.padding = "9px";
        userMessage.style.marginBottom = "20px";
        userMessage.innerHTML = msg;
        formValidity = false; // apply validity
        location.href = "#contactForm"; // scroll to top of form
    }
}


// validate dropdown list
function validateReason() {
    var reasons = document.querySelectorAll("option");
    var selectList = document.getElementById("dropdown");
    var fieldMessage = document.querySelector("#reason .fieldMessage")

    // if no option selected apply border, apply validity
    if (reasons[0].selected) {
        selectList.style.border = "1.5px solid red";
        fieldMessage.style.display = "block";
        fieldMessage.style.color = "red";
        fieldMessage.innerHTML = "Please select a reason";
        inputValid = false;
    } else {
        selectList.style.border = ""; // reset border
        fieldMessage.style.display = "none";
    }
}


function nameFormat() {
    var fullName = document.querySelector("#name input");
    var fieldMessage = document.querySelector("#name .fieldMessage")
    var fname;
    var lname;

    /** reguar expression I made to check for two groups of text 
    *   first group = only letters
    *   second group = only letters and spaces
    *   "i" flag to ignore case */
    var letterCheck = /^[a-z\D]+[a-z\s\D]$/i; 

    // if 
    if (fullName.value === "" || !(letterCheck.test(fullName.value))) {
        fullName.style.border = "1.5px solid red";
        fieldMessage.style.display = "block";
        fieldMessage.style.color = "red";
        fieldMessage.innerHTML = "Please enter a valid name";
        inputValid = false;
    } else {
        fullName.style.border = ""; // reset border
        fieldMessage.style.display = "none";
    }
}

function emailFormat() {
    var email = document.querySelector("#email input");
    var fieldMessage = document.querySelector("#email .fieldMessage")
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;

    if (emailCheck.test(email.value) === false) {
        email.style.border = "1.5px solid red";
        fieldMessage.style.display = "block";
        fieldMessage.style.color = "red";
        fieldMessage.innerHTML = "Please enter a valid email";
        inputValid = false;
    } else {
        email.style.border = ""; // reset border
        fieldMessage.style.display = "none";
    }
}

function phoneFormat() {
    var phoneFields = document.querySelectorAll(".phoneNumber");
    var fieldMessage = document.querySelector("#phoneNumber .fieldMessage");
    var checkPhone1 = /.{3}/;
    var checkPhone2 = /.{4}/;

    for (var p = 0; p < 2; p++) {
        var currentField = phoneFields[p];

        // if less or more than 3 numbers
        if (checkPhone1.test(currentField.value) === false) {
            currentField.style.border = "1.5px solid red";
            fieldMessage.style.display = "block";
            fieldMessage.style.color = "red";
            fieldMessage.innerHTML = "Please enter a valid phone number";
            inputValid = false;
        } else {
            currentField.style.border = ""; // reset border
            fieldMessage.style.display = "none";
        }
    }

    // if less or more than 4 numbers
    if (checkPhone2.test(phoneFields[2].value) === false) {
        phoneFields[2].style.border = "1.5px solid red";
        fieldMessage.style.display = "block";
        fieldMessage.style.color = "red";
        fieldMessage.innerHTML = "Please enter a valid phone number";
        inputValid = false;
    } else {
        phoneFields[2].style.border = ""; // reset border
        fieldMessage.style.display = "none";
    }
}

function addressFormat() {
    var address = document.querySelectorAll(".addressInput");
    var fieldMessage = document.querySelector(".addressMessage");
    var checkZip = /.{5}/; // zip 5 digits
    var letterCheck = /[a-z]{2,}/i; // regex min 2 alpha characters, ignore case
    var checkStreet = /[^\w\s]/; // regex excludes alphanumeric and white space
    var inputAddrValid = true;

    if (checkStreet.test(address[0].value) === true || address[0].value === "") {
        address[0].style.border = "1.5px solid red";
        inputAddrValid = false;
    } else {
        address[0].style.border = "";
    }
    
    if (letterCheck.test(address[1].value) === false) {
        address[1].style.border = "1.5px solid red";
        inputAddrValid = false;
    } else {
        address[1].style.border = "";
    }
    
    if (letterCheck.test(address[2].value) === false) {
        address[2].style.border = "1.5px solid red";
        inputAddrValid = false;
    } else {
        address[2].style.border = "";
    }
    
    if (checkZip.test(address[3].value) === false) {
        address[3].style.border = "1.5px solid red";
        inputAddrValid = false;
    } else {
        address[3].style.border = "";
    }

    if (inputAddrValid === false) {
        fieldMessage.style.display = "block";
        fieldMessage.style.color = "red";
        fieldMessage.innerHTML = "Please check your address";
        inputValid = false;
    } else {
        fieldMessage.style.display = "none";
    }
}

function commentsFormat() {
    var comments = document.querySelector("#comments textarea");
    var fieldMessage = document.querySelector("#comments .fieldMessage")

    // if empty or longer than 400 characters
    if (comments.value === "" || comments.value.length > 400) {
        comments.style.border = "1.5px solid red";
        fieldMessage.style.display = "block";
        fieldMessage.style.color = "red";
        fieldMessage.innerHTML = "Please enter a message with max 400 characters";
        inputValid = false;
    } else {
        comments.style.border = ""; // reset border
        fieldMessage.style.display = "none";
    }
}


// function to validate form
function validateForm(evt) {
    // trap submit event
    evt.preventDefault();

    // reset form validity
    formValidity = true;

    // check inputs
    validateFields();

    // submit form if validity = true
    if (formValidity === true) {
        document.forms[0].submit();
    }
}


// phone number auto advance
function autoAdvancePhoneNumber() {
    var phoneFields = document.querySelectorAll(".phoneNumber");
    for (var p = 0; p < 2; p++) {
        var currentField = phoneFields[p];

        // phone input length = 3, focus to next input
        if (currentField.value.length === 3) {
            phoneFields[p + 1].focus();
        }
    }

    // last phone input length = 4, focus to dropdown
    if (phoneFields[2].value.length === 4) {
        document.getElementById("dropdown").focus();
    }
}


// listen for events function
function createEventListeners() {
    // submit listner
    var contactForm = document.getElementsByTagName("form")[0];
    contactForm.addEventListener("submit", validateForm, false);

    // phone fields listener
    var phoneFields = document.querySelectorAll(".phoneNumber");
    for (var p = 0; p < phoneFields.length; p++) {
        phoneFields[p].addEventListener("input", autoAdvancePhoneNumber, false);
    }
}


// functions called after page load
function setupPage() {
    hoursOfOpperation();
    createEventListeners();
}


// window load event calls page setup
window.addEventListener("load", setupPage, false);