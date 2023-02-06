var randomNumber;

function clickBtn() {
    randomNumber = Math.floor(Math.random()*6)+1;
    document.getElementById("roll1").innerHTML = randomNumber;
    randomNumber = Math.floor(Math.random()*6)+1;
    document.getElementById("roll2").innerHTML = randomNumber;
    randomNumber = Math.floor(Math.random()*6)+1;
    document.getElementById("roll3").innerHTML = randomNumber;
    randomNumber = Math.floor(Math.random()*6)+1;
    document.getElementById("roll4").innerHTML = randomNumber;
    randomNumber = Math.floor(Math.random()*6)+1;
    document.getElementById("roll5").innerHTML = randomNumber;
};
