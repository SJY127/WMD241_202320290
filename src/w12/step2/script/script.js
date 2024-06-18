console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.75, 5.05,)";

let aCard = document.querySelector(".card");
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");
  //aCard.style.backgroundColor = "#ff0000";
  console.log(aCard.classList);
  aCard.classList.toggle("card--state-clicked");
});

//document.querySelectorAll(".card");
