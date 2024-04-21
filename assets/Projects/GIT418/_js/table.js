/*
    GIT417: Lawncare About Page Table
    Author: Bobby Sherman
    Date:   10/20/21 

    Filename: table.js
*/

"use strict;"

// constructor object
function Customer(name, freq, fav) {
    this.custName = name;
    this.custFreq = freq;
    this.custFav = fav;
}

function createCustomer() {
    // gather user input and create object properties
    var custName = document.getElementById("name").value;
    var custFreq = document.getElementById("freq").value;
    var custFav = document.getElementById("fav").value;

    // store new Customer
    var storeCust = new Customer(custName, custFreq, custFav); 

    // fire newTableRow with storeCust variable
    newTableRow(storeCust);
    
    resetForm();
}

function newTableRow(Customer) {
    // store table element
    var table = document.getElementById("communityTable");

    // create table row element
    var newRow = document.createElement("tr");

    // insert table cell elements + Customer object properties into the table row
    newRow.innerHTML = "<td>" + Customer.custName + "</td>" + "<td>" + Customer.custFreq + "</td>" + "<td>" + Customer.custFav + "</td>";

    // add newRow to the table
    table.appendChild(newRow);
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("freq").value = "";
    document.getElementById("fav").value = "";
}

function createEventListeners() {
    // fire addToTable when submit button is clicked
    document.getElementById("submitBtn").addEventListener("click", createCustomer, false);
}

// fire createEventListeners when page loads
window.addEventListener("load", createEventListeners, false);