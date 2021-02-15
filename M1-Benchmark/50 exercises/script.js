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

let random = [...Array(100)].map((e) => ~~(Math.random() * 100));

console.log(random);

// 27) Wrote a function to get the MAX and the MIN from the previously created array

const minMax = () => {
  let array = random;
  let max = 0;
  let min = 999;

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      let max = array[i];
    } else if (min > array[i]) {
      let min = array[i];
    }
  }

  console.log(min);
  console.log(max);
};

console.log(minMax());

// 28) Create an array of arrays, in which every array has 10 random numbers

const arrays = [];

// 29) Create a function that gets 2 arrays and returns the longest one

const comparing = (x, y) => (x.length > y.length ? x : y);

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

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

alert("Page loaded");

// 39) Write a function to add new items to a UL

// 40) Write a function to empty a list
