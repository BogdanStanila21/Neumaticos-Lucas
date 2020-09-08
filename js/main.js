	$(function(){
    
    $('a').on('click',function(e){
        
        e.preventDefault();
     
        var strAncla=$(this).attr('href');

        $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
        },1250);
        });
		});


		$('#toggle_menu').on('click', desplegar);
		
		var estado = "replegado";
		function desplegar()
		{
			if(estado == "replegado")
			{
				$('#elements').slideDown();
				estado = "desplegado";	
			}
			else{
				$('#elements').slideUp();
				estado = "replegado";
			}
			
		}

$(document).ready(function(){
    $("#call1").click(function(){
        $("#ghost1").slideToggle();
    });
 	$("#call2").click(function(){
        $("#ghost2").slideToggle();
    });
 	$("#call3").click(function(){
        $("#ghost3").slideToggle();
    });
 	$("#call4").click(function(){
        $("#ghost4").slideToggle();
    });
 	$("#call5").click(function(){
        $("#ghost5").slideToggle();
    });
 });







		$(window).resize(function(){

			if ($(window).width() >= 700) {
 $("#ghost1, #ghost2, #ghost3, #ghost4, #ghost5").slideDown();
			}
			else
 {
 $("#ghost1, #ghost2, #ghost3, #ghost4, #ghost5").slideUp();
			};


       if ($(window).width() >= 700) {  

        $('#elements').slideDown();
				estado = "desplegado";

      		 }     
      	else{
				$('#elements').slideUp();
				estado = "replegado";
			}

		});




	