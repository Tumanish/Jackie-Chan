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
	// document.querySelector('#foto img').src = element.src
	document.getElementById("slider1-main-foto").src = element.src
	// document.getElementById("swiperFoto")[0][0].classList.remove("redBorder");
	// console.log(document.getElementById("swiperFoto")[0]);
	// let parent = document.querySelector('.swiper');
	// let menuItem = parent.querySelectorAll('img');
	// let backgroundItems = parent.querySelectorAll('div');
	// console.log(menuItem);

	// let selectFotoBackground = document.getElementById('swiperFoto-background');


	// 	for (let i = 0; i < menuItem.length; i++) {
	// 		menuItem[i].classList.remove("redBorder");
	// 		backgroundItems[i].classList.remove("swiper-slide--background-color");
	// 	}
	// 	console.log(menuItem);
	// 	element.classList.add("redBorder");
	// 	selectFotoBackground.classList.add("swiper-slide--background-color");


	let swp = document.getElementById("swiperFoto").querySelectorAll(".swiper-slide--background");
	console.log(swp);
	for (let i = 0; i < swp.length; i++) {
		swp[i].classList.remove("swiper-slide--background-color");
	}
	console.log(element.parentNode);
	element.parentNode.classList.add("swiper-slide--background-color");
}