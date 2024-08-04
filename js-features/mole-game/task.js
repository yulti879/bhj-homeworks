const arr = Array.from(document.getElementsByClassName('hole'));

const toldById = document.getElementById('told');
const lostById = document.getElementById('lost');
const times1 = document.getElementById('times1');
const times0 = document.getElementById('times0');

let told = 0;
let lost = 0;


arr.forEach((hole) => {
	hole.onclick = function() {
		if (hole.className.includes('hole_has-mole')) {
			told++;
		} else {
			lost++;
		};
		if (told === 10) {
			alert('Победа!');
			told = 0;
			lost = 0;
		};
		if (lost === 5) {
			alert('Вы проиграли!');
			told = 0;
			lost = 0;
		};
		toldById.textContent = told;
		lostById.textContent = lost;
		if (told >= 2 && told <= 4) {
			times1.textContent = ' раза'
		}		
		if (lost >= 2 && lost <= 4) {
			times0.textContent = ' раза'
		}
	};
});