var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak(); 
    }
}
function speak(){
    var synth=window.speechSynthesis;
    //speek_data=document.getElementById("textbox").value;
    speek_data="Taking your selfie in 5 seconds";
    var utter_this=new SpeechSynthesisUtterance(speek_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });
 camera=document.getElementById("camera");
 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("resulst").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
     });
 }
 function save(){
     link=document.getElementById("link");
     image=document.getElementById("selfie_image").src;
     link.href=image;
     link.click();
 }