function validatePhone(){

    let phone =
    document.getElementById("phone").value;

    if(phone.length < 10){

        alert("Invalid phone number");
    }
}

function showFee(){

    let fee =
    document.getElementById("eventType").value;

    document.getElementById(
        "feeDisplay"
    ).innerHTML =
    "Event Fee: Rs." + fee;
}

function submitForm(){

    document.getElementById(
        "outputMessage"
    ).innerHTML =
    "Registration Successful";
}

function countCharacters(){

    let text =
    document.getElementById(
        "feedback"
    ).value;

    document.getElementById(
        "charCount"
    ).innerHTML =
    "Characters: " + text.length;
}

function videoReady(){

    document.getElementById(
        "videoMessage"
    ).innerHTML =
    "Video ready to play";
}

function warningMessage(){

    return "Form not submitted. Leave page?";
}

function savePreference(){

    let eventType =
    document.getElementById(
        "eventType"
    ).value;

    localStorage.setItem(
        "preferredEvent",
        eventType
    );

    sessionStorage.setItem(
        "sessionEvent",
        eventType
    );

    alert("Preference Saved");
}

window.onload = function(){

    let saved =
    localStorage.getItem(
        "preferredEvent"
    );

    if(saved){

        document.getElementById(
            "eventType"
        ).value = saved;
    }
}

function clearPreferences(){

    localStorage.clear();

    sessionStorage.clear();

    alert("Preferences Cleared");
}

function findLocation(){

    navigator.geolocation.getCurrentPosition(

        success,
        error,

        {
            enableHighAccuracy:true,
            timeout:5000
        }
    );
}

function success(position){

    document.getElementById(
        "location"
    ).innerHTML =

    "Latitude: " +
    position.coords.latitude +

    "<br>Longitude: " +

    position.coords.longitude;
}

function error(err){

    alert(
        "Error: " + err.message
    );
}