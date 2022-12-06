
//LOGIN BUTTON
const show_pw_btn = document.querySelector('#show-passwd')
const show_pw_icon = show_pw_btn.querySelector('img')
const pw_input = document.querySelector('#password')

show_pw_btn.addEventListener('click', () => {
	pw_input.type = pw_input.type === 'password' 
		? 'text' 
		: 'password'

	show_pw_icon.src = show_pw_icon.src.includes('open') 
		? '../images/eye_closed.svg' 
		: '../images/eye_open.svg'
})

//VALIDATION

"use strict";
$(document).ready( () => {

    // move focus to first text box
    $("#email").focus();
    
    // the handler for the click event of the submit button
    $("#login-form").submit( event => {
        let isValid = true;

        //JK: trying to identify the <p> which is hidden
        var incorrectEmail = document.getElementById('#incorrect-email');
        
        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            incorrectEmail.style.display = 'block';
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
            
        // validate the password entry
        const password = $("#password").val().trim();
        if ( password.length < 6) {
            $("#password").next().text("Must be 6 or more characters.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }
        $("#password").val(password);
                    
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });

});



