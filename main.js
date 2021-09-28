var song=""
function preload(){
song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(350,150);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500)
}








function stop(){
    song.stop();
}
function play(){
    song.play();
}