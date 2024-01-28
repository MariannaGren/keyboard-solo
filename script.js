let word = document.querySelector(".word");

const arrayOfWords = [
  "гимназист",
  "стелька",
  "подделка",
  "виза",
  "решение",
  "шуруп",
  "колодец",
  "кабан",
  "команда",
  "ловушка",
  "буква",
  "опера",
  "сектор",
  "математика",
  "пароварка",
  "глубина",
  "справочник",
  "вождь",
  "хобот",
];

function getrandom(min, max) {
  let random = Math.random() * (max - min) + min;
  return +random.toFixed(0);
}
let randomWord = arrayOfWords[getrandom(0, arrayOfWords.length)];

let byLetter = randomWord
  .split("")
  .map((item) => `<span>${item}</span>`)
  .join("");
word.innerHTML = byLetter;
const elements = document.querySelectorAll(".word span");
let i = 0;
document.addEventListener("keydown", function (event) {
  if (event.key === randomWord[i]) {
    elements[i].className = "c";
    i++;
  } else if (event.key != randomWord[i]) {
    elements[i].className = "w";
  }
});
