// retrieve the tips from local storage
let tips = JSON.parse(localStorage.getItem('tips'));

// get a reference to the tip list element
let tipList = document.getElementById('tip-list');

// loop through the tips and create HTML elements to display them
for (let i = 0; i < tips.length; i++) {
	let tip = tips[i];
	let row = document.createElement('tr');
	let nameCell = document.createElement('td');
	let tipCell = document.createElement('td');
	nameCell.innerText = tip.name;
	tipCell.innerText = tip.tip;
	row.appendChild(nameCell);
	row.appendChild(tipCell);
	tipList.appendChild(row);
}
