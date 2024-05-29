function rockFunc() {
    let numA = Math.floor(Math.random() * 3);
    let rockString = "Rock";
    const RPSarr = ['Rock', 'Paper', 'Scissors'];
    document.getElementById("Display1").innerHTML = RPSarr[numA];
    document.getElementById("userDisplay").innerHTML = "Rock";
let stringA = RPSarr[numA];
if (stringA === rockString) {
document.getElementById("displayResult").innerHTML = "It's a Tie!";
    }
   else if (stringA === "Paper") {
        document.getElementById("displayResult").innerHTML = "The Computer Won.";
    }
    else if (stringA === "Scissors") {
        document.getElementById("displayResult").innerHTML = "You win!";
    }


}
function paperFunc() {
    let numA = Math.floor(Math.random() * 3);
    let paperString = "Paper";
    const RPSarr = ['Rock', 'Paper', 'Scissors'];
    document.getElementById("Display1").innerHTML = RPSarr[numA];
    document.getElementById("userDisplay").innerHTML = "Paper";
    let stringA = RPSarr[numA];
    if (stringA === paperString) {
        document.getElementById("displayResult").innerHTML = "It's a Tie!";
    }
    else if (stringA === "Scissors") {
        document.getElementById("displayResult").innerHTML = "The Computer Won.";
    }
    else if (stringA === "Rock") {
        document.getElementById("displayResult").innerHTML = "You win!";
    }
}

function scissorsFunc() {
    const RPSarr = ['Rock', 'Paper', 'Scissors'];
    let numA = Math.floor(Math.random() * 3);
    let scissorsString = "Scissors"
    let stringA = RPSarr[numA];
    document.getElementById("Display1").innerHTML = RPSarr[numA];
    document.getElementById("userDisplay").innerHTML = "Scissors";
    if (stringA === scissorsString) {
        document.getElementById("displayResult").innerHTML = "It's a Tie!";
    }
    else if (stringA === "Rock") {
        document.getElementById("displayResult").innerHTML = "The Computer Won.";
    }
    else if (stringA === "Paper") {
        document.getElementById("displayResult").innerHTML = "You win!";
    }

}

