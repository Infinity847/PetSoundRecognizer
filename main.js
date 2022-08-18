console.log('ml5 version:', ml5.version);
var percent;
function gotResults(error, result) 
{
    //label[0].results
    if (error) 
    {
        console.error(error);
    } 
    else 
    {
        percent = result[0].confidence * 100;
        document.getElementById("result").innerHTML =  "SOUND : "+result[0].label;
        document.getElementById("accuracy").innerHTML = "ACCURACY : " + Math.floor(percent) + "%";
    }
}

navigator.mediaDevices.getUserMedia({ audio: true });

function modelLoaded() 
{
    console.log('MODEL LOADED!');
}
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kQwl6T8to/model.json', modelLoaded);

function check() 
{

    classifier.classify(gotResults);
}
