window.onload = rotate;

var counter = 0;
var images = new Array("images/banner1.jpg","images/banner2.jpg","images/banner3.jpg")
//Function to rotate images
function rotate() {
    //counter to keep track of array index
    counter++;
    //if statement to check if counter is at the max value of the array length
    if(counter == images.length){
        counter = 0;
    }
    document.getElementById("Art").src = images[counter];
    
    setTimeout("rotate()", 3 * 1000);
}