let pickedNumbers = [];
let numbers = [];
let store = [];

const creatingNumbers = () => {
  for (let i = 0; i < 76; i++) {
    numbers[i] = [];
  }
  return numbers;
};
const button = document.getElementById("random");

const playBingo = function () {
  let randNum = Math.floor(Math.random() * 76 + 1);
  console.log(randNum);
  let selected = document.querySelector(".selected");
  const num = document.querySelectorAll("h3");
  num.forEach((i) => {
    if (randNum === parseInt(i.innerText)) {
      i.parentNode.classList.add("selected");
    } else if (selected) {
      i.parentNode.classList.remove("selected");
    }
  });
};

window.onload = () => {
  const allNumbers = creatingNumbers();
  let bingoBoard = document.getElementById("bBoard");

  for (let i = 0; i < allNumbers.length; i++) {
    const square = document.createElement("div");
    square.className = "num";

    const num = document.createElement("h3");
    const number = i + 1;
    num.innerText = number;

    square.appendChild(num);
    bingoBoard.appendChild(square);
  }

  button.onclick = () => playBingo();
};
