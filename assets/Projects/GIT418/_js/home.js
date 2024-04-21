/*
    GIT417-418: Lawn care Home Page script
    Author: Bobby Sherman
    Date:   8/22/21-12/5/21
*/
"use strict";

// API SCRIPT - CH11
// pass json object
function getPhotos(json) {
    // store media.m + title properties inside the items array 
    for(var i = 0; i <= 10; i++) {
        var item = json.items[i];
        var imgHTML = "<img src='" + item.media.m + "'/>";
        var imgTitle = "<p>" + item.title + "</p>";

        // add imgHTML to the page
        document.getElementById("gallery").innerHTML += "<div>" + imgHTML + "<br>" + imgTitle + "</div>";
    }
    // add source below gallery
    document.getElementById("source").innerHTML = "Powered by <a href='https://www.flickr.com'>flickr</a>";
}



// FORM
// global
var customerInfo = [];
var servicesSelected = [];
var customerString;
var servicesString;

// add/remove customer information to the customerInfo array
function addCustomerInfo() {
    var infoInputs = document.querySelectorAll(".infoInput"); // store customer info inputs
    var displayedInfo = document.querySelector("#customerInfo"); // store customer info ul list

    // reset
    displayedInfo.innerHTML = "";
    customerInfo = [];

    // add input value to customer Info ul list + customerInfo array
    for (var i = 0; i < 4; i++) { // loop through inputs
        if (infoInputs[i].value !== "") { // check value
        var currentInput = infoInputs[i].value; // store input value
        customerInfo.push(currentInput); // push input value to customerInfo array
        var addInfo = document.createElement("li") // create and store li element
        addInfo.innerHTML = currentInput; // assign and store html text
        document.querySelector("#customerInfo").appendChild(addInfo); // append li element to ul list
        }
    }
}

// add/remove checked services to the servicesSelected array
function addServicesSelected(evt) { // checkbox change event parameter
    var service = evt.target; // store checked selection that called the event
    var serviceName = service.value; // store checked value
    
    // add checked service to Services Selected ul list
    if (service.checked) {
        servicesSelected.push(serviceName); // add to servicesSelected array
        var addService = document.createElement("li"); // store li element
        addService.innerHTML = serviceName; // assign service value to li element
        document.querySelector("#servicesSelected").appendChild(addService);
    } else { 
        // remove unchecked service from ul list
        var serviceUnchecked = document.querySelectorAll("#servicesSelected li"); // store li elements
        for (var s = 0; s < serviceUnchecked.length; s++) { // loop displayed li
            if (serviceUnchecked[s].innerHTML === serviceName) { // check li text and unchecked value
                servicesSelected.splice(s, 1); // remove the matching value from servicesSelected array at index s
                serviceUnchecked[s].parentNode.removeChild(serviceUnchecked[s]); // remove the matching li element from ul list
            }
        }
    }
}

// convert arrays to strings
function convertToString() {
    customerString = customerInfo.toString(); // convert customerInfo to string and store
    servicesString = servicesSelected.toString(); // convert servicesSelected to string and store
}



// EVENT LISTENERS
function createEventListeners() {
    // submit button
    document.getElementById("submitBtn").addEventListener("click", convertToString, false);
    
    // checks input fields for change
    var infoInputs = document.querySelectorAll(".infoInput");
    for (var i = 0; i < infoInputs.length; i++) {
    infoInputs[i].addEventListener("change", addCustomerInfo, false);
    }
    // checks checkboxes for change
    var services = document.querySelectorAll(".checkbox");
    for (var i = 0; i < services.length; i++) {
        services[i].addEventListener("change", addServicesSelected, false);
    }
}

// window load
window.addEventListener("load", createEventListeners, false);
