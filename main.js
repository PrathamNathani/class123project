var left_wrist = 0;
var right_wrist = 0;
var nose_x = 0;
var nose_y = 0;
var difference = 0;

function setup(){
canvas=createCanvas(600,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function draw(){
image(VIDEO,0,0,600,600)
background("black");
document.getElementById("font_size").innerHTML="The size of the font is = "+difference+ " px " ;
fill("red");
stroke("#39ff14");
textSize(difference);
text('Pratham', nose_x, nose_y);
}

function modelLoaded(){
    console.log("Model Is Loaded");
}

function gotposes(result){
        if(result.length>0){
            console.log(result);
            nose_x=result[0].pose.nose.x;
            nose_y=result[0].pose.nose.y;
            console.log("nose x ="+nose_x + "and nose y ="+nose_y);

            left_wrist=result[0].pose.leftWrist.x;
            right_wrist=result[0].pose.rightWrist.y;
            console.log("left wrist = " + left_wrist + "and right wrist = " + right_wrist);
            difference=floor(left_wrist-right_wrist);
            console.log("the side of the font is" + difference);
        }

}