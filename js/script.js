/*
	Preloader
*/
$(window).on('load', function () {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut();
});

/*
	Team
*/
$(function () {
	$("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
});

/*
	Team
*/
$(function () {

	$("#progress-elements").waypoint(function () {

		$(".progress-bar").each(function () {

			$(this).animate({

				width: $(this).attr("aria-valuenow") + "%"

			}, 1000);

		});

		this.destroy();

	}, {
		offset: 'bottom-in-view'
	});
});

/*
	Responsive Tabs
*/

$(function () {

	$("#services-tabs").responsiveTabs({

	});

});

/*
	Galeria Menu
*/
$(window).on('load', function () {

	//Inicializar Isotope
	$("#isotope-container").isotope([
	]);

	// filter items on button click
	$("#isotope-filters").on('click', 'button', function () {

		//Obtener valores del filtro
		var filterValue = $(this).attr('data-filter');

		//Filtro Galeria
		$("#isotope-container").isotope({
			filter: filterValue
		});

		//Activar boton
		$("#isotope-filters").find('.active').removeClass('active');
		$(this).addClass('active');

	});

});

/*
	Magnifier
*/
$(function () {

	$("#portfolio-wrapper").magnificPopup({

		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}

	});

});

/*
	Testimonios
*/
$(function () {
	$("#testimonial-slider").owlCarousel({
		items: 1,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
});

/*
	Contador
*/
$(function () {
	$(".counter").counterUp({
		delay: 10,
        time: 2000
    });
});
/*
	Clientes
*/
$(function () {
	$("#clients-list").owlCarousel({
		items: 5,
		autoplay: true,
		smartSpeed: 400,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});
});

/*
	Navegacion
*/
/* Mostrar y Esconder el Menu */
$(function () {
	
	// Mostrar & Esconder Menu
	showHideNav();
	
	$(window).scroll(function(){
		
		// Mostrar & Esconder Menu
		showHideNav();
		
	});
	
	function showHideNav(){
		
		if( $(window).scrollTop() > 50 ) {
			
			// Mostrar Blanco
			$("nav").addClass("white-nav-top");
			
			// Mostrar Logo Oscuro
			$(".navbar-brand img").attr("src", "img/logo/GOLD.svg");
			
			// Mostrar el botón volver al principio
			$("#back-to-top").fadeIn();
			
		} else {
			
			// Mostrar normal
			$("nav").removeClass("white-nav-top");
			
			// Mostrar Logo Normal
			$(".navbar-brand img").attr("src", "img/logo/GOLD_WH.svg");
			
			// Ocultar volver al botón superior
			$("#back-to-top").fadeOut();
			
		}
		
	}
	
});

// Smooth Scrolling

$(function () {
	$("a.smooth-scroll").click(function (event){
		
		event.preventDefault();
		
		// Get section id like #about, #services, #work, #team and etc.
		var section_id = $(this).attr("href");
		
		$("html, body").animate({
			
			scrollTop: $(section_id).offset().top - 64
			
		}, 1250, "easeInOutExpo");
		
	});
});










































