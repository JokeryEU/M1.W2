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

// 31) Get element with ID "container" from the page

const div = document.querySelector("#container");

console.log(div);
// 32) Get every "td" from the page

const tableData = document.querySelectorAll("td");

console.log(tableData);

// 33) Create a cycle that prints the text inside every td of the page
const cycle = () => {
  for (let i = 0; i < tableData.length; i++) {
    let data = tableData[i].innerHTML;
    return data;
  }
  console.log(data);
};

// 34) Write a function to change the heading of the page

const heading = (x) => {
  const head = document.querySelector("h1");
  head.innerText = x;
  return head;
};

// 35) Write a function to add an extra row to the table

const extraRow = () => {
  // incomplete
  const table = document.querySelector("table");
  const row = document.createElement("tr");
  table.appendChild(row);
};

// 36) Write a function to add the class "test" to each row in the table

const rows = () => {
  // incomplete
  const row = document.querySelectorAll("tr");
  for (let i = 0; i < row.length; i++) {
    row.className.add("test");
  }
};
