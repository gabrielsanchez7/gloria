$(document).ready(function(){

	// Menú
	var arrMenu = [
		{page: "Inicio", url: "index"},
		{page: "Nosotros", url: "nosotros"},
		{page: "Productos", url: "productos"},
		{page: "Servicios", url: "servicios"},
		{page: "Blog", url: "blog"},
		{page: "Contacto", url: "contacto"}
	];

	for(i = 0; i < arrMenu.length; i++){
		$("header .menu, footer .menu-footer").append('<li><a href="../pages/' + arrMenu[i].url + '.html">' + arrMenu[i].page + '</a></li>');
	}

	// Redes sociales
	var arrMedia = [
		{link: "https://www.facebook.com/GloriaPeru/", class: "fa-facebook"},
		{link: "https://twitter.com/lecheglorianoof?lang=es", class: "fa-twitter"},
		{link: "https://www.youtube.com/channel/UCjpfosPtvFXMv4jGIDZX36A", class: "fa-youtube-play"},
	];

	for(i = 0; i < arrMedia.length; i++){
		$('header .media, footer .media').append('<li><a href="' + arrMedia[i].link + '" target="_blank"><i class="fa ' + arrMedia[i].class + '"></i></a></li>')
	}

	// Iconos de validación para formulario
	var inputs = $('.lblInput input');
	for(i = 0; i < inputs.length; i++){
		$(inputs[i]).after('<span class="fa fa-check"></span><span class="fa fa-times"></span>');
	}

	// Validar formulario

	$('.body-home .submit').click(function(ev){
		var regexNombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s+]{3,25}$/;
		var regexEmail = /^([\w_.-])+\@(([\w-])+.)+(\w{2,4})+$/;

		var nombre = $('#name').val();
		var apellido = $('#surname').val();
		var email = $('#email').val();

		ev.preventDefault();

		function validar(regex, test, id){
			if(!regex.test(test)){
				$('#' + id).siblings('.fa-times').animate({right: '6px'}, 'fast');
				$('#' + id).siblings('.fa-check').animate({right: '-32px'}, 'fast');
			}
			else {
				$('#' + id).siblings('.fa-check').animate({right: '6px'}, 'fast');
				$('#' + id).siblings('.fa-times').animate({right: '-32px'}, 'fast');
			}
		}
		validar(regexNombre, nombre, 'name');
		validar(regexNombre, apellido, 'surname');
		validar(regexEmail, email, 'email');
	});

	// Slider del home
	var position = 1;
	var slides = $('.slide');
	var activeSlide = 'slide-active';
	var dot = $('.dot');
	var activeDot = 'dot-active';

	var slideHome = function(){
		if(position <= slides.length){
			$('.slide.' + activeSlide).removeClass(activeSlide).next().addClass(activeSlide);
			$('.dot.' + activeDot).removeClass(activeDot).next().addClass(activeDot);
			position++;
			if(position > slides.length){
				slides.eq(0).addClass(activeSlide).siblings().removeClass(activeSlide);
				dot.eq(0).addClass(activeDot).siblings().removeClass(activeDot);
				position = 1;
			}
		}
	}

	setInterval(slideHome, 4000);

	var handlerRight = $('.arrow-right');
	var handlerLeft = $('.arrow-left');

	handlerRight.click(function(){
		slideHome();
	});
	handlerLeft.click(function(){
		if(position <= slides.length){
			$('.slide.' + activeSlide).removeClass(activeSlide).prev().addClass(activeSlide);
			$('.dot.' + activeDot).removeClass(activeDot).prev().addClass(activeDot);
			position--;
			if(position < 1){
				slides.eq(slides.length - 1).addClass(activeSlide).siblings().removeClass(activeSlide);
				dot.eq(slides.length - 1).addClass(activeDot).siblings().removeClass(activeDot);
				position = slides.length;
			}
		}
	});

	// Background historia
	$('#nosotros .historia1').css('background-color', '#D7DBDD');

	dot.click(function(ev){
		var target = ev.target;
		var data = $(target).attr('data-dot');
		$(target).addClass(activeDot).siblings().removeClass(activeDot);
		$('.slide.slide' + data).addClass(activeSlide).siblings().removeClass(activeSlide);
		position = data;
	});

	// Lista de marcas
	var rutaMarcas = '../assets/logo-';
	var arrMarcas = [
		{image: 'gloria-product.png', alt: 'Marca Gloria'},
		{image: 'bonle.png', alt: 'Marca Bonlé'},
		{image: 'monaco.png', alt: 'Marca Mónaco'},
		{image: 'chicolac.png', alt: 'Marca Chicolac'},
		{image: 'pura-vida.png', alt: 'Marca Pura Vida'},
		{image: 'bella-holandesa.png', alt: 'Marca Bella Holandesa'},
		{image: 'la-mesa.png', alt: 'Marca La Mesa'},
		{image: 'aruba.png', alt: 'Marca Aruba'},
		{image: 'tampico.png', alt: 'Marca Aruba'},
		{image: 'multilac.png', alt: 'Marca Multilac'},
		{image: 'yomost.png', alt: 'Marca Yomost'},
		{image: 'soy-vida.png', alt: 'Marca Soy Vida'},
		{image: 'milkito.png', alt: 'Marca Milkito'},
		{image: 'mr-chips.png', alt: 'Marca Mr. Chips'},
		{image: 'casa-grande.png', alt: 'Marca Casa Grande'},
		{image: 'cartavio.png', alt: 'Marca Cartavio'}
	];

	for(i = 0; i < arrMarcas.length; i++){
		$('#productos .product-list').append('<li><a href="#"><img src="' + rutaMarcas + arrMarcas[i].image + '" alt="' + arrMarcas[i].alt + '"></a></li>')
	}

	var arrCategorias = [
		'Leche Evaporada',
		'Leche Fresca',
		'Leche en Polvo',
		'Yogurt',
		'Néctar y refrescos',
		'Mantequilla',
		'Mermelada',
		'Conservas de pescado',
		'Café',
		'Queso',
		'Azúcar',
		'Repostería',
		'Panetones'
	];

	for(i = 0; i < arrCategorias.length; i++){
		$('#productos .productos ul').append('<li><a href="#">' + arrCategorias[i] + '</a></li>')
	}

	// Hover para listado de productos
	var productos = $('.product-list li a');
	productos.css({
		filter: 'grayscale(1)',
		transform: 'scale(0.9)',
		opacity: '0.5',
		transition: '0.25s'
	});

	productos.hover(function(){
		$(this).css({
			filter: 'grayscale(0)',
			opacity: '1',
			transform: 'scale(1)'
		});
	});

	productos.mouseleave(function(){
		$(this).css({
			filter: 'grayscale(1)',
			transform: 'scale(0.9)',
			opacity: '0.5',
			transition: '0.25s'
		});
	});

	// Mostrar input type file con otro diseño
	$('.attach').click(function(){
		$('input[type="file"]').trigger('click');
	});

	// Desahilitar zoom del mapa de google
	$('.map').click(function(){
		$(this).find('iframe').css({
			opacity: '1',
			pointerEvents: 'auto'
		});
	}).mouseleave(function(){
		$(this).find('iframe').css({
			opacity: '0.7',
			pointerEvents: 'none'
		});
	});

});