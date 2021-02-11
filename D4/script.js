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

const randomNumber = () => Math.floor(Math.random() * 76) + 1;

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
  button.onclick = () => {
    pickedNumbers = randomNumber();
    let selected = document.querySelector(".selected");
    const numb = document.getElementsByTagName("h3");
    for (let i = 0; i < pickedNumbers.length; i++) {
      if (i === parseInt(numb)) {
        pickedNumbers = i - 1;
        selected.classList.add("selected");
      } else selected.classList.remove("selected");
      return pickedNumbers;
    }

    console.log(pickedNumbers);
  };
};
