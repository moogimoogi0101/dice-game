// --------------тоглогчийн ээлж хадгалах тоглогч 1=0 2=1
var activePlayer = 0;
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

//шоог шидэх эвент листэнэр

document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй тоо
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //   шооны зургийг веб дээр гаргаж ирнэ
  diceDom.style.display = "block";
  //   буусан тоод харгалзах зурнийг веб дээр гаргах
  diceDom.src = "dice-" + diceNumber + ".png";

  //   alert("Шоо буулаа: " + diceNumber);

  // буусан тоо 1-с ялгаатай бол идэвхитэй   тоглогчийн ээлжийн оноог нэмнэ
  if (diceNumber !== 1) {
    //  1- с ялгаатай буулхад Тоог тоглогчид нэмнэ
    roundScore = roundScore + diceNumber;

    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буухад тоглогчийн ээлжийг солих

    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийн ээлжийг шилжүүлнэ
    // Хэрэв идэвхитэй тоглогч 0 байвал тоглогчийг 1 болго
    // Үгүй бол тоглогчийг 0 болго

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэг шилжүүлэх

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгоно
    diceDom.style.display = "none";
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
