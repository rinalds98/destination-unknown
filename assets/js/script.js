let i = 0
let countries = [
    {
        image : "assets/images/england.jpg",
        country1 : "England",
        country2 : "France",
        answer : "England",
    },
    {
        image : "assets/images/peru.jpg",
        country1 : "Peru",
        country2 : "Argentina",
        answer : "Peru",
    },
    {
        image : "assets/images/japan.jpg",
        country1 : "Japan",
        country2 : "China",
        answer : "Japan",
    },
    {
        image : "assets/images/dolomites.jpg",
        country1 : "Italy",
        country2 : "Germany",
        answer : "Italy",
    },
    {
        image : "assets/images/iceland.jpg",
        country1 : "Iceland",
        country2 : "Norway",
        answer : "Iceland",
    },
]
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") == "next"){
                if (i < countries.length){
                    loader(i);
                }else{
                    alert("finished");
                }
            } else {
                let countryType = this.getAttribute("data-type");
                //alert(`You clicked ${countryType}`);
                checkAnswer(countryType);
            }
        });
    }
})

//This adds an image and text to buttons from the array
    function loader(){
        let image = document.getElementsByClassName("image");
        image[0].setAttribute("src", countries[i].image);
    
        let button = document.getElementsByClassName("btn");
        button[0].innerHTML = countries[i].country1;
        button[0].dataset.type = countries[i].country1;
        button[1].innerHTML = countries[i].country2;
        button[1].dataset.type = countries[i].country2;
    }



//imageLocation = document.getElementsByClassName("imageload");
//let img = document.createElement("img");
//img.setAttribute("src", countries[0].image);
//img.setAttribute("class", "image");
//imageLocation[0].appendChild(img);


function checkAnswer(countryType){
    if (countryType === countries[i].answer){

        alert("YESSSSS");
        i++
        incrementScore();
        loader(i)
    }else{
        alert("NOOOOO");
        i++
        loader(i)
        }
    }

function incrementScore(){
    
}

