// Sticky Header




	$(function(){

			//-----popuptable----
	    	$('.link_pop_up').click(function(){
				$(this).parents('.dets_table').find('.pops_detail').addClass('shows_popup');
            	$('.md-overlay_').addClass('shows_overlay');
				return false;
			});
			
	    	$('.md-overlay_').click(function(){
            	$('.md-overlay_').removeClass('shows_overlay');
            	$('.pops_detail').removeClass('shows_popup');
				return false;
			});
	    	$('.close_pop').click(function(){
            	$('.pops_detail').removeClass('shows_popup');
            	$('.md-overlay_').removeClass('shows_overlay');
				return false;
			});


			$(".lights > div  a").click(function () {
				$(".side_right_pop").addClass('left_pop');
				return false;
				
			});
			
			
			$(".container_table2 tr").click(function () {
				$(".side_right_pop").addClass('left_pop');
				return false;
				
			});

			$(".container_table .table_edits tr").click(function () {
				$(".side_right_pop").addClass('left_pop');
				return false;
				
			});



			$('.input_block input').focusin(function(){
				$(this).parent('.input_block').find('.auto_complete2').fadeIn();	
			});
			$('.input_block input').focusout(function(){
				$(this).parent('.input_block').find('.auto_complete2').fadeOut(100);	
			});




		});


jQuery(document).ready(function($) {
	
	$(".tab_content").addClass("hide"); //Hide all content
	$(".tab_content2").addClass("hide"); //Hide all content
	$(".tab_content3").addClass("hide"); //Hide all content

	$("div.tabs div:first").addClass("active").find("label input:radio").attr("checked",""); 
	$("div.tabs2 div:first").addClass("active").find("label input:radio").attr("checked",""); 
	$("div.tabs3 div:first").addClass("active").find("label input:radio").attr("checked",""); 


	$(".tab_content:first").removeClass("hide"); //Show first tab content
	$(".tab_content2:first").removeClass("hide"); //Show first tab content
	$(".tab_content3:first").removeClass("hide"); //Show first tab content
	//On Click Event
	
	$("div.tabs div").click(function() {
		$("div.tabs div").removeClass("active"); //Remove any "active" class
		$("div.tabs div").find("label input:radio").attr("checked","");
		$(this).addClass("active").find("label input:radio").attr("checked","checked");
		$(".tab_content").addClass("hide");
		$(".tab_content").removeClass("sho");
		var activeTab = $(this).find("label input:radio").val(); //Find the href attribute value to identify the active tab + content
		$('#' + activeTab).removeClass("hide"); //Fade in the active ID content
		$('#' + activeTab).addClass("sho"); //Fade in the active ID content
		return false;
	});



	$("div.tabs2 div").click(function() {
		$("div.tab2s div").removeClass("active"); //Remove any "active" class
		$("div.tabs2 div").find("label input:radio").attr("checked","");
		$(this).addClass("active").find("label input:radio").attr("checked","checked");
		$(".tab_content2").addClass("hide");
		$(".tab_content2").removeClass("sho");
		var activeTab = $(this).find("label input:radio").val(); //Find the href attribute value to identify the active tab + content
		$('#' + activeTab).removeClass("hide"); //Fade in the active ID content
		$('#' + activeTab).addClass("sho"); //Fade in the active ID content
		return false;
	});


	$("div.tabs3 div").click(function() {
		$("div.tabs3 div").removeClass("active"); //Remove any "active" class
		$("div.tabs3 div").find("label input:radio").attr("checked","");
		$(this).addClass("active").find("label input:radio").attr("checked","checked");
		$(".tab_content3").addClass("hide");
		$(".tab_content3").removeClass("sho");
		var activeTab = $(this).find("label input:radio").val(); //Find the href attribute value to identify the active tab + content
		$('#' + activeTab).removeClass("hide"); //Fade in the active ID content
		$('#' + activeTab).addClass("sho"); //Fade in the active ID content
		return false;
	});
});








		$(document).ready(function($) {
			
            	$("#showHide").click(function () {
			if ($(this).hasClass("showing")) {
				$(".password").attr("type", "password");
				$(this).removeClass("showing");
			}
			else{
				$(".password").attr("type", "text");
				$(this).addClass("showing");
			}
	
		});	
			
		$('.changetype').click(function(){
			$('.input_password').attr('type','text');
		});
            
		});



