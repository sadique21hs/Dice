var randomnumber1= Math.floor(Math.random()*6) + 1;

var randomImages="dice"+randomnumber1+".png";

var randomImagesSource="Images/"+randomImages;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImagesSource);


var randomnumber2= Math.floor(Math.random()*6) + 1;

var randomImages="dice"+randomnumber2+".png";

