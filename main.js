function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mdPnWTu2z/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    } else
    {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Som detectado de - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Cachorro detectado - '+dog+ 'Gato detectado - '+cat+ 'Leão detectado - '+lion+ 'Vaca detectada'+cow;
        document.getElementById ("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById ("result_count").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";


        img = document.getElementById('animal_image');

        if(results[0].label == "Latido"){
            img.src = 'cachorro_latido.webp';
            dog = dog+1;
        }  else if(results[0].label == "Miado"){
            img.src = 'gato_miado.png';
            cat = cat + 1;
        }else if(results[0].label == "Mugido"){
            img.src = 'vaca-mugido.jpg';
            cow = cow + 1;
        }
        else if(results[0].label == "Rugido"){
            img.src = 'leao-rugido.webp';
            lion = lion + 1;
        } else{
            img.src = 'listen.gif';
        }
    }       
}