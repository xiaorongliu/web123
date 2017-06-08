(function(){
	var i = 0;
	var line = $(".lunbodown ul li");
    var liner = $(".lunbodown ul li div");
    var left = $(".imgbox .leftbtn .leftbtn-c");
    var right = $(".imgbox .rightbtn .rightbtn-c");
    liner[0].style.background="#45494d";
	function next(){
		 i++;
		$(".imgbox ul").animate({"left" : -1000 * i},500,function(){
            if (i > 7) {
                   i = 0;
                   $(this).css("left",0);
            }
            for(var k=0; k<line.length; k++){
     	 		liner[k].style.background = "#e8e8e8";
     	 	}
     	 	liner[i].style.background="#45494d";
        })   
   	} 
   	var time = setInterval(next,5000);
   	//-----------下标------------
    for(var j=0; j<line.length; j++){
     	line.click(function(){
     	 	i = $(this).index();
     	 	clearInterval(time);
     	 	$(".imgbox ul").animate({"left" : -1000 * i},20);
     	 	    for(var k=0; k<line.length; k++){
     	 	 	  liner[k].style.background = "#e8e8e8";
     	 	    }
     	 	    liner[i].style.background="#45494d";   	 	
     	 	time = setInterval(next,5000);
     	});
    }   
    //--------------左右切换-----------
    left.click(function(){
    	clearInterval(time);
    	if(i == 0){
    		i = 7;
    		$(".imgbox ul").animate({"left" : -1000 * i},20);
    		for(var k=0; k<line.length; k++){
     	 		liner[k].style.background = "#e8e8e8";
     	 	}
     	 	liner[i].style.background = "#45494d";
    	}else{
    		i -= 1;
    		$(".imgbox ul").animate({"left" : -1000 * i},20);
    		for(var k=0; k<line.length; k++){
     	 		liner[k].style.background = "#e8e8e8";
     	 	}
     	 	liner[i].style.background = "#45494d";
    	}
    	time = setInterval(next,5000);    	
    })
    right.click(function(){
    	clearInterval(time);
    	if(i == 7){
    		i = 0;
    		$(".imgbox ul").animate({"left" : -1000 * i},20);
    		for(var k=0; k<line.length; k++){
     	 		liner[k].style.background = "#e8e8e8";
     	 	}
     	 	liner[i].style.background = "#45494d";
    	}else{
    		i += 1;
    		$(".imgbox ul").animate({"left" : -1000 * i},20);
    		for(var k=0; k<line.length; k++){
     	 		liner[k].style.background = "#e8e8e8";
     	 	}
     	 	liner[i].style.background = "#45494d";
    	}
    	time = setInterval(next,5000);    	
    })
    //---------------左右切换隐藏----------
    $(".imgbox").mouseenter(function(){
    	$(".imgbox .leftbtn .leftbtn-n").css("display","block");
    	$(".imgbox .rightbtn .rightbtn-n").css("display","block");
    })
    $(".imgbox").mouseleave(function(){
    	$(".imgbox .leftbtn .leftbtn-n").css("display","none");
    	$(".imgbox .rightbtn .rightbtn-n").css("display","none");
    })
    $(".imgbox .leftbtn").mouseenter(function(){
    	$(".imgbox .leftbtn .leftbtn-c").css("display","block");
    })
    $(".imgbox .leftbtn").mouseleave(function(){
    	$(".imgbox .leftbtn .leftbtn-c").css("display","none");
    })
    $(".imgbox .rightbtn").mouseenter(function(){
    	$(".imgbox .rightbtn .rightbtn-c").css("display","block");
    })
    $(".imgbox .rightbtn").mouseleave(function(){
    	$(".imgbox .rightbtn .rightbtn-c").css("display","none");
    })
})();