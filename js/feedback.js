
/*=========================================
                DOM ELEMENTS
==========================================*/

/*Input fields*/

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const topicInput = document.getElementById("topic")
const commentInput = document.getElementById("comment")
const urlInput = document.getElementById("url")


/*Error messages*/

const nameError = document.getElementById("name-error")
const emailError = document.getElementById("email-error")
const topicError = document.getElementById("topic-error")
const commentError = document.getElementById("comment-error")
const urlError = document.getElementById("url-error")


/* Other elements */

const clearButton = document.getElementById("clearbutton")
const statusMessage = document.getElementById("form-status")
const counter = document.getElementById("comment-counter")
const form = document.getElementById("contactformsecond")

/*=========================================
            VALIDATING FUNCTIONS
==========================================*/

/*NAME*/
function validateName() {}
/* VALIDATING EMAIL*/
function validateEmail() {}
/* VALIDATING TOPIC*/
function validateTopic() {}
/* VALIDATING COMMENTS*/
function validateComment() {}
/* VALIDATING URL*/
function validateUrl() {}


/*=========================================
        ERROR MESSAGE FUNCTIONS
==========================================*/


function showFieldError () {}

//Show an error

function clearFieldError () {}

//Clear an error

/*=========================================
            RESET FORM FUNCTION
==========================================*/

function resetForm() {}


/*=========================================
            EVENT LISTENERS
==========================================*/

/* Comment Counter function - else/if to change color - count + to insert the counting function of the characters */


commentInput.addEventListener("input", function () {


    /*  const text gathers the text that the user types in
        const count counts the number of characters in the text
    */ 

    const text = commentInput.value
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

/*=========================================
            FORM SUBMISSION
==========================================*/

/*=========================================
            CLEAR BUTTON
==========================================*/


