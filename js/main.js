function slideTo(target){
	document.querySelector(target).scrollIntoView({ 
	  behavior: 'smooth' 
	});
}

function slideToContacts(target){
	document.querySelector(target).scrollIntoView({ 
	  behavior: 'smooth' 
	});
	setTimeout(function(){
		document.querySelector(target).scrollIntoView({ 
	  		behavior: 'smooth' 
		});
	},500);
}

var	navPosition = false;

function slideMenuDown(){
	if (!navPosition){
		$("body").addClass('freeze');
		setTimeout(function(){$("body").removeClass('freeze');}, 2000);
		$("#header-nav").removeClass("nav-bar-top-hide");
		$("#header-nav").removeClass("nav-bar-top");
		$("#main-nav-bar").toggleClass("d-none");
		setTimeout(function(){$("#header-nav").addClass("nav-bar-top");}, 1);
		navPosition = true;
	} else {
		$("body").addClass('freeze');
		setTimeout(function(){$("body").removeClass('freeze');}, 2000);
		$(this).unbind('toggle').unbind('click');
		$("#header-nav").addClass("nav-bar-top-hide");
		setTimeout(function(){$("#main-nav-bar").addClass("d-none");}, 2000);
		navPosition = false;
	}
}


var hurryButton = $("#hurry-button");
var buttonActive = false;

hurryButton.click( function(){
	if (!buttonActive) {
		$('.hide-for-hurry').fadeOut("slow", function(){
				$(this).addClass('d-none');
		});
		buttonActive = true;
		$(this).fadeIn("slow", function(){
			$(this).text('Let me try the full version!').addClass('active');
		})
	} else {
		$('.hide-for-hurry').fadeIn("slow", function(){
				$(this).removeClass('d-none');
		});
		buttonActive = false;
		$(this).fadeIn("slow", function(){
			$(this).text("C'mon, I'm-in-a-hurry!!!").removeClass('active');
		});
	};

});