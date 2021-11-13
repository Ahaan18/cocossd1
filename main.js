imag1e = "";
status1 = "";
function preload(){
    imag1e = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    x = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(imag1e, 0, 0, 640, 420);
    fill('orange');
    noFill();
    stroke('orange');
    rect(100, 60, 350, 250);
    text("Dog", 110, 80);
    fill('orange');
    noFill();
    stroke('green');
    rect(300, 60, 270, 350);
    text("Cat", 310, 80);
}
function modelLoaded(){
    console.log("cocossd has loaded!");
    status1 = true;
    x.detect(imag1e, detectedObject);
}
function detectedObject(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
}