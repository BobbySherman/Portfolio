"use strict";
var waitForUser;
var locInfoList = [];
var positionInfo = [];
var mapMessage = document.getElementById("map");

// function to populate the description lists
function populateDeviceInfo() {
    // populates the user device information
    document.getElementsByClassName("userInfo")[0].innerHTML = navigator.appVersion;
    document.getElementsByClassName("userInfo")[1].innerHTML = navigator.platform;
    document.getElementsByClassName("userInfo")[2].innerHTML = navigator.onLine;
    document.getElementsByClassName("userInfo")[3].innerHTML = screen.pixelDepth;
    document.getElementsByClassName("userInfo")[4].innerHTML = screen.height;
    document.getElementsByClassName("userInfo")[5].innerHTML = screen.width;
}

// test for location access
function geoTest() {
    waitForUser = setTimeout(fail, 10000); // set timer for user to respond
    
    // get location from device
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(populateLocationInfo, fail, {timeout: 10000})
    } else {
        fail();
    }
}

// if location is enabled: populate list and show map
function populateLocationInfo(position) {
    clearTimeout(waitForUser); // clear timer
    locInfoList = document.querySelectorAll("#locationInfo dd"); // store list elements
    positionInfo = [position.coords.longitude, position.coords.latitude, position.coords.altitude]; // store current postion values
    var mapPos = [positionInfo[1], positionInfo[0]]; // current lat, lng for maptiler

    // populate list elements with positionInfo
    for (var i = 0; i < positionInfo.length; i++) {
        if (positionInfo[i] !== null) {
            locInfoList[i].textContent = positionInfo[i];
        } else {
            locInfoList[i].textContent = "Information not available";
        }
    }

    // show map
    // new map object + centered on mapPos coords with zoom 16
    var map = L.map('map').setView(mapPos, 16);

    // adds WebGL metadata to the map object
    var gl = L.mapboxGL({
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
        accessToken: 'not-needed',
        style: 'https://api.maptiler.com/maps/streets/style.json?key=qZjWTwtNTmBxDi3ZpTB5'
    }).addTo(map);

    // adds a pin to the map object
    var marker = L.marker(mapPos).addTo(map);
}

// if timeout: display mapMessage and list textContent
function fail() {
    // displays a message in the map div
    mapMessage.innerHTML = "<p class='userMessage'>Unable to access user location. Check site permissions.</p>";

    // fills list elements
    locInfoList = document.querySelectorAll("#locationInfo dd");
    for (var i = 0; i < locInfoList.length; i++) {
        locInfoList[i].textContent = "Information not available";
    }
}


// page setup
function setupPage() {
    populateDeviceInfo();
    geoTest();
}


// calls the populateDeviceInfo function on page load
window.addEventListener("load", setupPage, false);

