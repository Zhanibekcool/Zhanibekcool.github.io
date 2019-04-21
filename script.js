$(document).ready(function (){
	var x = 0;
    $(".main_btn").click(function(){
    	x++;
    	if(x % 2 == 1){
    		$(".Mainn_menu").animate({left:"0px"});
    		$(".main_btn").animate({left:"260px"});
    		$(".topp").animate({left:"320px"});
    		$(".content").animate({});
    	}
    	else{
    		$(".Mainn_menu").animate({left:"-250px"});
    		$(".main_btn").animate({left:"20px"});
    		$(".topp").animate({left:"80px"});
    		$(".content").animate({});
    	}
    });
});