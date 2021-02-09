 /* EXERCISE 1
          Write a function for changing the title of the document in something else.
          */
    
         function changeTitle(newTitle){
             let head = document.getElementsByTagName('head')[0]
                  let title = document.createElement('title')
                  title.innerText = newTitle
                  head.appendChild(title)
        }
  
        /* EXERCISE 2
        Write a function for changing the class of the title of the page in "myHeading".
        */
  
        function addClassToTitle(){
            let header = document.querySelector("header")
            header.classList.add("header")
        }
  
        /* EXERCISE 3
        Write a function for changing the text of only the p which are children of a div.
        */
  
        function changePcontent() {
            let changingText = document.querySelector("div p")
            changingText.innerText = "resolved"
        }
  
        /* EXERCISE 4
        Write a function for changing the destination of every link to https://www.google.com
        */
  
        function changeUrls() {
            let link = document.querySelector("a")
            link.href = "https://www.google.com"
        }
  
         /* EXERCISE 5
         Write a function for adding a new item in the second list.
         */
  
        function addToTheSecond(content){
            let list = document.getElementById("secondList")
            let item = document.createElement("li")
            item.innerText = content
            list.appendChild(item)
        }
  
        /* EXERCISE 6
        Write a function for adding a second paragraph to the div.
        */
  
        function addParagraph(content){
            let paragraphs = document.getElementsByTagName('div')[0]
            let text = document.createElement("p")
            text.innerText = content
            paragraphs.appendChild(text)
        }
  
        /* EXERCISE 7
        Write a function for making the first UL disappear.
        */
  
        function firstUlDisappear() {
            let firstList = document.getElementById("firstList")
            firstList.style.display = "none"
        }
  
        /* EXERCISE 8
        Write a function for making the background of every UL green.
        */
  
        function paintItGreen(){
            let bColor = document.getElementsByTagName("ul")
            for (let i = 0; i < bColor.length; i++) {
                document.getElementsByTagName("ul")[i].style.backgroundColor = "green"                
            }            
        }
  
        /* EXERCISE 9
        Make the heading of the page change color every time the user clicks on it.
        */

        let randomColor = () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16)
            return "#" + randomColor
        }
        let header = document.getElementsByTagName("header")
        header[0].onclick = (event) => event.target.style.color = randomColor()

        // function makeItClickable(){} // made it separate
            

        /* EXERCISE 10
        Change the footer text with something else when the user clicks on it.
        */
  
        // function changeFooterText(){} // same as before made a different one

            let footer = document.querySelector("footer p")
            footer.onclick = function(event) {
                event.target.innerText = "test text"
            }
  
        /* EXERCISE 11
        Attach an event listener to the input field in the page for console logging its value just after any keystroke.
        */
  
        const inputField = document.getElementById('input-field')
        inputField.onkeypress = function(event) {
            console.log(event.target.value)
        }
  
        /* EXERCISE 12
        Create a new welcome alert message when the page successfully loads.
        */
  
        window.onload = function(){
            alert("The page is loaded have fun")
        }
  
        /* EXERCISE 13
        Use HTML5 tags to divide the content of the page in a more semantic way.
        */