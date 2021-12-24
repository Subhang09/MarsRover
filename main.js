canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
Nasa=["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber);
rover_width=100;
rover_height=90;
backgroundImage=Nasa[randomNumber];
rover_image="rover.png";
rover_X=10
rover_Y=10
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=backgroundImage

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}   
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed == "38"){
    up();
    console.log("up");
}
if (keyPressed == "39"){
    right();
    console.log("right");
}
if (keyPressed == "40"){
down();
console.log("down");
}
if (keyPressed == "37"){
    left();
    console.log("left");
}
}
function up(){
    if (rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("when up arrow is pressed, x= "+rover_X+"y= "+rover_Y);
        uploadBackground();
       uploadRover(); 
    }
}
function down(){
    if (rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("when down arrow is pressed, x= "+rover_X+"y= "+rover_Y);
        uploadBackground();
       uploadRover(); 
    }
}
function left(){
    if (rover_X>=0){
        rover_X=rover_X-10;
        console.log("when left arrow is pressed, x= "+rover_X+"y= "+rover_Y);
        uploadBackground();
       uploadRover(); 
    }
}
function right(){
    if (rover_X<=700){
        rover_X=rover_X+10;
        console.log("when right arrow is pressed, x= "+rover_X+"y= "+rover_Y);
        uploadBackground();
       uploadRover(); 
    }
}