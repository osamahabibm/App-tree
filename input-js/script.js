var $ = jQuery.noConflict();

$(document).ready(function($) {
	/* ---------------------------------------------------------------------- */
	/*	Slider - [Flexslider]
	/* ---------------------------------------------------------------------- */
  	try {
		$('.flexslider').flexslider({
			animation: "fade",
			controlNav: "thumbnails",
			controlsContainer: ".slider-wrapper"
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Testimonials
	/* ---------------------------------------------------------------------- */
	$('.testimonials').slides({
		generateNextPrev: true,
		effect: 'fade',
		container: 'testimonials-container'
	});

	/* ---------------------------------------------------------------------- */
	/*	Boxes
	/* ---------------------------------------------------------------------- */
	$('.box').slides({
		generateNextPrev: true,
		generatePagination: false,
		effect: 'slide',
		container: 'images-available-container'
	});

	/* ---------------------------------------------------------------------- */
	/*	Custom File Upload
	/* ---------------------------------------------------------------------- */

	$('.file-container').on('click', function(){
		$(this).prev('input[type="file"]').trigger('click');
	});

	$('input[type="file"]').bind('change', function(){
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		$(this).next('div.file-container').find('.file-name').text(filename);
	})
	
	
	
	
	    
	
	$('.i_fil').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">   اضغط لاضافة الفيديو   </span></div>');
	});

	$('.i_fil2').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">  اضغط لاضافة الصورة  </span></div>');
	});

	$('.i_fil3').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">   اضغط لاختيار الصورة    </span></div>');
	});

	$('.i_fil4').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">    اضغط لاضافة فيديو   </span></div>');
	});


	$('.i_fil5').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">    صورة شخصية . png    </span></div>');
	});


	$('.i_fil6').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">   تحميل صورة شخصية   </span></div>');
	});



	$('.i_fil10').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3  file-container30"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">   تحميل صورة شخصية <i>(إختيارى)</i>   </span></div>');
	});

	$('.i_fil_').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container3  file-container4"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">   رفع الصوره   </span></div>');
	});



	
	$('.in_file').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">إختيار الملف</span></div>');
	});



	$('.in_file2').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">إختيار الصورة</span></div>');
	});



	$('.files').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container_files"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">إختيار الملف</span></div>');
	});




	$('.in_file_new').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container file-container2 file-container_files_news"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name">رفع الملفات</span></div>');
	});



	$('.in_upload').each(function(){
		$(this).hide();
		$(this).after('<div class="file-container in_upolad"><a href="javascript:void(0);" class="button-file">' + $(this).attr('data-value') + '</a><span class="file-name"></span></div>');
	});


	$('.file-container').on('click', function(){
		$(this).prev('input[type="file"]').trigger('click');
	});




	$('.i_fil').bind('change', function(){
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		$(this).next('div.file-container').find('.file-name').text(filename2);
	})

	$('.in_file').bind('change', function(){
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		$(this).next('div.file-container').find('.file-name').text(filename2);
	})

	$('.in_file_left').bind('change', function(){
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		$(this).next('div.file-container').find('.file-name').text(filename2);
	})

	$('.in_file2').bind('change', function(){
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		$(this).next('div.file-container').find('.file-name').text(filename);
	})

	$('.in_file_new').bind('change', function(){
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		$(this).next('div.file-container').find('.file-name').text(filename);
	})

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	try {
		$('#map').gmap3({
	            action: 'addMarker',
	            address: "1319 Stanley avenue, Glendale, Los Angeles, USA",
	            map:{
	            	center: true,
	            	zoom: 14
	            	},
	        	},
	        {action: 'setOptions', args:[{scrollwheel:true}]}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Custom SelectBox
	/* ---------------------------------------------------------------------- */
	try {
		$('.select').selectbox();
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Quick Search = Show/Hide
	/* ---------------------------------------------------------------------- */
	$('.show-hide').on("click", function(){
		$("#quick-search .slideToggle").slideToggle("slow");
		return false;
	});


	/* ---------------------------------------------------------------------- */
	/*	Custom Checkbox
	/* ---------------------------------------------------------------------- */
	$('.switcher input.custom-style').each(function(){
		$(this).after('<a href="#" class="off">' + $(this).attr('data-off') + '</a><div class="switcher-bg"><span class="circle"></span></div><a href="#" class="on">' + $(this).attr('data-on') + '</a>');
	});

	$('.switcher a.on').bind('click', function(){
		$(this).parent().find('.switcher-bg span').animate({'left': '39px'}, 200);
		$(this).parent().find('input.custom-style').attr({'checked':'checked'});
		return false;
	});

	$('.switcher a.off').bind('click', function(){
		$(this).parent().find('.switcher-bg span').animate({'left': '0px'}, 200);
		$(this).parent().find('input.custom-style').removeAttr('checked');
		return false;
	});

	/* ---------------------------------------------------------------------- */
	/*	Box Item Hover
	/* ---------------------------------------------------------------------- */
	$('.box .slides_control > div').each(function(){
		$(this).append('<div class="box-item-hover"><p class="title">' + $(this).find(' > a').attr('data-title') + '</p><p class="beds">الأسرة: ' + $(this).find(' > a').attr('data-beds') + '</p><p class="baths">الحمامات: ' + $(this).find(' > a').attr('data-baths') + '</p><p class="video"><span class="video-icon">' + $(this).find(' > a').attr('data-video') + '</span></p><a href="' + $(this).find(' > a').attr('data-map') + '" class="map-link"></a></div>');
	});

	$('.box .slides_control > div').live('mouseenter', function(){
		$(this).find('.box-item-hover').stop(true,true).fadeIn();
	}).live('mouseleave', function(){
		$(this).find('.box-item-hover').stop(true,true).fadeOut();
	})
});

	/* ---------------------------------------------------------------------- */
	/*	Back to top
	/* ---------------------------------------------------------------------- */
	
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#back-to-top').fadeIn();	
		} else {
			$('#back-to-top').fadeOut();
		}
	});
 
	$('#back-to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});