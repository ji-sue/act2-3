// Start coding here ...
// Your code must be in Switch-case statement
// You can browse your previous Rock, Scissor and Paper code.
// You can do it! Keep going!


var randomPicture1 = Math.floor(Math.random() * 6) + 1;
console.log(randomPicture1);

// step 2: Creating variable called "randomImage"
// rsp1 = ROCK rsp2 = SCISSOR rsp3 = PAPER
var randomImage = "d" + randomPicture1 + ".png";
console.log(randomImage);

// step 3: adding the source value in our image
var randomImageSource = "images/" + randomImage; //this is the destination folder
console.log(randomImageSource);

// step 4: dom manipulation for the image path
var image1 = document.querySelectorAll("img")[0];

// step 5: changing the image attribute
image1.setAttribute('src', randomImageSource);

// step 1: Randomizing images
var randomPicture2 = Math.floor(Math.random() * 6) + 1;
console.log(randomPicture2);

// step 2: Creating variable called "randomImage"
// rsp1 = ROCK rsp2 = SCISSOR rsp3 = PAPER
var randomImage1 = "d" + randomPicture2 + ".png";
console.log(randomImage1);

// step 3: adding the source value in our image
var randomImageSource1 = "images/" + randomImage1; //this is the destination folder
console.log(randomImageSource1);

// step 4: dom manipulation for the image path
var image2 = document.querySelectorAll("img")[1];

// step 5: changing the image attribute
image2.setAttribute('src', randomImageSource1);

// ----------------condition code
var d1, d1, d3, d4, d5, d6;
d1 = "d1.png"
d2 = "d2.png"
d3 = "d3.png"
d4 = "d4.png"
d5 = "d5.png"
d6 = "d6.png"


// step1: winner
// rock wins?
switch (true) {
    case (randomImage === d1 && randomImage1 === d2):
        document.querySelector("h1").innerHTML = "Dice 2 Wins!";
        break;
    case (randomImage === d1 && randomImage1 === d3):
        document.querySelector("h1").innerHTML = "Dice 3 Wins!";
        break;
    case (randomImage === d1 && randomImage1 === d4):
        document.querySelector("h1").innerHTML = "Dice 4 Wins!";
        break;
    case (randomImage === d1 && randomImage1 === d5):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d1 && randomImage1 === d6):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d2 && randomImage1 === d3):
        document.querySelector("h1").innerHTML = "Dice 3 Wins!";
        break;
    case (randomImage === d2 && randomImage1 === d4):
        document.querySelector("h1").innerHTML = "Dice 4 Wins!";
        break;
    case (randomImage === d2 && randomImage1 === d5):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d2 && randomImage1 === d6):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d3 && randomImage1 === d4):
        document.querySelector("h1").innerHTML = "Dice 4 Wins!";
        break;
    case (randomImage === d3 && randomImage1 === d5):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d3 && randomImage1 === d6):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d4 && randomImage1 === d5):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d4 && randomImage1 === d6):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d5 && randomImage1 === d6):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
        //=========================================================
        case (randomImage === d2 && randomImage1 === d1):
        document.querySelector("h1").innerHTML = "Dice 2 Wins!";
        break;
    case (randomImage === d3 && randomImage1 === d1):
        document.querySelector("h1").innerHTML = "Dice 3 Wins!";
        break;
    case (randomImage === d4 && randomImage1 === d1):
        document.querySelector("h1").innerHTML = "Dice 4 Wins!";
        break;
    case (randomImage === d5 && randomImage1 === d1):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d6 && randomImage1 === d1):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d3 && randomImage1 === d2):
        document.querySelector("h1").innerHTML = "Dice 3 Wins!";
        break;
    case (randomImage === d4 && randomImage1 === d2):
        document.querySelector("h1").innerHTML = "Dice 4 Wins!";
        break;
    case (randomImage === d5 && randomImage1 === d2):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d6 && randomImage1 === d2):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d4 && randomImage1 === d3):
        document.querySelector("h1").innerHTML = "Dice 4 Wins!";
        break;
    case (randomImage === d5 && randomImage1 === d3):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d6 && randomImage1 === d3):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d5 && randomImage1 === d4):
        document.querySelector("h1").innerHTML = "Dice 5 Wins!";
        break;
    case (randomImage === d6 && randomImage1 === d4):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    case (randomImage === d6 && randomImage1 === d5):
        document.querySelector("h1").innerHTML = "Dice 6 Wins!";
        break;
    default:
        document.querySelector("h1").innerHTML = "DRAW!";
        break;
}




