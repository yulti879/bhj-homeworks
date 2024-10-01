const rotators = document.querySelectorAll('.rotator');
const cases = document.querySelectorAll('.rotator__case');

const arr = Array.from(cases);

let i = 0;


setInterval(function() {
	arr[i].classList.remove('rotator__case_active');
	i == (arr.length - 1) ? i = 0 : i++;
	arr[i].classList.add('rotator__case_active');
}, 1000);
