function fieldValidated() {
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
	let isValid = true;

	if (name.trim() === '') {
		isValid = false;
		document.getElementById('nameError').textContent =
			'O campo Nome é obrigatório.';
		document.getElementById('name').classList.add('border-red-500');
	} else {
		document.getElementById('nameError').textContent = '';
		document.getElementById('name').classList.remove('border-red-500');
	}

	if (email.trim() === '') {
		isValid = false;
		document.getElementById('emailError').textContent =
			'O campo Email é obrigatório.';
		document.getElementById('email').classList.add('border-red-500');
	} else {
		document.getElementById('emailError').textContent = '';
		document.getElementById('email').classList.remove('border-red-500');
	}

	if (message.trim() === '') {
		isValid = false;
		document.getElementById('messageError').textContent =
			'O campo Mensagem é obrigatório.';
		document.getElementById('message').classList.add('border-red-500');
	} else {
		document.getElementById('messageError').textContent = '';
		document.getElementById('message').classList.remove('border-red-500');
	}

	if (isValid) {
		alert('Mensagem enviada com sucesso!');
	}

	return isValid;
}
