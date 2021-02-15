// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

let x = "John";
let y = "Doe";
console.log(x + " <> " + y);

// 22) Create an object with properties such name, surname, email

let person = {
  name: x,
  surname: y,
  email: "john.doe@gmail.com",
};

// 23) Delete Email from the previously created object

delete person.email;
console.log(person);

// 24) Create an array with 10 strings in it

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 25) Print in the console every string in the previous array

console.log(array);

// 26) Create an array with 100 random numbers in it

let random = [...Array(100)].map(() => ~~(Math.random() * 100));

console.log(random);

const randomNumbers = () => {
  let array = [];

  for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 100);
    array.push(random);
  }

  return array;
};

// 27) Wrote a function to get the MAX and the MIN from the previously created array

const minMax = () => {
  let array = randomNumbers();
  let max = 0;
  let min = 999;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  console.log(min);
  console.log(max);
};
minMax();

// 28) Create an array of arrays, in which every array has 10 random numbers

const arrays = () => {
  let mainArray = [];
  for (let i = 0; i < 10; i++) {
    let array = [];
    for (let x = 0; x < 10; x++) {
      array.push(Math.floor(Math.random() * 100));
    }
    mainArray.push(array);
  }
  console.log(mainArray);
};
arrays();
// 29) Create a function that gets 2 arrays and returns the longest one

const comparing = (x, y) => (x.length > y.length ? x : y);

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

const higherSum = (x, y) => {
  let fSum = 0;

  for (let i = 0; i < x.length; i++) {
    fSum += x[i];
  }

  let sSum = 0;

  for (let i = 0; i < y.length; i++) {
    sSum += y[i];
  }

  if (fSum > sSum) {
    return x;
  }

  if (sSum > fSum) {
    return y;
  } else {
    console.log("They both have the same sum of values");

    return null;
  }
};

console.log(higherSum([2, 4], [4, 7]));

// 31) Get element with ID "container" from the page

const div = document.querySelector("#container");

// 32) Get every "td" from the page

const tableData = document.querySelectorAll("td");

// console.log(tableData);

// 33) Create a cycle that prints the text inside every td of the page
const cycle = () => {
  for (let i = 0; i < tableData.length; i++) {
    let data = tableData[i].innerHTML;
    console.log(data);
  }
};

// 34) Write a function to change the heading of the page

const heading = (x) => {
  const head = document.querySelector("h1");
  head.innerText = x;
};

// 35) Write a function to add an extra row to the table

const extraRow = () => {
  const table = document.getElementById("table");
  const row = document.createElement("tr");
  for (let i = 0; i < 5; i++) {
    const cells = document.createElement("td");
    row.appendChild(cells);
  }
  table.appendChild(row);
};

// 36) Write a function to add the class "test" to each row in the table

const rowClass = () => {
  const row = document.getElementsByTagName("tr");
  for (let i = 0; i < row.length; i++) {
    row[i].classList.add("test");
  }
};

// 37) Write a function to add a red background to every link in the page

const backgroundColor = () => {
  const row = document.getElementsByTagName("a");
  for (let i = 0; i < row.length; i++) {
    row[i].style.backgroundColor = "red";
  }
};

// 38) Console log "Page loaded" when the page is correctly loaded

window.onload = () => console.log("Page loaded");

// 39) Write a function to add new items to a UL

const addList = (x) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = x;
  ul.appendChild(li);
};

// 40) Write a function to empty a list

const emptyList = () => {
  const ul = document.querySelector("ul");
  ul.innerText = "";
};
