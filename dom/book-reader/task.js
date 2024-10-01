const book = document.querySelector('.book');
const btns = document.querySelectorAll('.font-size');
const btnBig = document.querySelector('.font-size_big');
const btnSmall = document.querySelector('.font-size_small');

btns.forEach(btn => {
	btn.addEventListener('click', function(event) {
		event.preventDefault();
		btns.forEach(btn => {
			btn.classList.remove('font-size_active');
			book.classList.remove('book_fs-small', 'book_fs-big');
		})
		btn.classList.add('font-size_active');
	})
});

btnBig.addEventListener('click', function() {
	book.classList.add('book_fs-big');
});
btnSmall.addEventListener('click', function() {
	book.classList.add('book_fs-small');
});
