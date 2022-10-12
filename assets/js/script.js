document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type" === "next")){
                alert("You clicked Next");
                runQuiz();
            } else {
                let countryType = this.getAttribute("data-type");
                alert(`You clicked ${countryType}`);
                checkAnswer();
            }
        });
    }
})


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
        image : "assets/images/italy.jpg",
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
//This adds an image and text to buttons from the array
let image = document.getElementsByClassName("image");
image[0].setAttribute("src", countries[0].image);

let button = document.getElementsByClassName("btn");
button[0].innerHTML = countries[0].country1;
button[1].innerHTML = countries[0].country2;



//imageLocation = document.getElementsByClassName("imageload");
//let img = document.createElement("img");
//img.setAttribute("src", countries[0].image);
//img.setAttribute("class", "image");
//imageLocation[0].appendChild(img);


function runQuiz(){

}

function checkAnswer(){

}

function incrementScore(){

}

