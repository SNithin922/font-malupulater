leftwristX = 0;
rightwristX = 0;
difference = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(700,150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('posenet is initialized');

}
function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        console.log(leftwristX,rightwristX)
        difference = floor(leftwristX-rightwristX);
        console.log(difference);
    }
}
function draw()
{
    background('#D2042D');
    textSize(difference);
    fill("#2ae8e2");
    text('S Nithin',50,400)
}