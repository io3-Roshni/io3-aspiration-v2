function submitForm() {
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const birthday = document.getElementById("birthday").value;
    // const errorMessage = dovument.getElementByclass("error").value;

  
    // Validate form inputs
    let errorMessage = "";
    if (fullName === "") {
      errorMessage += "Please enter your full name";
    }
    if (email === "") {
      errorMessage += "Please enter your email address.\n";
    } else if (!validateEmail(email)) {
      errorMessage += "Please enter a valid email address.\n";
    }
    if (password === "") {
      errorMessage += "Please enter a password.\n";
    } else if (password.length < 8) {
      errorMessage += "Your password must be at least 8 characters long.\n";
    }
    if (confirmPassword === "") {
      errorMessage += "Please confirm your password.\n";
    } else if (password !== confirmPassword) {
      errorMessage += "Passwords do not match.\n";
    }
    if (birthday === "") {
      errorMessage += "Please enter your birthday.\n" ;
}
}



function validateForm(){
	var name = document.forms["myForm"]["your-name"].value;
	var email = document.forms["myForm"]["your-email"].value;
	var phone = document.forms["myForm"]["your-phone"].value;
	var message = document.forms["myForm"]["your-message"].value;

	if (name.length<1) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    if (phone.length<1) {
        document.getElementById('error-phone').innerHTML = " Please Enter Your Phone *";      
    }
    if (message.length<1) {
        document.getElementById('error-message').innerHTML = " Please Enter Your Message *";
    }          
    if(name.length<1 || email.length<1 || phone.length<1 || message.length<1){
       	return false;
    }            
}