// --------------тоглогчийн ээлж хадгалах тоглогч 1=0 2=1
var activaPlayer = 1;
// ------------------цуглуулсан оноо хадгала
var scores = [0, 0];
// -----------ээлжиндээ цуглуулж байгаа оноог хадгалах
var roundScore = 0;
// --------шооны аль талаараа буусанг 1-6 санамсаргүй
var diceNumber = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContent = dice;

// --------------------Программ эхлэхэд бэлдэх
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
//-------------------------------------------------//
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  //   alert("Шоо буулаа: " + diceNumber);
});
