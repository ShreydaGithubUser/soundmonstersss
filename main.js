function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady () {
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
console.log(results);
random_num_r = Math.floor(Math.random()*255)+1;
random_num_g = Math.floor(Math.random()*255)+1;
random_num_b = Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML = 'I can Hear -' + results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2) + "%";
document.getElementById("result_label").style.color = "rgb("+random_num_r + ","+random_num_g+","+random_num_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_num_r + ","+random_num_g+","+random_num_b+")";
dancing_monster1 = document.getElementById("alien1")
dancing_monster2 = document.getElementById("alien2")
dancing_monster3 = document.getElementById("alien3")
dancing_monster4 = document.getElementById("alien4")
if (results[0].label == "Clap") {
    dancing_monster1.src = 'aliens-01.gif';
    dancing_monster2.src = 'aliens-02.png';
    dancing_monster3.src = 'aliens-03.png';
    dancing_monster4.src = 'aliens-04.png';

}
else if (results[0].label == "Snapping") {
    dancing_monster1.src = 'aliens-01.png';
    dancing_monster2.src = 'aliens-02.gif';
    dancing_monster3.src = 'aliens-03.png';
    dancing_monster4.src = 'aliens-04.png';
}
else if (results[0].label == "Bell") {
    dancing_monster1.src = 'aliens-01.png';
    dancing_monster2.src = 'aliens-02.png';
    dancing_monster3.src = 'aliens-03.gif';
    dancing_monster4.src = 'aliens-04.png';
}
else {
    dancing_monster1.src = 'aliens-01.png';
    dancing_monster2.src = 'aliens-02.png';
    dancing_monster3.src = 'aliens-03.png';
    dancing_monster4.src = 'aliens-04.gif';
}
    }
}