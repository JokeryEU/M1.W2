const textHeader = (str) => {
    let text = document.getElementById("title")
    text.innerText = str;
}

const colorChange = str => document.getElementById("body").style.backgroundColor = str;
