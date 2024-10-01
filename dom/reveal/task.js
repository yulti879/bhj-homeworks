const blocks = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
	blocks.forEach(block => {
		blockTop = block.getBoundingClientRect().top;
		blockBottom = block.getBoundingClientRect().bottom;
		if (blockTop >= 0 && blockBottom <= window.innerHeight) {
			block.classList.add('reveal_active');
		};
	})
})
