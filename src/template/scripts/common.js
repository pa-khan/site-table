$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var panel = $('.panel'),
			panelClass = 'panel_scroll';

	$(window).on('load scroll', function() {
		if ($(window).scrollTop() > 0) {
			panel.addClass(panelClass);
		} else{
			panel.removeClass(panelClass);
		}
	});

	var tablets = $('#tablets').get(0);
	var parallaxInstance = new Parallax(tablets);


	var slider = $('.racks__slider');
	slider.slick({
		slidesToShow: 4
	})

	$('.catalog__link span').click(function(event) {
		var item = $(this).parents('.catalog__item');
				params = item.find('.catalog__params')
		if (!params.hasClass('catalog__params_show')) {
			$('.catalog__params').removeClass('catalog__params_show');
			params.addClass('catalog__params_show');	
		} else{
			params.removeClass('catalog__params_show');	
		}
		
	});

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input');
	valueElementForm('checkbox');
	
	$('select').styler();


	$('.input input').focus(function(event) {
		var input = $(this).parents('.input');
		input.addClass('input_focus');
	});

	$('.input input').focusout(function(event) {
		var input = $(this).parents('.input');
		input.removeClass('input_focus');
	});

	$('.input input').on('change', function(event) {
		var input = $(this).parents('.input');
		if ($(this).val() == '') {
			input.removeClass('input_filled');	
		} else{
			input.addClass('input_filled');
		}
	});


	$('.form .btn').click(function(event) {
		event.preventDefault();
		$.fancybox.close();
		$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
	});
});
