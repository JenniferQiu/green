$(function(){
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;			
		var height = $('.slider-banner').height();
		console.log(height)
		if(scrollTop>=height){
			$('.link').show();
		}
		else{
			$('.link').hide('slow');

		}
	})

	$('.img-responsive').mouseenter(function(){
		$(this).css('opacity','0.5');
	})
	$('.img-responsive').mouseleave(function(){
		$(this).css('opacity','1');
	})




$('.icons-hamburger').click(function(){
	if($('.menu-moblie ul').css('left')=='-500px'){
			$('.menu-moblie ul').css('left','-30px');
			$('.logo').css('display','none');
		}else{
			$('.menu-moblie ul').css('left','-500px');
			$('.logo').css('display','block');

		}
})




})
