let elemBody = document.body;
backgroundColor = "#ff0000";
let aCard = document.querySelector(".card:nth-child(2)");
//aCard.addEventListener("click", function () {
//  console.log("클릭!");
//  aCard.classList.toggle("card--state-clicked");
//  console.log(aCard.classList);
//});

let cards = document.querySelectorAll(".cards");
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    eachCard.classList.toggle("card--state-Clicked");
  });
}
//cards.forEach((eachCard) => {
//  eachCard.addEventListener("click", function () {});
//});
