function validate() {
    // Creating regex for username, firstname, lastname and phone number
    usernameFormat = "^[a-z A-Z0-9]+$";
    //allow only lower and uppercase alphabets , space and number
    nameFormat = "^[a-z A-Z]+$";
    //allow lower and upper case characters and space
    phonenoFormat = "^[1-9][0-9]{9}$";
    //Allow only digits but first digit can not be 0 and rest can be between 0-9 and total should not be exceed 10
    
var username = document.getElementsByName('userName')[0].value;
var password = document.getElementsByName('password')[0].value;
var vpassword = document.getElementsByName('passwordVerify')[0].value;
var firstname = document.getElementsByName('firstName')[0].value;
var lastname = document.getElementsByName('lastName')[0].value;
var email = document.getElementsByName('email')[0].value;
var phoneNumber = document.getElementsByName('phoneNumber')[0].value;
var newsletter = document.getElementsByName('signUpNewsletter');
    
//If username is empty
if (username == "" ) {
    document.getElementById('erroruserName').innerHTML = 'Username can\'t be empty.';
    return false;
}
    
//If username does not match the respective regex
if(!username.match(usernameFormat) ) {
    document.getElementById('erroruserName').innerHTML = 'Invalid Username.';
    return false;
}
    
//If password length is less than 8 or empty
if(password.length <8 || password=="") {
    document.getElementById('errorpassword').innerHTML = 'Password length should be at least 8.';
    return false;
 }
    
 //If confirm password length is less than 8 or empty
if(vpassword.length <8 || vpassword=="") {
    document.getElementById('errorpasswordVerify').innerHTML = 'Confirm Password length should be atleast 8.';
    return false;
}
    
//If password and cofirm password both are not same
if(vpassword != password) {
    document.getElementById('errorpasswordVerify').innerHTML = 'Confirm password should be same as Password.';
    return false;
}
    
//If firstname is empty
if (firstname == '' ) {
    document.getElementById('errorfirstName').innerHTML = 'First Name can\'t be empty.';
    return false;
}
    
//If firstname does not match the name regex
if(!firstname.match(nameFormat) ) {
    document.getElementById('errorfirstName').innerHTML = 'Invalid First Name.';
    return false;
}
    
//If lastname is empty
if (lastname == '' ) {
    document.getElementById('errorlastName').innerHTML = 'Last Name can\'t be empty.';
    return false;
}
    
//If last name does not match the name regex
if(!lastname.match(nameFormat) ) {
    document.getElementById('errorlastName').innerHTML = 'Invalid Last Name.';
    return false;
}
    
//If email field is empty
if (email == '' ) {
    document.getElementById('erroremail').innerHTML = 'Email can\'t be empty.';
    return false;
}
    
//If email does not contain @ anywhere
if (email.indexOf("@", 0) < 0) {
    document.getElementById('erroremail').innerHTML = 'Invalid Email format.';
    return false;
}
    
//IF . is not present anywhere
if (email.indexOf(".", 0) < 0) {
    document.getElementById('erroremail').innerHTML = 'Invalid Email format.';
    return false
}
    
//If phone number is empty
if (phoneNumber == '' ) {
    document.getElementById('errorphoneNumber').innerHTML = 'Phone Number can\'t   be empty.';
    return false;
}
    
//If phone number does not match the phone regex
if(!phoneNumber.match(phonenoFormat)) {
    document.getElementById('errorphoneNumber').innerHTML = 'Invalid Phone Number.';
    return false;
 }
    
 //if either of the radio button is not clciked
 if ((signUpNewsletter[0].checked == false ) && (signUpNewsletter[1].checked == false ) ) {
    document.getElementById('errorsignUpNewsletter').innerHTML = 'Invalid Phone Number.';
    return false;
 }
//IF script return false then that means validation is not successful and confirmation.php page will not load.
}