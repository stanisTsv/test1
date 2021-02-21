// scroll menu

$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() === 0){
      $(".top-head").css({
        "position": "absolute",
        "background-color": "transparent"
      });
    }else if($(this).scrollTop() > 0){
      $(".top-head").css({
        "position": "fixed",
        "background-color": "#000"
      });
    }else{
      $(".top-head").css({
        "position": "absolute",
        "background-color": "transparent"
      });
    }
  });
});

$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 350){
        $(".top-head").css({
          "background-color": "#edede6",
          "box-shadow": "0px 0px 5px 0px rgba(0, 0, 0, 0.75)"
        });
        $(".date-weather-currency").css("display","none");
        $(".menu ul").css({
        	"position": "fixed",
        	"top": "0",
			    "margin-top": "0px",
        	"padding-left": "4px",
        	"width": "919px",
        	"left": "50px",
        	"height": "50px",
        	"z-index": "49",
        	"border-bottom": "0"
        });
        $(".search-btn").addClass("search-btn-fixed");
        $(".share-btn").addClass("share-btn-fixed");
    }else if($(this).scrollTop() < 350 && $(this).scrollTop() > 0){
      $(".top-head").css({
        "background-color": "#000",
        "box-shadow": ""
      });
  	  $(".date-weather-currency").css("display","");
  	  $(".menu ul").css({
        	"position": "",
        	"top": "",
			    "margin-top": "",
        	"padding-left": "",
        	"width": "",
        	"left": "",
        	"height": "",
        	"z-index": "",
        	"border-bottom": ""
      });
        $(".search-btn").removeClass("search-btn-fixed");
        $(".share-btn").removeClass("share-btn-fixed");
    }
  });
});
