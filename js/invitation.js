//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
    //declaring the hostname variable to write the hostname to
    var myHostName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
    //This is to  add the input for the host name to our hostname variable using the ID of the hostname field
	myHostName = document.getElementById("hostNameInput").value;
    
	console.log('Variable myRecipientName: ' + myRecipientName);
    //adding a log for our new variable
    console.log('Variable myHostName: ' + myHostName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    //Now we are setting our hostNamePlaceholder within the HTML document to be the typed in data field for the hostname 
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
} 