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
	document.getElementById("slider1-main-foto").src = element.src
	let swp = document.getElementById("swiperFoto").querySelectorAll(".swiper-slide--background");
	console.log(swp);
	for (let i = 0; i < swp.length; i++) {
		swp[i].classList.remove("swiper-slide--background-color");
	}
	console.log(element.parentNode);
	element.parentNode.classList.add("swiper-slide--background-color");
}


function videoSelect(element) {

	let videoArray = [
		"https://www.youtube.com/embed/hJnGmgrzs44?si=NixvF1eBouhqoiZh;controls=0",
		"https://www.youtube.com/embed/FTSQfkQLuro?si=Jx9V7Tql5WCHC9tk&amp;controls=0",

	]


	let test = document.getElementById("selected-video");
	console.log(test.src);
	test.src = videoArray[0];




	// style
	let swp = document.getElementById("swiperVideo").querySelectorAll(".swiper-slide--background");
	console.log(swp);
	for (let i = 0; i < swp.length; i++) {
		swp[i].classList.remove("swiper-slide--background-color");
	}
	console.log(element.parentNode);
	element.parentNode.classList.add("swiper-slide--background-color");
}




function starClick(element) {
	let empty = document.getElementById("section-main-video__star--img1");
	let full = document.getElementById("section-main-video__star--img2");

	if (empty.classList.contains("main-video__star--hide")) {
		empty.classList.remove("main-video__star--hide");
	full.classList.add("main-video__star--hide");
	}else{
		empty.classList.add("main-video__star--hide");
		full.classList.remove("main-video__star--hide");
	}

}






