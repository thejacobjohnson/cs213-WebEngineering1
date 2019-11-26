function part1(){
    let usa = document.getElementById("country_usa");
    let mex = document.getElementById("country_mexico");
    let can = document.getElementById("country_canada");
    let rus = document.getElementById("country_russia");
    let countries = [usa, mex, can, rus];
    var country;
    for (let i = 0; i<countries.length; i++){
        if (countries[i].checked) {
            country = countries[i].value;
        }
    }
    //console.log(country);
    var textBox = document.getElementById("cityOutput");
    xmlRequester(country.toLowerCase(), textBox);
    document.getElementById("cityHeader").innerHTML = ("Ten Largest Cities of " + country);
    textBox.style.width = "300px";
    textBox.style.height = "200px";
    textBox.style.alignSelf = "center";
}

function xmlRequester(country, textBox){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            textBox.innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", ("../assign09/"+ country +".txt"), true);
    xhttp.send();
}

function getJSON(){
    var fileName = document.getElementById("jsonFileName").value;
    var outputField = document.getElementById("jsonOutput");
    //console.log(fileName);
    if (fileName !== 'json.txt' && fileName !== 'json1.txt' ){
        var error = document.createTextNode("Invalid File Name, file does not exist.");
        var para = document.createElement("p");
        para.appendChild(error);
        outputField.innerHTML = "";
        var header = document.getElementById("jsonHeader")
        header.innerHTML = "";
        header.style.height="0px";
        outputField.appendChild(para);
    } else {
        outputField.innerHTML = "";
        xmlRequesterJson(fileName, outputField);
    }
}

function xmlRequesterJson(fileName,outputField){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonString = this.responseText;
            let jsonObj = JSON.parse(jsonString);
            let students = jsonObj.students;
            document.getElementById("jsonHeader").innerHTML = "Student Info";
            for (let i = 0; i < students.length; i++){
                let currStu = students[i];
                //console.log(currStu.address);
                //console.log(currStu.address.zip);
                let stuAdd = currStu.address;
                let lB = document.createElement("br");
                let newDiv = document.createElement("div");
                newDiv.className = "jsonStudents";
                let para = createParaNode("Student Name = " + currStu.first + " " + currStu.last);
                newDiv.appendChild(para);
                newDiv.appendChild(lB);
                para = createParaNode("Address = " + stuAdd.city + " " + stuAdd.state  + " " + stuAdd.zip);
                newDiv.appendChild(para);
                newDiv.appendChild(lB);
                para = createParaNode("Major = " + currStu.major);
                newDiv.appendChild(para);
                newDiv.appendChild(lB);
                para = createParaNode("GPA = " + currStu.gpa);
                newDiv.appendChild(para);
                newDiv.appendChild(lB);
                outputField.appendChild(newDiv);
            }
        }
    };
    xhttp.open("GET", ("../assign09/"+ fileName), true);
    xhttp.send();
}

function createParaNode(textIn){
    let para = document.createElement("p");
    let textNode = document.createTextNode(textIn);
    para.appendChild(textNode);
    return para
}
