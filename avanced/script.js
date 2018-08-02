const plusSlides = (n) => {
	showSlides(slideIndex += n);

}

const currentSlide = (n) => {
	showSlides(slideIndex = n);
}

const showSlides = (n) => {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for ( i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	slides[slideIndex - 1].style.display = "block";
	
}

let slideIndex = 1;
showSlides(slideIndex);

(function () {
	var img = document.getElementsByTagName("img");
	console.log(img);
	
})();