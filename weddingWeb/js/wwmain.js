$( document ).ready(function() {
	
	$('.nav-link').hover(function(){
		$(this).addClass('bords');
	},function(){
		$(this).removeClass('bords');
	})

	$(window).scroll(function(){
		
		if($(this).scrollTop()> ($('#port').offset().top -$('#port').outerHeight(true) )){
			$('#port').addClass('offanim');
			console.log("sakto");
		}else{
			$('#port').removeClass('offanim');
		}
		if($(this).scrollTop()> ($('#port2').offset().top -$('#port2').outerHeight(true) )){
			$('#port2').addClass('offanim');
			console.log("sakto2");
		}else{
			$('#port2').removeClass('offanim');
		}
		if($(this).scrollTop()> ($('#port3').offset().top -$('#port3').outerHeight(true) )){
			$('#port3').addClass('offanim');
			console.log("sakto3");
		}else{
			$('#port3').removeClass('offanim');
		}
		
	})
	
	








 let toggleOn = 0;
	$('.navbar-toggler').click(function(){
		toggleOn++;
		if(toggleOn == 1){
			$('.navbar-toggler-icon').addClass('navbar-toggler-icon-rotate');
			setTimeout(function(){
				$('.navbar-toggler-icon').hide();
				$('.navbar-toggler-icon').removeClass('navbar-toggler-icon-rotate');
				$('.navbar-toggler-x').css({
					display:'inline-block'
				});
			},100)
			
		}if(toggleOn == 2){

			$('.navbar-toggler-x').addClass('navbar-toggler-x-rotate');
			setTimeout(function(){
				$('.navbar-toggler-x').hide();
				$('.navbar-toggler-x').removeClass('navbar-toggler-x-rotate');
				$('.navbar-toggler-icon').css({
					display:'block'
				});
			},100)
			toggleOn = 0; 
		}

	})

	
	
	
});