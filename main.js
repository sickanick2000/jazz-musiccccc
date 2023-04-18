 song = "";
 song2 = "";
status1 = "";
leftWristScore = 0;
rightWristScore = 0;
 leftWristX = 0;
 leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
 
 function setup()
{
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();   

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 550, 500);
    song1.isPlaying(status1)  
    if(leftWristScore > 0.2)
    {
    circle(leftWristX,leftWristY,20);
    song2.stop();
}
if(status1 = false)
{
    song.play();
    song.setVolume(1);
    song.rate(1); 
}else{
    console.log(error);
}
   circle(rightWristX, rightWristY, 20);
    
   

}

function preload()
{
    song = loadSound("tokyovainia.mp3")
    song2 = loadSound("deviloavana.mp3")
}

function play2()
{
    song2.play();
    song2.setVolume
}




function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

  
}

function modelLoaded()
{
    console.log("model is loaded =)")
}

function gotPoses()
{
    if(results.length > 0)
    {
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = "+ scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);
        
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
    }
    
}