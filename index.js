var numSquares = 6
var colors = randomColors(numSquares);

var squares = document.querySelectorAll(".square");
var goal = pickedColor();
var headerDisplay = document.getElementById("display");
var displayMessage = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easybtn = document.querySelector("#easyBtn");
var hardbtn = document.querySelector("#hardBtn");

easybtn.addEventListener("click", function() {
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares = 3;
    colors = randomColors(numSquares);
    goal = pickedColor();
    headerDisplay.textContent = goal;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];

        } else {
            squares[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function() {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquares = 3;
    colors = randomColors(numSquares);
    goal = pickedColor();
    headerDisplay.textContent = goal;
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    colors = randomColors(6);
    goal = pickedColor();
    headerDisplay.textContent = goal;
    this.textContent = "New Colors";
    displayMessage.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

headerDisplay.textContent = goal;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var colorClicked = this.style.backgroundColor;

        if (colorClicked === goal) {
            displayMessage.textContent = "Correct!";
            changeColors(colorClicked);
            h1.style.backgroundColor = colorClicked;
            resetButton.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try Again";
            h1.style.backgroundColor = "#232323";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickedColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function randomColors(num) {

    var a = []
    for (var i = 0; i < num; i++) {
        a.push(diffColors());
    }
    return a;
}

function diffColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}