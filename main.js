function Validate() {
    var valemail = document.mailvalid.mail;
    var valphone = document.phonevalid.tel;
    var valdate = document.datevalid.szul;
    if (ValidateEmail(valemail)) {
        if (PhoneNumber(valphone)) {
            if (DateNumber(valdate)) {

            }
        }
    }

    return false;
}

function ValidateEmail(valemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valemail.value.match(mailformat)) {
        alert("Az email cím helyes!");
        return true;
    }
    else {
        alert("Kérlek figyelj az email megfelelő formátumára!");
        valemail.focus();
        return false;
    }
}

function PhoneNumber(valphone) {
    var phoneformat = /^\+?([0-9]{2})\)?[-. ]?([2;3;7]{1})([0]{1})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (valphone.value.match(phoneformat)) {
        alert("A telefonszám helyes!")
        return true;
    }
    else {
        alert("Kérlek figyelj az telefonszám megfelelő formátumára! +xx xx xxx xxxx");
        valphone.focus();
        return false;
    }
}

function DateNumber(valdate) {
    var dateformat = /^\+?([1;2]{1})\)?([0-9]{3})\)?[/](0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])$/;
    if (valdate.value.match(dateformat)) {
        alert("A dátum helyes!")
        return true;
    }
    else {
        alert("Kérlek adj meg helyes dátumot! A megfelelő formátum: éééé/hh/nn");
        valdate.focus();
        return false;
    }
}