$(function () {

	$('.persons').mouseleave(function() {
         $(".pop_up").fadeOut();
	});
	
    $(".persons").mouseenter(function () {
         $(this).children(".pop_up").fadeIn();
	});
	
	
	$(".share_link").click(function () {
        $(this).parent(".share_blo").find(".list_socials").fadeToggle();;
		return false;
    }); 
    
       
	
	
	$(".height_scroll").animate({ scrollTop: $('.height_scroll').prop("scrollHeight")}, 1000);
	
//    $(".delete").click(function () {
//	    $(this).parents('.pop_up').parents('.persons').remove();
//	});

//    $(".delete").click(function () {
//		$(".accept").click(function () {
//			$(".delete this").parents('.pop_up').parents('.persons').remove();
//		});
//	});
	
	
		
	$('.detail_pop').mouseleave(function() {
         $(".pop_up").fadeOut();
	});
	
    $(".detail_pop").mouseenter(function () {
         $(this).children(".pop_up").fadeIn();
	});
	
//    $(".delete").click(function () {
//	    $(this).parents('.pop_up').parents('.detail_pop').parents('.list_grops li').remove();
//	});
   
//    $(".accept").click(function () {
//	    $(".delete").parents('.pop_up').parents('.detail_pop').parents('.list_grops li').remove();
//	});
	
	
    $(".katm").click(function () {
	    $(this).toggleClass('katm_to');
	});


    $(".show_all").click(function () {
	    $(".list_links").addClass("list_links_more");
	    $(this).hide();
	    $(".hide_all").css('display','block');
	    $(".nav_tree").addClass("nav_tree_top");
	});
    $(".hide_all").click(function () {
	    $(".list_links").removeClass("list_links_more");
	    $(this).hide();
	    $(".show_all").show();
	    $(".nav_tree").removeClass("nav_tree_top");
	});
	
	
 

//    $(".list_family li > div").click(function () {
//	    $(".wide").fadeIn();
//	});
//	
//    $(".head_image").click(function () {
//	    $(".wide").fadeIn();
//	});
//	


//    $(".list_family li > div").click(function () {
//	    $(".side_right_pop").addClass('left_pop');
//	    $(".side_right_pop").removeClass('left_pop2');
//	});
//	
//    $(".clos_clo").click(function () {
//	    $(".side_right_pop").addClass('left_pop2');
//	});
	

    $(".clos_clo").click(function () {
	    $(".side_right_pop").removeClass('left_pop');
	    $(".poptree").removeClass('poptreeshow');
	    $(".over_over").removeClass('over_over_show');
	    $(".wide").fadeOut();
		
	    $(".demo-container").fadeIn();
	    $("body").css('overflow','auto');
	});
	
    $(".over_over").click(function () {
	    $(".side_right_pop").removeClass('left_pop');
	    $(".poptree").removeClass('poptreeshow');
	    $(".over_over").removeClass('over_over_show');
	    $(".wide").fadeOut();
		
	    $(".demo-container").fadeIn();
	    $("body").css('overflow','auto');
	});
	 
//    $(".close_search").click(function () {
//	    $(".search_block").fadeOut();
//	});
//    $(".list_links li a.search_tree").click(function () {
//	    $(".search_block").fadeIn();
//	});
	

});
	

	
// Sticky Header


	$(function(){

			$('#scroll-top a').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 1200);
			});


	    	$('.delete').click(function(){
				$(this).parents('.inner_drop_down dl dt').remove();
				setTimeout(function(){$(".scroll").mCustomScrollbar2("update");a()},100);
				return false;
			});


/*	    	$('#table').on('click','.accept_row',function(){
				$(this).closest('tbody').remove();
				return false;
			});
	    	$('#table').on('click','.delete_row',function(){
				$(this).closest('tbody').remove();
				return false;
			});
*/

			$('.deletss').click(function(){
				$(this).parents('.dets_table').parents('td').parents('tr').parents('tbody').remove();
				return false;
			});
			
			$('.accept_row').click(function(){
				$(this).parents('.dets_table').parents('td').parents('tr').parents('tbody').remove();
				return false;
			});
			
			
	    	$('.delete_row').click(function(){table
				$(this).parents('.dets_table').parents('td').parents('tr').parents('tbody').remove();
				return false;
			});


	    	$('.input_letter h6.remember').click(function(){
				$('.input_letter_mail_hide').fadeToggle();
			});


			

});

//		$(document).on("dblclick", function(e) {
//			e.preventDefault();
//			return false;
//		});
//
//
//            $(document).ready(function () {
//                var meta = document.createElement('meta');
//                meta.name = 'viewport';
//
//                meta.setAttribute('content', 'width=1024, maximum-scale=1.0, user-scalable=0');
//
//                document.getElementsByTagName('head')[0].appendChild(meta);
//            });



//var elem = document.getElementById("contain");
//
//var defaultPrevent=function(e){e.preventDefault();}
//elem.addEventListener("touchstart", defaultPrevent);
//elem.addEventListener("touchmove" , defaultPrevent);
////document.body.addEventListener("touchstart", defaultPrevent);
////document.body.addEventListener("touchmove" , defaultPrevent);


$(window).load(function () {
	setTimeout(function(){
//		$('.loading_page').fadeOut();

//		$('.middle_containner_tree').removeClass('opacit_load');
//		$('.container_site').removeClass('container_wide');
//		$('.big_header').addClass('big_header2');
//		$('head').append( '<meta name="viewport" content="remove">' );
	},1050);
}); 




var horz_menu;
var horz_menu_trg;

function adjustLayout(){
	
    setTimeout(function(){
//        $(".left_col").width($(window).width()-340);
//        $(".block_in_nasr").width($(".left_col").width()-12- $(".col_right_nasr").outerWidth());


		$('.md-content').height( $("body").height()-200 );


        setTimeout(function(){$(".typography1").mCustomScrollbar2("update");a()},50);
        setTimeout(function(){$(".typography2").mCustomScrollbar2("update");a()},50);
        setTimeout(function(){$(".height_scroll").mCustomScrollbar2("update");a()},50);
        setTimeout(function(){$(".height_scroll2").mCustomScrollbar2("update");a()},50);
        setTimeout(function(){$(".height_scroll3").mCustomScrollbar2("update");a()},50);
        setTimeout(function(){$(".inn_height").mCustomScrollbar2("update");a()},50);
        setTimeout(function(){$(".ta3lemat_blog").mCustomScrollbar2("update");a()},50);


		
   		 },100);
		}





$(document).ready(function(){

    $(document).prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />');


    $(window).resize(adjustLayout);
    $(horz_menu_trg).click(function(e){
        horz_menu.toggle(50);
        if (e && e.preventDefault) e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    });


    adjustLayout();
});



