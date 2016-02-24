// JavaScript Document
window.resizeTo(375, 667);

$(document).ready(
	function(){
		//window.resizeTo(375, 667)
	
	/*$("#intro").on( "ended", function(){
		$("#logo").show(300)
		//$("#title").show(000);
		//$("#Home").show(000);
	}
	);
	
	
	$("#logo").click(
	function(){
		$("#intro").hide(000);
		$("#logo").hide(000);
		$("#title").show(000);
		$("#Home").show(000);
	}
	)
	*/
	
	
	$("a").hover(
	function(){
		$("a").css({
			"text-decoration":"underline",
			"color":"#5BD8BF"
		})
		
	},
	function(){
		$("a").css({
			"text-decoration":"none",
			"color":"#FFFFFF"
		})
	}
	)
	
	var addBlack = function(){
		$("#filter").css("background-color","hsla(0,0%,24%,0.65)")
	}
	
	
	
	
	$("#b").click(
	function(){
		location.reload();
	}
	);
	
	$("#eat").click(
	function(){
		$("#Home").hide(000);
		$("#title").html("Where To Eat")
		$("#eatInfo").show(000);
		$("#b").show(000);
		addBlack();
		}
	);
	
	$("#cook").click(
		function(){
		$("#Home").hide(000);
		$("#title").html("How To Cook")
		$("#cookTip").show(000);
		$("#b").show(000);
		addBlack();		
		}
	);
	
	$("#buy").click(
		function(){
		$("#Home").hide(000);
		$("#title").html("Where To Buy")
		$("#shopping").show(000);
		$("#b").show(000);
		addBlack();		
		}
	);
	
	$("#farm").click(
		function(){
		$("#Home").hide(000);
		$("#title").html("Where To Catch")
		$("#catch").show(000);
		$("#b").show(000);	
		addBlack();		
		}
	);
	
	
	
	
	
	
	
	
	
		}
		);
	
	
		
		
		
		
		
		
		
		
		
		
		
		
	