// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	const NameOK = /[^a-zA-Z]+/;
	const EmailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const PassOK = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
	const PhoneOK = /^[0-9]{9}$/;

	
	


	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "" || fName.value.length < 3 || NameOK.test(fName.value) == true) {
		error++;
		errorName.style.display = 'block';
		fName.style.border = '5px solid red';
	} else {
		errorName.style.display = 'none';
		fName.style.border = '5px solid green';
	}

	if (fEmail.value == "" || fEmail.value.length < 3 ||
		EmailOK.test(fEmail.value) == false) {
		error++;
		errorEmail.style.display = 'block';
		fEmail.style.border = '5px solid red';
	} else {
		errorEmail.style.display = 'none';
		fEmail.style.border = '5px solid green';
	}

	if (fAddress.value == "" || fAddress.value.length < 3) {
		error++;
		errorAddress.style.display = 'block';
		fAddress.style.border = '5px solid red';
	} else {
		errorAddress.style.display = 'none';
		fAddress.style.border = '5px solid green';
	}

	if (fLastN.value == "" || fLastN.value.length < 3 ||
		NameOK.test(fLastN.value) == true) {
		error++;
		errorLastN.style.display = 'block';
		fLastN.style.border = '5px solid red';
	} else {
		errorLastN.style.display = 'none';
		fLastN.style.border = '5px solid green';
	}

	if (fPassword.value == "" || fPassword.value.length >= 9 || fPassword.value.length <= 3 ||
		PassOK.test(fPassword.value) == false) {
		error++;
		errorPassword.style.display = 'block';
		fPassword.style.border = '5px solid red';
	} else {
		errorPassword.style.display = 'none';
		fPassword.style.border = '5px solid green';
	}

	if (fPhone.value == "" || fPhone.value.length != 9 || PhoneOK.test(fPhone.value) == false) {
		error++;
		errorPhone.style.display = 'block';
		fPhone.style.border = '5px solid red';
	} else {
		errorPhone.style.display = 'none';
		fPhone.style.border = '5px solid green';
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}

(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();