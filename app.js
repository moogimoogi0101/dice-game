// Глобал хувьсагчид

// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;

// var activePlayer, scores, roundScore;

// Аль тоглогч шоо шидэх
var activePlayer;

// 2 тоглогчийн цуглуулсан оноо
var scores;

// Идэвхитэй тоглогчийн цуглуулсан ээлжийн оноо
var roundScore;

// Шооны зургийг үзүүлэх элемэнтийг DOM-с олоод энд хадгалья
var diceDom = document.querySelector(".dice");

// Тоглоом эхлүүлэх
initGame();

// Тоглоом шинээр эхлэхэд бэлдэнэ
function initGame() {
  // Тоглоом эхэллээ төлөвт оруулна
  isNewGame = true;

  // --------------тоглогчийн ээлж хадгалах тоглогч 1=0 2=1
  activePlayer = 0;
  // ------------------цуглуулсан оноо хадгала
  scores = [0, 0];
  // -----------ээлжиндээ цуглуулж байгаа оноог хадгалах
  roundScore = 0;
  // --------шооны аль талаараа буусанг 1-6 санамсаргүй
  // var diceNumber = Math.floor(Math.random() * 6) + 1;

  // <div class="player-score" id="score-0">43</div>
  // window.document.querySelector("#score-0").textContent = dice;

  // document.querySelector("#score-1").textContent = dice;

  // --------------------Программ эхлэхэд бэлдэх
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  //-------------------------------------------------//
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

//шоог шидэх эвент листэнэр
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
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

      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 буухад тоглогчийн ээлжийг солих
      switchtoNextPlayer();
    }
  } else {
    alert("GAME OVER!!! new game товч дар");
  }
});

// HOLD товчний эвент листэнэр
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Уг тоглогчийн цуглуулсан ээлжний оноог global оноон дээр нэмнэ
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр оноо өөрчилнө
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //  Хожсон эсэхийг шалгах
    if (scores[activePlayer] >= 100) {
      // Тоглоом дууссан төлөвт оруулна
      isNewGame = false;

      // Ялагчийн нэрний оронд WINNER
      document.getElementById("name-" + activePlayer).textContent = "WINNER!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Тоглогчийн ээлжийг солино
      switchtoNextPlayer();
    }
  } else {
    alert("GAME OVER!!! new game товч дар");
  }
});

// Энэ функц тоглох ээлжийг дараагийн тоглогч руу шилжүүлнэ
function switchtoNextPlayer() {
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
  diceDom.style.display = "nones";
}

// NEW GAME Шинэ тоглоом эхлүүлэх товчний эвэнт листэнэр
document.querySelector(".btn-new").addEventListener("click", initGame);
