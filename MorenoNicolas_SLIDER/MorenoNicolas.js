window.onload = function() {

	// Array con todos los botones de navegación
	const btns = document.querySelectorAll(".nav-btn");

	// Array con todos los botones de transición
	const btns_tran = document.querySelectorAll(".tran-btn");

	// Array con todos los videos
	const sliders = document.querySelectorAll(".video-slider");

	// Array con todos los textos
	const contents = document.querySelectorAll(".content");

	// Controlador del background
	var sliderNav = function(activar) {

		// Elimino el active anterior (BOTON)
		btns.forEach((btn) => {
			btn.classList.remove("active");
		})

		// Elimino el active anterior (SLIDER)
		sliders.forEach((slider) => {
			slider.classList.remove("active");
		})

		// Elimino el active anterior (TEXTO)
		contents.forEach((content) => {
			content.classList.remove("active");
		})

		// Actualizo nuevo active
		btns[activar].classList.add("active");
		sliders[activar].classList.add("active");
		contents[activar].classList.add("active");
	}

	btns.forEach((btn, i) => {
		btn.addEventListener("click", () => {
			sliderNav(i);
		})
	})


	// Controlador de las transiciones
	document.getElementById("left_tran").onclick = transition_left;
	document.getElementById("right_tran").onclick = transition_right;
	document.getElementById("top_tran").onclick = transition_top;
	document.getElementById("bot_tran").onclick = transition_bot;
	document.getElementById("mid_tran").onclick = transition_middle;

	// Transicion por defecto
	var transition = "left_tran";
	var new_transition = "left_tran";

	function sliderTran(transition_new) {

		// Elimino la transicion anterior (BOTON)
		sliders.forEach((slider) => {
			slider.classList.remove(transition);
		})

		// Actualizo la nueva transicion
		sliders.forEach((slider) => {
			slider.classList.add(transition_new);
		})

		transition = transition_new;
	}

	function transition_left() {
		sliderTran("left_tran");

		// Elimino el active anterior (BOTON)
		btns_tran.forEach((tran) => {
			tran.classList.remove("active");
		})

		document.getElementById("left_tran").classList.add("active");
	}

	function transition_right() {
		sliderTran("right_tran");

		// Elimino el active anterior (BOTON)
		btns_tran.forEach((tran) => {
			tran.classList.remove("active");
		})

		document.getElementById("right_tran").classList.add("active");
	}

	function transition_top() {
		sliderTran("top_tran");

		// Elimino el active anterior (BOTON)
		btns_tran.forEach((tran) => {
			tran.classList.remove("active");
		})

		document.getElementById("top_tran").classList.add("active");
	}

	function transition_bot() {
		sliderTran("bot_tran");

		// Elimino el active anterior (BOTON)
		btns_tran.forEach((tran) => {
			tran.classList.remove("active");
		})

		document.getElementById("bot_tran").classList.add("active");
	}

	function transition_middle() {
		sliderTran("mid_tran");

		// Elimino el active anterior (BOTON)
		btns_tran.forEach((tran) => {
			tran.classList.remove("active");
		})

		document.getElementById("mid_tran").classList.add("active");
	}

	// Controlador colores
	document.getElementById("color-one").onclick = color_one;
	document.getElementById("color-two").onclick = color_two;
	document.getElementById("color-thr").onclick = color_three;
	document.getElementById("color-fou").onclick = color_four;
	document.getElementById("color-fiv").onclick = color_five;

	function color_one() {
		document.getElementById("home").style.background = "#23DB82";
		const element = document.querySelector(".home");

		// Ya que debo cambiar el color de pseudoelementos y no pueden ser seleccionados, les asigno el color mediante una variable
		// en CSS
		element.style.setProperty("--color-one", "rgba(35, 219, 130, 0.5)");
		element.style.setProperty("--color-two", "rgba(35, 219, 130, 1.0)");

	}

	function color_two() {
		document.getElementById("home").style.background = "#DB23CD";
		const element = document.querySelector(".home");

		element.style.setProperty("--color-one", "rgba(219, 35, 205, 0.5)");
		element.style.setProperty("--color-two", "rgba(219, 35, 205, 1.0)");

	}

	function color_three() {
		document.getElementById("home").style.background = "#8523DB";
		const element = document.querySelector(".home");

		element.style.setProperty("--color-one", "rgba(133, 35, 219, 0.5)");
		element.style.setProperty("--color-two", "rgba(133, 35, 219, 1.0)");
	}

	function color_four() {
		document.getElementById("home").style.background = "#2395DB";
		const element = document.querySelector(".home");

		element.style.setProperty("--color-one", "rgba(35, 149, 219, 0.5)");
		element.style.setProperty("--color-two", "rgba(35, 149, 219, 1.0)");
	}

	function color_five() {
		document.getElementById("home").style.background = "#87DB23";
		const element = document.querySelector(".home");

		element.style.setProperty("--color-one", "rgba(135, 219, 35, 0.5)");
		element.style.setProperty("--color-two", "rgba(135, 219, 35, 1.0)");
	}

}
