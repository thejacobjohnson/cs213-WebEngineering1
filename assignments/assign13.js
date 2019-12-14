function vCheck(el){
    if (el.value != null) {
        el.style.background = "ghostwhite";
    }
}

function vPType(el){
    if(el.value == "Duet"){
        document.getElementById("student2").style.display="flex";
    } else{
        document.getElementById("student2").style.display="none";
    }
}

function vForm(r,f,l,s){
    let valid = true;
    let focus = [];
    let room = document.getElementById("room");
    let fName= document.getElementById("first_name");
    let lName= document.getElementById("last_name");
    let sID= document.getElementById("student_id");
    let fName2 = document.getElementById("first_name_2");
    let lName2 = document.getElementById("last_name_2");
    let sID2 = document.getElementById("student_id_2");
    let stud2 = document.getElementById("student2");
    if (room.value == "" || room.value  == null){
        focus.push(room);
        valid = false;
    }
    if (fName.value == "" || fName.value  == null){
        focus.push(fName);
        valid = false;
    }
    if (lName.value == "" || lName.value  == null){
        focus.push(lName);
        valid = false;
    }
    if (sID.value == "" || sID.value  == null){
        focus.push(sID);
        valid = false;
    }
    if (stud2.style.display == "flex") {
        if (fName2.value == "" || fName2.value == null) {
            focus.push(fName2);
            valid = false;
        }
        if (lName2.value == "" || lName2.value == null) {
            focus.push(lName2);
            valid = false;
        }
        if (sID2.value == "" || sID2.value == null) {
            focus.push(sID2);
            valid = false;
        }
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

function regStudent(){
    let perf = document.getElementById("performance").value;
    let loc = document.getElementById("location").value;
    let room= document.getElementById("room").value;
    let time = document.getElementById("time_slot").value;
    let fName= document.getElementById("first_name").value;
    let lName= document.getElementById("last_name").value;
    let sID= document.getElementById("student_id").value;
    let skill = document.getElementById("skill").value;
    let instrument = document.getElementById("instrument").value;
    let fName2 = document.getElementById("first_name_2").value;
    let lName2 = document.getElementById("last_name_2").value;
    let sID2 = document.getElementById("student_id_2").value;
    let skill2 = document.getElementById("skill_2").value;
    let instrument2 = document.getElementById("instrument_2").value;
    let dataString = "performance="+perf+"&location="+loc+"&room="+room+"&time_slot="+time+
        "&first_name="+fName+"&last_name="+lName+"&student_id="+sID+"&skill="+skill+"&instrument="+instrument+
        "&first_name2="+fName2+"&last_name2="+lName2+"&student_id2="+sID2+"&skill2="+skill2+"&instrument2="+instrument2;
    if (vForm(room, fName, lName, sID)){
        sendtoPHP(dataString);
    }
}

function clearForm(){
    let room= document.getElementById("room");
    room.style.background = "ghostwhite";
    let fName= document.getElementById("first_name");
    fName.style.background = "ghostwhite";
    let lName= document.getElementById("last_name");
    lName.style.background = "ghostwhite";
    let sID = document.getElementById("student_id");
    sID.style.background = "ghostwhite";
    document.getElementById("room").focus();
}

function sendtoPHP(data){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("results-box").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("POST", "assign13.php?" + data, true);
    xmlhttp.send();
}

function loadData(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("results-box").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("POST", "assign13.php?getFile=true", true);
    xmlhttp.send();
}
