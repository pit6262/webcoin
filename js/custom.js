$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){




    //open and close popup
	$(document).on('click', '.open-popup', function(e){
		e.preventDefault();
		$('.popup-content').removeClass('active');
		$('.popup-wrapper, .popup-content[data-popup="'+$(this).data('popup')+'"]').addClass('active');
		$('html').addClass('overflow-hidden');
		return false;
	});

	$(document).on('click', '.popup-wrapper .popup-close', function(e){
		e.preventDefault();
		$('.popup-wrapper, .popup-content').removeClass('active');
		$('html').removeClass('overflow-hidden');
		return false;
	});

	$(document).on('click', '.popup-content', function(e){
		if (e.target !== this) 
			return;
		$('.popup-wrapper, .popup-content').removeClass('active');
		$('html').removeClass('overflow-hidden');
		return false;
	});



	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */


	$('.sidebar-toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('.sidebar').toggleClass('is-open')
	})
	$('.menu-toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('.navbar-mobile').toggleClass('is-open')
	})

	$('.accordion__head').on('click', function(){
		var el = $(this);
		var elNext = $(this).next();
		$('.accordion__head').not(el).removeClass('open')
		$('.accordion__body').not(elNext).slideUp(200)
		el.next('.accordion__body').slideToggle(200);
		el.toggleClass('open');
		return false;
	});

   

    var handle = $( "#custom-handle" );
	$( "#slider" ).slider({
		range: "min",
		value: 100,
		min: 100,
		max: 50000,
	  // create: function() {
	  //   handle.text( $( this ).slider( "value" ) );
	  // },
	  slide: function( event, ui ) {
	    // handle.text( ui.value );
	    $( "#amount" ).val( ui.value );
	  }
	});
	$( "#amount" ).val( $( "#slider" ).slider( "value" ) );


});