let video = document.getElelmentById("myVedio");
let button = document.getElementById("myButton");

function myFunctionButtonById(){
    if (video.paused) {
        video.play();
        button.innerHTML = "pause";
    }
    else{
        video.pause();
        button.innrHTML = "play";
    }
}