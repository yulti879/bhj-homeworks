const timer = document.getElementById('timer');

let timerId = setInterval(() => {
	timer.textContent--;
	if (timer.textContent <= 0) {
		clearInterval(timerId);
		alert('Вы победили в конкурсе');
	};
}, 1000);



//Повышенный уровень сложности #1 Таймер, отсчитывающий оставшееся время в формате hh:mm:ss

let hours = 4;
let minutes = 25;
let seconds = 19;

const otherTimer = document.getElementById("otherTimer");

function formTime(h, m, s) {
	let hh;
	let mm;
	let ss;
	h < 10 ? hh = '0' + h : hh = h;
	m < 10 ? mm = '0' + m : mm = m;
	s < 10 ? ss = '0' + s : ss = s;
	otherTimer.textContent = hh + ":" + mm + ":" + ss;
};

let otherTimerId = setInterval(() => {
	if (seconds == 0) {
		if (minutes == 0) {
			if (hours == 0) {
				alert("Вы снова победили в нашем конкурсе");
				clearInterval(otherTimerId);
			} else {
				hours--;
				minutes = 59;
				seconds = 59;
			}
		} else {
			minutes--;
			seconds = 59;
		}
	} else {
		seconds--;
	}
	formTime(hours, minutes, seconds);
}, 1000);



//Повышенный уровень сложности #1. Вариант с объектом Date

const realTimer = document.getElementById("realTimer");

const endTime = Date.now() + 15919000;

const secondsLeft = (endTime - Date.now()) / 1000;

function displayTimer(seconds) {
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(seconds / 3600);
	const remainderSeconds = seconds % 60;
	const remainderminutes = Math.floor(minutes % 60);
	const display = `${hours < 10 ? '0' : ''}${hours}:${remainderminutes < 10 ? '0' : ''}${remainderminutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	realTimer.textContent = display;
};

let realTimerId = setInterval(() => {
	const secondsLeft = Math.round((endTime - Date.now()) / 1000);
	displayTimer(secondsLeft);
	if (secondsLeft <= 0) {
		alert("Вы снова победили в нашем конкурсе");
		clearInterval(realTimerId);
	}
}, 1000);