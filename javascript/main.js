$(document).ready(function() { 
	/* Close Modal */
	$('.close-box1').click(function(){
	 	$("#box-1").hide();
	});
	$('.close-box2').click(function(){
	 	$("#box-2").hide();
	});
	$('.close-box3').click(function(){
	 	$("#box-3").hide();
	}); 

	/*Slide Front*/
	$('#box-1').click(function(){
		$(this).css("z-index", "2");
	 	$("#box-2").css("z-index", "1");
	 	$("#box-3").css("z-index", "0");
	});


	$('#box-2').click(function(){
		$(this).css("z-index", "2");
	 	$("#box-3").css("z-index", "1");
	 	$("#box-1").css("z-index", "0");
	});

	$('#box-3').click(function(){
		$(this).css("z-index", "2");
	 	$("#box-1").css("z-index", "0");
	 	$("#box-2").css("z-index", "1");
	});			
});