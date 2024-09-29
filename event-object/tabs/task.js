const menues = document.querySelectorAll('.tabs');

menues.forEach(menue => {
	const tabs = menue.querySelectorAll('.tab');
	const contents = menue.querySelectorAll('.tab__content');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach(tab => tab.classList.remove('tab_active'));
			contents.forEach(content => content.classList.remove('tab__content_active'));
			tabs[index].classList.add('tab_active');
			contents[index].classList.add('tab__content_active');
		});
	});
});
