const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
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
	} else {
		confirmLabel.innerHTML =
			'CONFIRM PASSWORD <span class=valid>&#10004</span>';
		passwordLabel.innerHTML = 'PASSWORD <span class=valid>&#10004</span>';
		subButton.disabled = false;
	}
}

password.addEventListener('input', () => (pass = password.value));
confirmPass.addEventListener('input', () => {
	confPass = confirmPass.value;
	comparePass(pass, confPass);
});
