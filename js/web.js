(function() {

	var preloader = document.getElementById("preloader");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame() {
		if(loading == 50) {
			clearInterval(id);
			window.open("./interact.html", "_self");
		} else {
			loading = loading + 1;
			if(loading == 40) {
				preloader.style.animation = "fadeout 1s ease";
			}
		}
	}
})();