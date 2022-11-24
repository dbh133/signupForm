const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
const errorClass = document.querySelectorAll('.error');
const subButton = document.querySelector('.btn');
const confirmLabel = document.querySelector('.confirmLabel');
const passwordLabel = document.querySelector('.passwordLabel');
const passAlert =
	'Passwords do not match.  Please check your spelling and try again';
let pass = '';
let confPass = '';

function comparePass(x, y) {
	if (x !== y || x === '' || y === '' || (x === '' && y === '')) {
		confirmLabel.innerHTML =
			'CONFIRM PASSWORD <span class=invalid>&#x2717</span>';
		passwordLabel.innerHTML = 'PASSWORD <span class=invalid>&#x2717</span>';
		errorClass.forEach((pass) => {
			pass.classList.add('error');
		});
	} else {
		confirmLabel.innerHTML =
			'CONFIRM PASSWORD <span class=valid>&#10004</span>';
		passwordLabel.innerHTML = 'PASSWORD <span class=valid>&#10004</span>';
		subButton.disabled = false;
		errorClass.forEach((pass) => {
			pass.classList.remove('error');
		});
	}
}

password.addEventListener('input', () => (pass = password.value));
confirmPass.addEventListener('input', () => {
	confPass = confirmPass.value;
	comparePass(pass, confPass);
});
