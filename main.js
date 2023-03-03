 song = "";
 
 function setup()
{
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();   
}

function draw()
{
    image(video, 0, 0, 550, 500);
}

function preload()
{
    song = loadSound("tokyovainia.mp3")
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}