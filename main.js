var song=""
var leftWristX=""
var leftWristY=""
var rightWristX=""
var rightWristY=""
function preload(){
song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(350,150);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("model is loaded");
}
function draw(){
    image(video,0,0,600,500)
}

function stop(){
    song.stop();
}
function play(){
    song.play();
    song.setVolume(1)
    song.rate(1)
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        leftWristX=result[0].pose.leftWrist.x;
        leftWristY=result[0].pose.leftWrist.y;
        rightWristX=result[0].pose.rightWrist.x;
        rightWristY=result[0].pose.rightWrist.y;
        
        console.log(leftWristX);
        console.log(leftWristY);
        console.log(rightWristX);
        console.log(rightWristY);




    }
}