// Math.floor(Math.random()*6) Returns a random integer from 0 to 5, we need 1 to 6 so we added 1:

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var img1src = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
document.querySelectorAll("img")[0].setAttribute("src", img1src);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var img2src = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
document.querySelectorAll("img")[1].setAttribute("src", img2src);

if(randomNumber1>randomNumber2){
  document.getElementById("heading").innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.getElementById("heading").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.getElementById("heading").innerHTML = "Match is Draw";
}
