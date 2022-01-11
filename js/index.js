// JavaScript Document

	$(function(){

//			$(".fr").click(function(){
// 			$('.side').toggleClass('open');
// 			$('.pop_abs').toggleClass('pop_add2');
//			return false;
//			});
//
//			$(".fr.active").click(function(){
// 			$('.side').toggleClass('close');
// 			$('.pop_abs').toggleClass('pop_add');
//			return false;
//			});
//
//
//			$(".pop_abs").click(function(){
// 			$('.side').toggleClass('open');
// 			$('.fr').toggleClass('active');
// 			$('.pop_abs').toggleClass('pop_add');
// 			$('.pop_abs').toggleClass('pop_add2');
//			return false;
//			});



	});

	  // tab

  const currentlocation = location.href;
  const menuItem = document.querySelectorAll('a')
  const menulength = menuItem.length;
  for (let i = 0; i < menulength; i++) {
    if (menuItem[i].href === currentlocation) {
      menuItem[i].className = "active";
    }
  }





			$(".sidelink a").click(function(){
				$(".website_container").addClass("push_containner");
				$("body").addClass("noscroll");
				$(".overlay_popup").addClass("overlay_popup_show");
				$(".side_bar").addClass("side_show");
				return false;
			});
			$(".overlay_popup").click(function(){
				$(".website_container").removeClass("push_containner");
				$("body").removeClass("noscroll");
				$(this).removeClass("overlay_popup_show");
				$(".side_bar").removeClass("side_show");
				return false;
			});
			$(".close").click(function(){
				$(".website_container").removeClass("push_containner");
				$("body").removeClass("noscroll");
				$(".overlay_popup").removeClass("overlay_popup_show");
				$(".side_bar").removeClass("side_show");
				return false;
			});
	
	


    $(".right_menu_link a").click(function () {
	    $(".filter_menu").fadeToggle();
	});



	

//    $(".right_menu_link a").click(function () {
//	    $(".filter_menu").addClass('filter_show');
//	    $(".filter_menu").removeClass('filter_hide');
//	});
//	
//    $(".close").click(function () {
//	    $(".filter_menu").addClass('filter_hide');
//	    $(".filter_menu").removeClass('filter_show');
//	});



    $(".list_images_pop_up h4 i").click(function () {
	    $(".list_images li i").fadeIn();
	});

    $(".list_images li i").click(function () {
        $(this).parents("li:eq(0)").remove();
	});


            $(document).ready(function(){

                $(document).scroll(function() {
                    var top = $(document).scrollTop();
                    if (top > 80) {
                        $("body").addClass("headsticky");
                    }
                    else if (top < 80) {
                        $("body").removeClass("headsticky");
                    } 
                });
            });

		
