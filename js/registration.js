var mycookies = [];
var url = window.location.href;

function setCookie(){
    
    mycookies["User Name"]=document.getElementById("userName").value;
    mycookies["Password"]=document.getElementById("password").value;
    mycookies["First Name"]=document.getElementById("firstName").value;
    mycookies["Last Name"]=document.getElementById("lastName").value;
    mycookies["Email"]=document.getElementById("Email").value;
    mycookies["Phone Number"]=document.getElementById("phoneNumber").value;
    mycookies["Newsletter"]=document.getElementById("signUpNewsletter").value;
    document.cookie = "";
    var cookieString = "";
    for(var key in mycookies){
        cookieString = key + "=" + mycookies[key];
        document.cookie = cookieString;
    }
    document.getElementById("confirmRoot").innerHTML=cookieString;
}

function display() {
    var key = [];
    var value = [];
    var string1 = url.split("?")[1].split("&");
    for(var initialVar of string1) {
        var str = initialVar.split("=");
        key.push(str[0]);
        value.push(str[1]);
    }
    var counter = key.length;
    var displayString = "";
    for(var initialVar = 0; initialVar < counter; initialVar++) {
        displayString += key[initialVar] + ':' + value[initialVar] + '<br/>';
    }
    document.getElementById("confirmRoot").innerHTML = displayString;
}

console.log(url);