$(document).ready(
	function(){
		//window.resizeTo(375, 667);
		

		
		$("#eat").hover(
		function(){
		   $("#eat > img").css(
		   	{
			   "transform" : "rotate(360deg)",
			   "transition-duration" : "0.3s"
			   }
			   );
			$(this).css("background-color","rgba(72,209,147,1.00)");
		},
		
      function(){
			$("#eat > img").css("transform","rotate(0deg)");
			$(this).css("background-color","rgba(148,39,199,1.00)")
		}
		);
		
		
		
		
		$("#buy").hover(
		function(){
		   $("#buy > img").css(
		   	{
			   "transform" : "rotate(360deg)",
			   "transition-duration" : "0.3s"
			   }
			   );
			  $(this).css("background-color","rgba(72,209,147,1.00)");
			 
		},
      function(){
			$("#buy > img").css("transform","rotate(0deg)");
			$(this).css("background-color","rgba(148,39,199,1.00)")
		}
		);
		
		
		
		
		$("#cook").hover(
		function(){
		   $("#cook > img").css(
		   	{
			   "transform" : "rotate(360deg)",
			   "transition-duration" : "0.3s"
			   }
			   );
			  $(this).css("background-color","rgba(72,209,147,1.00)");
		},
      function(){
			$("#cook > img").css("transform","rotate(0deg)");
			$(this).css("background-color","rgba(148,39,199,1.00)")
		}
		);
		
		
		
		
		$("#farm").hover(
		function(){
		   $("#img > img").css(
		   	{
			   "transform" : "rotate(360deg)",
			   "transition-duration" : "0.3s"
			   }
			   );
			 $(this).css("background-color","rgba(72,209,147,1.00)");
		},
      function(){
			$("#img > img").css("transform","rotate(0deg)");
			 $(this).css("background-color","rgba(148,39,199,1.00)");
		}
		);
		
		
		
		
		
		
		
		
		
		
		
		
		
		}
	);// JavaScript Document