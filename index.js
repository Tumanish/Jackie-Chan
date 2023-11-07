let Options = {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		// nextEl: '.swiper-button-next',
		nextEl: '.swiper-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 6,
	spaceBetween: 0,

};

new Swiper('.swiper', Options);


function fotoSelect(element) {
	document.querySelector('#foto img').src = element.src

	// document.getElementById("swiperFoto")[0][0].classList.remove("redBorder");
	// console.log(document.getElementById("swiperFoto")[0]);
	let parent = document.querySelector('.swiper');
	let menuItem = parent.querySelectorAll('img');

	for (let i = 0; i < menuItem.length; i++) {
		menuItem[i].classList.remove("redBorder");
	}
	console.log(menuItem);
	element.classList.add("redBorder");

}