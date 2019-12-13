function vCheck(el){
    if (el.value != null) {
        el.style.background = "ghostwhite";
    }
}

function vState1(el){
    let state = el.value;
    let check = state.search(/^[a-zA-Z][a-zA-Z]$/);
    if (state.length < 2){
    } else {
        if (check < 0) {
            el.value = null;
            el.style.background = "rgba(200, 150, 150, .7)";
            el.placeholder = "invalid state abbreviate, use abbrev like ST";
            el.focus();
        }
        else {
            el.style.background = "ghostwhite";
        }
    }
}

function vState2(el){
    let state = el.value;
    if (state == ""){
        console.log("state = null" + state);
    }
    else {
        let check = state.search(/^[a-zA-Z][a-zA-Z]$/);
        if (check < 0) {
            el.value = null;
            el.style.background = "rgba(200, 150, 150, .7)";
            el.placeholder = "invalid state abbreviate, use abbrev like ST";
            el.focus();
        } else {
            el.style.background = "ghostwhite";
        }
    }
}

function vForm(){
    let valid = true;
    let focus = [];
    let sCity= document.getElementById("startCity");
    let sState= document.getElementById("startState");
    let eCity= document.getElementById("endCity");
    let eState= document.getElementById("endState");

    if (sCity.value == "" || sCity.value  == null){
        focus.push(startCity);
        valid = false;
    }
    if (sState.value == "" || sState.value  == null){
        focus.push(startState);
        valid = false;
    }
    if (eCity.value == "" || eCity.value  == null){
        focus.push(endCity);
        valid = false;
    }
    if (eState.value == "" || eState.value  == null){
        focus.push(endState);
        valid = false;
    }
    for (let i = 0; i < focus.length; i++){
        focus[i].value = null;
        focus[i].style.background = "rgba(200, 150, 150, .7)";
    }
    if (focus.length > 0){
        focus[0].focus();
    }
    return valid;
}

function clearForm(){
    document.getElementById("startCity").style.background = "ghostwhite";
    document.getElementById("startState").style.background = "ghostwhite";
    document.getElementById("endCity").style.background = "ghostwhite";
    document.getElementById("endState").style.background = "ghostwhite";
    document.getElementById("mileage").value = null;
    document.getElementById("startCity").focus();
}

function sendForm() {
    event.preventDefault();
    let sCity = document.getElementById("startCity").value;
    let sState = document.getElementById("startState").value;
    let eCity = document.getElementById("endCity").value;
    let eState = document.getElementById("endState").value;
    if (vForm()) {
        console.log("sendXMLRequest");
        xmlRequester(sCity, sState, eCity, eState);
    }
    return false;
}

function xmlRequester(sCity, sState, eCity, eState){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jObj = JSON.parse(this.responseText);
            document.getElementById("mileageLabel").style.visibility = "visible";
            document.getElementById("mileage").style.visibility = "visible";
            let startText = "From: " + sCity + ", " + sState;
            let endText = "To: " + eCity + ", " + eState;
            let milesText = "Miles: " + jObj.trip.miles;
            let tmodeText = "";
            if (jObj.trip.tmode != null){
                tmodeText = "Modes of Transportation: " + jObj.trip.tmode;
            }
            document.getElementById("mileage").value = startText + "\n"
                + endText + "\n" + milesText + "\n" + tmodeText;
        }
    };
    let query = "?startCity="+sCity+"&startState="+sState+"&endCity="+eCity+"&endState="+eState;
    xhttp.open("GET", ("/cgi-bin/ercanbracks/mileage/mileageAjaxJSON"+query), true);
    xhttp.send();
}

