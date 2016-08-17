
	var counter=0;
	var photoArr=["sld1.jpg","sld2.jpg","sld3.jpg","sld4.jpg","sld5.jpg","sld6.jpg"];
function slider(){
	var sliderWidth=$("#slider").width();
	var sliderWidth=$("#slider").height();



	$("#slider").append('<div class="frame text-center"> </div>');
	   
	$(".frame").append('<div class="col-md-9 text-center "> </div>');
	$(".frame").append('<div class="col-md-3"> </div>');
	$(".col-md-3").css({

		"position":"relative"
	});
	$(".col-md-9 ").append(' <button id="next" > Next</button> <button id="prev" > Prev </button> ');
	$(".col-md-9").append('<img>');

	$(".col-md-9 img").css({
	"position":"relative"
	});
	$(".col-md-9 button").eq(0).css({
	"position":"absolute",
	 "z-index": "1",
	 "right":"15px",
	 "top":"150px",
	 "border":"none",
	 "color":"white",
	 "padding":"10px"

	});

	$(".col-md-9 button").eq(1).css({
	"position":"absolute",
	 "z-index": "1",
	 "left":"15px",
	 "top":"150px",
	  "border":"none",
	 "color":"white",
	 "padding":"10px"
	});

     $(".col-md-3 ").append('<div class="slide"> </div>');
      for(i=0;i<photoArr.length;i++){

		$(".slide ").append('<div class="item imgDiv'+i+'"><img src="'+photoArr[i]+'"></div>');




	}

    $(".col-md-3 .slide div").css({
    	"width":"150px",
    	"height":"80px",
    	"list-style":"none",
    	"border":"1px solid black",
    	"padding":"0px",
    	"position":"relative" 	

    });  
     $(".col-md-3 img").css({
     	"width": "100%"	,
     	"height":"100%",
     });  
	$(".col-md-9 img").attr('src',photoArr[0]).css({
	"width": '100%' 

	});

	$(".frame").css({
	"height":"300px",
	"overflow": "hidden",
	 "position":"relative"
	 


	});




	$("#next").attr('onclick','next()');
    $("#prev").attr('onclick','prev()');
	 //$(setInterval("next()", 2000));

	 $(setInterval("anime()", 2000));
  
	 

}
   var say=0;

	function next(){
		counter++;
		// console.log(counter);
		if(counter==photoArr.length) counter=0;
		$(".col-md-9 img").attr('src',photoArr[counter]);


	};

	function prev(){
		counter--;
		if(counter==-1) counter=photoArr.length-1;
		$(".col-md-9 img").attr('src',photoArr[counter]);

	};

         $(".col-md-3 .slide div img").css({
         	"width":"100%"
         });

	

	


     


// 	$(document).on( 'click',".slide .imgDiv" ,function() {
// 		console.log('dsfsd');
//     $('.slide div').each(function() {
//     	$('div').removeClass('act');
//     });
  
//     $(this).addClass('act');
     
// });
   $x=0;
  var m=1;
	jQuery(document).ready(function($) {
		$('.slide div').click(function(event) {
			$('.slide div').removeClass('act');
			$(this).addClass('act');
			
		    

		});
	});

	jQuery(document).ready(function($) {
		$('.slide img').click(function(event) {
			var mySrc=$(this).attr("src");
			 $(".col-md-9 img").attr("src",mySrc);
			

		});
	});

     

     var $top=-80;
	  function anime(){
		$top=-80
	    $(".col-md-3 .slide div:first").animate({top: $top});
	    $(".col-md-3 .slide div:first").appendTo(".slide");

	    for (var i = 0; i <$('.item').length; i++) {

	 	$act=$('.item').eq(i).hasClass('act')
	 	if ($act==true){

	 		$x=i;
	    	
	 	}
	 	$('.item').eq(i).removeClass('act')

	    };


        $('.item').eq($x+1).addClass('act')
	 	var mySrc=$('.item:eq('+$x+1+') img').attr("src");
	 	$(".col-md-9 img").attr("src",mySrc)
	    
		}





 
