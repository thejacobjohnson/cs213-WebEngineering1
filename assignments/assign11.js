invalid = "rgba(200, 20, 20, .5)";

function vPhone(){
    let phone = document.getElementById("phone").value;
    let check = phone.search(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/);
    if (phone.length !== 12 || check == null) {
        document.getElementById("phone").value = null;
        document.getElementById("phone").style.background = invalid;
        document.getElementById("phone").focus();
    }
    else {
        document.getElementById("phone").style.background = "ghostwhite";
    }
}

function vCardNumber(){
    let cardNum = document.getElementById("credit_card").value;
    let check = cardNum.search(/^[0-9]{16}$/);
    if (cardNum.length !== 16 || check == null) {
        document.getElementById("credit_card").value = null;
        document.getElementById("credit_card").style.background = invalid;
        document.getElementById("credit_card").focus();
    }
    else {
        document.getElementById("credit_card").style.background = "ghostwhite";
    }
}

function vExpDate(){
    let eDate = document.getElementById("exp_date").value;
    let check = eDate.search(/^(0?[1-9]|1[012])\/([2-9][0-9][1][8-9]|[2-9][0-9][2-9][0-9])$/);
    if (check == null || check < 0) {
        document.getElementById("exp_date").value = null;
        document.getElementById("exp_date").style.background = invalid;
        document.getElementById("exp_date").focus();
    }
    else {
        document.getElementById("exp_date").style.background = "ghostwhite";
    }
}

function vForm() {
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let ccard = document.getElementById("credit_card").value;
    let exp = document.getElementById("exp_date").value;
    let focus = [];
    let valid = true;

    if (fname == "" || fname == null) {
        document.getElementById("first_name").value = null;
        document.getElementById("first_name").style.background = invalid;
        focus.push("first_name");
        valid = false;
    } else {
        document.getElementById("first_name").style.background = "ghostwhite";
    }
    if (lname == "" || lname == null) {
        document.getElementById("last_name").value = null;
        document.getElementById("last_name").style.background = invalid;
        focus.push("last_name");
        valid = false;
    } else {
        document.getElementById("last_name").style.background = "ghostwhite";
    }
    if (phone == "" || phone == null) {
        document.getElementById("phone").value = null;
        document.getElementById("phone").style.background = invalid;
        focus.push("phone");
        valid = false;
    } else {
        document.getElementById("phone").style.background = "ghostwhite";
    }
    if (address == "" || address == null) {
        document.getElementById("address").value = null;
        document.getElementById("address").style.background = invalid;
        focus.push("address");
        valid = false;
    } else {
        document.getElementById("address").style.background = "ghostwhite";
    }
    if (ccard == "" || ccard == null) {
        document.getElementById("credit_card").value = null;
        document.getElementById("credit_card").style.background = invalid;
        focus.push("credit_card");
        valid = false;
    } else {
        document.getElementById("credit_card").style.background = "ghostwhite";
    }
    if (exp == "" || exp == null) {
        document.getElementById("exp_date").value = null;
        document.getElementById("exp_date").style.background = invalid;
        focus.push("exp_date");
        valid = false;
    } else {
        document.getElementById("exp_date").style.background = "ghostwhite";
    }
    if(focus[0] != null){document.getElementById(focus[0]).focus();}
    if(valid == true) {}
    return valid;
}

function vCheck(el){
    if (el.value != null){
        el.style.background = "ghostwhite";
    }
}

function calcTotal() {
    let table = document.getElementById("for_sale");
    let checkboxes = document.getElementsByName("item[]");
    let total = 0;
    let curr = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            let idname = checkboxes[i].value.toLowerCase();
            idname  = "v" + idname;
            //console.log("idname = " + idname);
            curr = document.getElementById(idname).value;
            //console.log("curr = " + curr);
            total += Number(curr);
        }
    }
    document.getElementById("total").value = total.toFixed(2);
}

function clearForm(){
    document.getElementById("exp_date").style.background = "ghostwhite";
    document.getElementById("credit_card").style.background = "ghostwhite";
    document.getElementById("phone").style.background = "ghostwhite";
    document.getElementById("address").style.background = "ghostwhite";
    document.getElementById("last_name").style.background = "ghostwhite";
    document.getElementById("first_name").style.background = "ghostwhite";
    document.getElementById("first_name").focus();
}