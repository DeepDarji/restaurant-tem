/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		
		$(".color8" ).click(function(){
			$("#color-change" ).attr("href", "css/green.css" );
			return false;
		});
		
		$(".color1" ).click(function(){
			$("#color-change" ).prop("href", "css/cyan.css" );
			return false;
		});
		
		$(".color2" ).click(function(){
			$("#color-change" ).attr("href", "css/salmon.css" );
			return false;
		});
		
		$(".color3" ).click(function(){
			$("#color-change" ).attr("href", "css/purple.css" );
			return false;
		});

		$(".color4" ).click(function(){
			$("#color-change" ).attr("href", "css/peru.css" );
			return false;
		});

		$(".color5" ).click(function(){
			$("#color-change" ).attr("href", "css/yellowgreen.css" );
			return false;
		});
				
		$(".color6" ).click(function(){
			$("#color-change" ).attr("href", "css/maroon.css" );
			return false;
		});
		
		$(".color7" ).click(function(){
			$("#color-change" ).attr("href", "css/yellow.css" );
			return false;
		});

			

		$("#style-switcher h2 a").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			console.log(div.css("left"));
			if (div.css("left") === "-185px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-185px"
				});
			}
		})
		
		// Layout Style Switcher
	    $("#layout-style").change(function(e){
			if( $(this).val() == 1){
				$("body").removeClass("boxed");
				$("body").addClass("wide");
				$(".bgr").addClass("hide"); 
				       
			} else if( $(this).val() == 2){
				$("body").addClass("boxed");
				$("body").removeClass("wide");
				$(".bgr").removeClass("hide");      
			}
		})

		$(".colors li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("li").removeClass("active");
			$(this).parent().addClass("active");
		})
		
		$(".bg li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("li").removeClass("active");
			$(this).parent().addClass("active");
			var bg = $(this).css("backgroundImage");
			$("body").css("backgroundImage",bg)
		})

		$("#reset a").click(function(e){
			var bg = $(this).css("backgroundImage");
			$("body").css("backgroundImage","url(./images/patterns/pattern-1.jpg)");
			$("body").removeClass("boxed").addClass("wide");
			$(".bgr").addClass("hide");
		})
			

	});