
/*=========================================
                DOM ELEMENTS
==========================================*/

/*======Gathering the form elements so that the validation functions and event listeners can reuse the same references======*/

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
const submitButton = document.getElementById("submitbutton")


/*=========================================
            VALIDATING FUNCTIONS
==========================================*/

/*/======Each validation checks one field and returns false if its not valid and true if its valid. The showFieldError handles the visual error messages while the clearFieldError removes the error message if the users inputs are valid======*/

/*==NAME==*/
function validateName() {

    /* Gathers the value from the nameinput and removes extra spacing in the beginning and at the end with trim()*/
    const fullName = nameInput.value.trim() 

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

    /* !emailPattern.test(email) means if the email doesn't match the pattern return an error  */

    if (!emailPattern.test(email)) {

        showFieldError(emailInput, emailError, "Please enter a valid email address.")

        return false
    }

    clearFieldError(emailInput, emailError)

    return true
}


/* ==VALIDATING TOPIC==*/
function validateTopic() {

    /*If an topic isn't picked/empty then return an error message */
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

    /* comment.lenght < 15 implies that if the characters are less than 15, return an error message */
    if (comment.length < 15) {
        showFieldError(commentInput, commentError, "Your comment must be at least 15 characters long.")
        return false
    }

    clearFieldError(commentInput, commentError)
    return true
}

/* ==VALIDATING URL== */

function validateUrl() {

    if (urlInput.value.trim() === "") {
        urlInput.classList.remove("error", "valid")
        urlError.textContent = ""
        return true
    }

    if (urlInput.checkValidity ()) {
        clearFieldError(urlInput, urlError)
        return true
    }

    else {
        showFieldError(urlInput, urlError, "Please enter a valid URL")
        return false
    }
}


/*=========================================
        ERROR MESSAGE FUNCTIONS
==========================================*/

/*Adding an error message with a red border aorund the input field and removes the valid message with the green border*/

/*ClassList connects the messages to the class "error and valid" in CSS and uses its styling*/

function showFieldError (input, errorElement, message) {
    errorElement.textContent = message
    input.classList.add("error")
    input.classList.remove("valid")
}

//Removes the error message and its red border and instead adds a valid message with a green border around the input field

function clearFieldError (input, errorElement) {
    errorElement.textContent = ""
    input.classList.remove("error")
    input.classList.add("valid")
}


/*=========================================
            RESET FORM FUNCTION
==========================================*/

function resetForm() {

/* Resets all form fields to their original values */
form.reset()

/*Stores all input fields in an array so that they can be cleared all together */
const inputs = [nameInput, emailInput, topicInput, commentInput, urlInput]

/*Stores all error messages in an array so that they can be cleared all together */
const errors = [nameError, emailError, topicError, commentError, urlError]

/*Goes through each input field in the array and removes both the error and valid classes */
inputs.forEach(function(input) {
    input.classList.remove("error", "valid")
})

/*Goes through each error message in the array and clears its text */
errors.forEach(function(error) {
    error.textContent = ""

})

/*Resets the color of the live character counter-paragraph back to standard color*/
counter.style.color = "black"

/* Resets the characters counter to 0*/
counter.textContent = "0 characters. Minimum 15 characters"

}


/*=========================================
            EVENT LISTENERS
==========================================*/

/*Listens for an event and runs the function when something happens */
nameInput.addEventListener("input", validateName)
emailInput.addEventListener("input", validateEmail)
topicInput.addEventListener("change", validateTopic)
commentInput.addEventListener("input", function() {

    /*Counts the number of characters the user has typed in*/
    const count = commentInput.value.length 

    /*Updates the character counter everytime the user types in*/
    counter.textContent = count + " characters. Minimum 15 characters." 
    
    /*If characters are 0 color turns black, if less than 15 the text turns red, else green */
    
    if (count === 0) {
        counter.style.color = "black"

        /*This helps remove the error message when characters are on 0*/
        commentError.textContent = ""
        commentInput.classList.remove("error","valid")
        return
    }
    
    else if (count < 15) {
        counter.style.color = "red"
    }
      /*If its 15 or more characters the text turns green */
    else {
        counter.style.color = "green"
    }

    /*Controls if the comment meets the minimum lenght*/
    validateComment() 
})

urlInput.addEventListener("input", validateUrl)

/*Runs the resetForm function when the user clicks the clear button */
clearButton.addEventListener("click", resetForm)


/*=========================================
            FORM SUBMISSION
==========================================*/

/* addEventListener listens for the submit event to happen*/
form.addEventListener("submit", function(event) {

    /* Prevents the site from reloading */
    event.preventDefault()

    /* Gathers the user's name and removes potential extra spaces */
    const fullName = nameInput.value.trim()


    /*Function runs to check if each field is valid */

    const nameValid = validateName()
    const emailValid = validateEmail()
    const topicValid = validateTopic()
    const commentValid = validateComment()
    const urlValid = validateURL()

    /* Stops the form submission if any field is invalid. !nameValid means not valid, || means or*/
    if  (!nameValid || !emailValid || !topicValid || !commentValid || !urlValid) {

        return
    }

    resetForm ()

    statusMessage.textContent = ` ✓ Thanks for your feedback, ${fullName}!`

    setTimeout(function() {
    statusMessage.textContent = ""

    }, 4000)
})


