var song=""
var leftWristX=""
var leftWristY=""
var rightWristX=""
var rightWristY=""
var rightWrist_score=""
var leftWrist_score=""
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
    fill("red")
    circle(leftWristX,leftWristY,30)
    circle(rightWristX,rightWristY,30)
    if(leftWrist_score >0.2){
        number_leftWristY=Number(leftWristY)
        round_leftWristY=floor(number_leftWristY);
        volume=round_leftWristY/500;
        document.getElementById("volume").innerHTML=volume;
        song.setVolume(volume);
    }
    if(rightWrist_score >0.2){
        if(rightWristY >0 && rightWristY<=100){
            song.rate(.5)
            document.getElementById("speed").innerHTML=".5x"
        }
        else if(rightWristY>100 && rightWristY<=200){
            song.rate(1)
            document.getElementById("speed").innerHTML="1x"
        }
        else if(rightWristY>200 && rightWristY<=300){
            song.rate(1.5)
            document.getElementById("speed").innerHTML="1.5x"
        }
        else if(rightWristY>300 && rightWristY<=400){
            song.rate(2)
            document.getElementById("speed").innerHTML="2x"
        }
        else if(rightWristY>40000 && rightWristY<=500){
            song.rate(2.5)
            document.getElementById("speed").innerHTML="2.5x"
        }
    }
   
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
        leftWrist_score=result[0].pose.keypoints[9].score;
        rightWrist_score=result[0].pose.keypoints[10].score;
    }
    
}