// Global variable for looping through different quiz questions

let i = 0

// Global array of quiz questions

let countries = [
    {
        image : "assets/images/england.jpg",
        country1 : "England",
        country2 : "France",
        answer : "England",
    },
    {
        image : "assets/images/peru.jpg",
        country1 : "Argentina",
        country2 : "Peru",
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

// Adds event listeners to buttons and calls a function when a certain button is selected

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
                checkAnswer(countryType);
            }
        });
    }
    loader();
})

// This adds an image and text to buttons from the array

    function loader(){
        let image = document.getElementsByClassName("image");
        image[0].setAttribute("src", countries[i].image);
    
        let button = document.getElementsByClassName("btn");
        button[0].innerHTML = countries[i].country1;
        button[0].dataset.type = countries[i].country1;
        button[1].innerHTML = countries[i].country2;
        button[1].dataset.type = countries[i].country2;
    }

// Checks the answer the user selected

function checkAnswer(countryType){
    if (countryType === countries[i].answer){

        alert("YESSSSS");
        i++
        incrementScore();
        loader(i)
    }else{
        alert("NOOOOO");
        i++
        incrementWrongAnswer();
        loader(i)
        }
    }

// Increments the score if the user selected the correct answer

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText)
     document.getElementById("score").innerText = ++oldScore;
    
}

// Increments the score if the user selected the correct answer

function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore;
}

