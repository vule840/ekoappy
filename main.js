//SCROLL TRIGGER
document.addEventListener("DOMContentLoaded", function() {
	var trigger = new ScrollTrigger({
		addHeight: true
	});
});

//SMOOTH SCROLL
var scroll = new SmoothScroll('a[href*="#"]');

//GUMB ON SCROLL
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Chrome, Safari and Opera
	document.documentElement.scrollTop = 0; // For IE and Firefox
}
