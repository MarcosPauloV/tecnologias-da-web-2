const array = [];
let index = 0;

function insertInArray() {
	array.push({
		name: document.getElementById('name').value,
		surname: document.getElementById('surname').value,
		adress: document.getElementById('adress').value,
		phone: document.getElementById('phone').value
	})
}

function removeInArray() {
	array.splice(index, 1);
}

function updateInArray() {
	array[index] = {
		name: document.getElementById('name').value,
		surname: document.getElementById('surname').value,
		adress: document.getElementById('adress').value,
		phone: document.getElementById('phone').value
	}
}

function cancel(){
	document.getElementById('name').value = '';
	document.getElementById('surname').value = '';
	document.getElementById('adress').value = '';
	document.getElementById('phone').value = '';
}

function firtsRegisterInArray() {
	const user = array[0];
	document.getElementById('name').value = user.name;
	document.getElementById('surname').value = user.surname;
	document.getElementById('adress').value = user.adress;
	document.getElementById('phone').value = user.phone;
	index = 0;
}

function previousRegisterInArray() {
	if(index > 0){
		return 'Não há registros anteriores'
	}
	array[index--];
	index--;
}

function nextRegisterInArray() {
	if(index >= array.length - 1){
		return 'Não existem itens posteriores'
	}
	array[index++];
	index++;
}

function finalRegisterInArray() {
	const user = array[array.length - 1];
	document.getElementById('name').value = user.name;
	document.getElementById('surname').value = user.surname;
	document.getElementById('adress').value = user.adress;
	document.getElementById('phone').value = user.phone;
	index = array.length - 1;
}
