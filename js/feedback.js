
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

/*==NAME==*/
function validateName() {

    const fullName = nameInput.value.trim() /* Gathers the name and removes extra spacing in the beginning and at the end*/

    /*Makes sure the name isn't empty*/
    if (fullName === "") {
        showFieldError(nameInput, nameError, "Please enter your full name.")
        return false
    }
    /*Makes sure the name contains at least 2 characters*/
    if (fullName.length < 2) {
        showFieldError(nameInput, nameError, "Name must be at least 2 characters long.")
        return false
    }

    /*Controls that the name contains right kind of characters*/
    const namePattern = /^[\p{L}\p{M} '\u2019-]+$/u

    if (!namePattern.test(fullName)) {
        showFieldError(nameInput, nameError, "Name can only contain letters, spaces, apostrophes, and hyphens.")
        return false
    }

    /*Removes error message if the name has correct characters*/
    clearFieldError(nameInput, nameError)
    return true
}


/* ==VALIDATING EMAIL==*/
function validateEmail() {

    const email = emailInput.value.trim()

    if (email === "") {

        showFieldError(emailInput, emailError, "Please enter your email address.") 

        return false
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {

        showFieldError(emailInput, emailError, "Please enter a valid email address.")

        return false
    }

    clearFieldError(emailInput, emailError)

    return true
}


/* ==VALIDATING TOPIC==*/
function validateTopic() {

    if (topicInput.value === "") {
        showFieldError(topicInput,topicError, "Please select a topic.")
        return false 
    }

    clearFieldError(topicInput, topicError)
    return true

}


/* ==VALIDATING COMMENTS==*/
function validateComment() {
    const comment = commentInput.value.trim()

    if (comment.length < 15) {
        showFieldError(commentInput, commentError, "Your comment must be at least 15 characters long.")
        return false
    }

    clearFieldError(commentInput, commentError)
    return true
}


/*=========================================
        ERROR MESSAGE FUNCTIONS
==========================================*/

//Shows an error message an adds an red border around the input field

function showFieldError (input, errorElement, message) {
    errorElement.textContent = message
    input.classList.add("error")
    input.classList.remove("valid")
}

//Clears the error message and adds a green border around the input field

function clearFieldError (input, errorElement) {
    errorElement.textContent = ""
    input.classList.remove("error")
    input.classList.add("valid")
}


/*=========================================
            RESET FORM FUNCTION
==========================================*/

function resetForm() {}


/*=========================================
            EVENT LISTENERS
==========================================*/


nameInput.addEventListener("input", validateName)
emailInput.addEventListener("input", validateEmail)
topicInput.addEventListener("change", validateTopic)
commentInput.addEventListener("input", function() {

    /*Counts the number of characters the user has typed in*/
    const count = commentInput.value.length 

    /*Updates the character counter everytime the user types in*/
    counter.textContent = count + " characters. Minimum 15 characters." 
    
    /*If characters are less than 15, the text turns red */
    if (count < 15) {
        counter.style.color = "red"
    }
      /*If its 15 or more characters the text turns green */
    else {
        counter.style.color = "green"
    }


    /*Controls if the comment meets the minimum lenght*/
    validateComment() 
})


/*=========================================
            FORM SUBMISSION
==========================================*/

/*=========================================
            CLEAR BUTTON
==========================================*/


