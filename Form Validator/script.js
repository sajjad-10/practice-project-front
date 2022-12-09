const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/*
    * Show input error message.
*/
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'

    const small = formControl.querySelector('small');
    small.innerText = message;
}

/*
    * Show success outline.
*/
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

/*
    * Check email is valid
*/
function checkEmail(input) {
    const re = String(input.value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    if (re == null) {
        showError(input, 'Email is not valid')
    } else {
        showSuccess(input)
    }
}

/*
    * Check required fields.
*/
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

/*
    * Check input length.
*/
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be least then ${max}`)
    } else {
        showSuccess(input)
    }
}

/*
    * Check password match.
*/
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password fo not mach')
    }
}

/*
    * Get field name.
*/
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

/*
    * Event listeners.
*/
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([userName, email, password, password2])

    checkLength(userName, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswordsMatch(password, password2)
})