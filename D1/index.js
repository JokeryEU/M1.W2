// changing the H1
const textHeader = (str) => {
    let text = document.getElementById("title")
    text.innerText = str;
}
// background color change
const colorChange = str => document.getElementById("body").style.backgroundColor = str;
