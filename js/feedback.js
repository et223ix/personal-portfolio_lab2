
/* Comment Counter function - else/if to change color - count + to insert the counting function of the characters */


const input = document.getElementById("message")
const counter = document.getElementById("comment-counter")

input.addEventListener("input", function () {


    /*  const text gathers the text that the user types in
        const count counts the number of characters in the text
    */ 

    const text = input.value
    const count = text.length

    counter.textContent = count + " characters. Minimum 15 characters."


    if (count === 0) {
        counter.style.color = "black"
    }

    else if (count < 15) {
        counter.style.color = "red"
        
    } else {
        counter.style.color = "green"
    }

})