
//****************************SLIDESHOW****************************//

var myImage = document.getElementById("backgroundImage");
var imageArray=["images/home.jpg", "images/188085.jpg", "images/lion-1529102.jpg"];
var imageIndex=0;

var def_fdur = 1; // Die Zeit, die der Wechsel dauern soll
var def_steps=20; // Die Anzahl der Schritte, in denen von 100-0 überblendet werden soll; Je höher, desto fließender der Wechsel 


function changeImage()
{
     backgroundImage.setAttribute("src", imageArray[imageIndex]);
     speed: 1000;
     imageIndex++;
     if (imageIndex >= imageArray.length) {
         imageIndex=0;
     }
}


var intervalHandle = setInterval(changeImage, 5000);

backgroundImage.onclick=function() {
    clearInterval(intervalHandle);
}