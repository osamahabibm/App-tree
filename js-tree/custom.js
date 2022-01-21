$(function () {
   
    var oc = $('#ul-datasource').orgchart({
        'data': $('#ul-data2'),
        'depth': 1
    });

    $("#slider-horizontal").slider({
        orientation: "horizontal", //vertical
        range: "min",
        min: 2,
        max: 11,
        value: 5.5,
        slide: function (event, ui) {
            if (ui.value === 1) {
                XYTransform(0.1, 0.1);
            }
            if (ui.value === 2) {
                XYTransform(0.2, 0.2);
            }
            if (ui.value === 3) {
                XYTransform(0.3, 0.3);
            }
            if (ui.value === 4) {
                XYTransform(0.4, 0.4);
            }
            if (ui.value === 5) {
                XYTransform(0.5, 0.5);
            }
            if (ui.value === 6) {
                XYTransform(0.6, 0.6);
            }
            if (ui.value === 7) {
                XYTransform(0.7, 0.7);
            }
            if (ui.value === 8) {
                XYTransform(0.8, 0.8);
            }
            if (ui.value === 9) {
                XYTransform(0.9, 0.9);
            }
            if (ui.value === 10) {
                XYTransform(1.0, 1.0);
            }
            if (ui.value === 11) {
                XYTransform(1.1, 1.1);
            }
            if (ui.value === 12) {
                XYTransform(1.2, 1.2);
            }
            if (ui.value === 13) {
                XYTransform(1.3, 1.3);
            }
            if (ui.value === 14) {
                XYTransform(1.4, 1.4);
            }
            if (ui.value === 15) {
                XYTransform(1.5, 1.5);
            }
            if (ui.value === 16) {
                XYTransform(1.6, 1.6);
            }
            if (ui.value === 17) {
                XYTransform(1.7, 1.7);
            }
            if (ui.value === 18) {
                XYTransform(1.8, 1.8);
            }
            if (ui.value === 19) {
                XYTransform(1.9, 1.9);
            }
            if (ui.value === 20) {
                XYTransform(1.1, 1.1);
            }
        }
    });
    
    $('.title').on('touchstart', function(event) {
        var userAgent = window.navigator.userAgent;
        if (userAgent.match(/Android/i) || userAgent.match(/Android/i)) {
			
			$(".wide").fadeIn();

        }
    });
    $('.edge').on('touchstart', function(event) {
        var userAgent = window.navigator.userAgent;
        if (userAgent.match(/Android/i) || userAgent.match(/Android/i)) {
			
			$(".wide").fadeIn();

        }
    });
	
	
var touchtime = 0;
$('.edge').on('touchstart', function() {
        var userAgent = window.navigator.userAgent;
    if(touchtime == 0) {
        touchtime = new Date().getTime();
    } else {
        if(((new Date().getTime())-touchtime) < 1000) {

        if (userAgent.match(/Android/i) || userAgent.match(/Android/i)) {
			
            var opened = $(this).hasClass("opened");
            if (typeof opened !== typeof undefined && opened !== false) {
                $(this).removeClass('opened');
                oc.hideChildren($(this).parent());
            }
            else {
                $(this).addClass('opened');
                oc.showChildren($(this).parent());
            }

            var root = $(this).parent().find('img').attr('id');
            var cursor = $(this).hasClass("opened");
            if (root === 'root') {
                //alert('Root');
                if (typeof cursor !== typeof undefined && cursor !== false) {
                    //alert('Opened');
                }
                else {
                    //alert('Closed');
                    var xTransform = $('.orgchart').attr('xTransform');
                    var yTransform = $('.orgchart').attr('yTransform');
                    $('.orgchart').css('transform', 'translate(0px, 0px) scale(' + xTransform + ', ' + yTransform + ')').attr('data-x', 0).attr('data-y', 0).attr('xTransform', xTransform).attr('yTransform', yTransform);
                }
            }
            else {
                //alert('Not Root');
            }
        }
        else {
            // Anything else
            //alert('Anything else');
//            if(event.type !== 'click') {
//                alert( event.type );
//                alert( $(window).width() < 800 );
//                
//            }
            
            var opened = $(this).hasClass("opened");
            if (typeof opened !== typeof undefined && opened !== false) {
                $(this).removeClass('opened');
                oc.hideChildren($(this).parent());
            }
            else {
                $(this).addClass('opened');
                oc.showChildren($(this).parent());
            }

            var root = $(this).parent().find('img').attr('id');
            var cursor = $(this).hasClass("opened");
            if (root === 'root') {
                //alert('Root');
                if (typeof cursor !== typeof undefined && cursor !== false) {
                    //alert('Opened');
                }
                else {
                    //alert('Closed');
                    var xTransform = $('.orgchart').attr('xTransform');
                    var yTransform = $('.orgchart').attr('yTransform');
                    $('.orgchart').css('transform', 'translate(0px, 0px) scale(' + xTransform + ', ' + yTransform + ')').attr('data-x', 0).attr('data-y', 0).attr('xTransform', xTransform).attr('yTransform', yTransform);
                }
            }
            else {
                //alert('Not Root');
            }
        }

            touchtime = 0;
        } else {
            touchtime = 0;
        }
    } 
});
    
    
$('.orgchart').attr({'xTransform':1, 'yTransform':1, 'data-x':0, 'data-y':0});
var dom = document.body,
    _width = parseFloat($('.orgchart').attr('xtransform')),
    min = 0.2,
    max = 3.0,
    scale;

dom.addEventListener("gesturechange", gestureChange, false);
dom.addEventListener("gestureend", gestureEnd, false);

function gestureChange(e) {
//alert(_width);
    e.preventDefault();

    scale = e.scale;
    var tempWidth = _width * scale;

    if (tempWidth > max) tempWidth = max;
    if (tempWidth < min) tempWidth = min;

    var dataX = $('.orgchart').attr('data-x');
    var dataY = $('.orgchart').attr('data-y');
    $('.orgchart').css('-moz-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+tempWidth+', '+tempWidth+')').attr('data-x', dataX).attr('data-y', dataY).attr('xtransform', tempWidth).attr('ytransform', tempWidth);
    $('.orgchart').css('-webkit-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+tempWidth+', '+tempWidth+')').attr('data-x', dataX).attr('data-y', dataY).attr('xtransform', tempWidth).attr('ytransform', tempWidth);
    $('.orgchart').css('-o-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+tempWidth+', '+tempWidth+')').attr('data-x', dataX).attr('data-y', dataY).attr('xtransform', tempWidth).attr('ytransform', tempWidth);
    $('.orgchart').css('-ms-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+tempWidth+', '+tempWidth+')').attr('data-x', dataX).attr('data-y', dataY).attr('xtransform', tempWidth).attr('ytransform', tempWidth);
    $('.orgchart').css('transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+tempWidth+', '+tempWidth+')').attr('data-x', dataX).attr('data-y', dataY).attr('xtransform', tempWidth).attr('ytransform', tempWidth);
}

function gestureEnd(e) {
    e.preventDefault();
    _width = parseFloat($('.orgchart').attr('xtransform'));
} 
    

			$('.edge').click(
				function () {
				$(".wide").fadeIn();
			   });
			$('.title').click(
				function () {
				$(".wide").fadeIn();
			   });






    $('.leftnav').click(function () {
        var xTransform = $('.orgchart').attr('xTransform');
        if (typeof xTransform !== typeof undefined && xTransform !== false) {
            xTransform = $('.orgchart').attr('xTransform');
        }
        else {
            xTransform = 1;
        }
        
        var yTransform = $('.orgchart').attr('yTransform');
        if (typeof yTransform !== typeof undefined && yTransform !== false) {
            yTransform = $('.orgchart').attr('yTransform');
        }
        else {
            yTransform = 1;
        }
        
        var dataX;
        var attr = $('.orgchart').attr('data-x');
        if (typeof attr !== typeof undefined && attr !== false) {
            dataX = parseInt(attr) + 50;
        }
        else {
            dataX = 50;
        }

        $('.orgchart').css('transform', 'translate(' + dataX + 'px, 0)  scale(' + xTransform + ', ' + yTransform + ')').attr('data-x', dataX).attr('xTransform', xTransform).attr('yTransform', yTransform);;
    });

    $('.rightnav').click(function () {
        var xTransform = $('.orgchart').attr('xTransform');
        if (typeof xTransform !== typeof undefined && xTransform !== false) {
            xTransform = $('.orgchart').attr('xTransform');
        }
        else {
            xTransform = 1;
        }
        
        var yTransform = $('.orgchart').attr('yTransform');
        if (typeof yTransform !== typeof undefined && yTransform !== false) {
            yTransform = $('.orgchart').attr('yTransform');
        }
        else {
            yTransform = 1;
        }
        
        var dataX;
        var attr = $('.orgchart').attr('data-x');
        if (typeof attr !== typeof undefined && attr !== false) {
            dataX = parseInt(attr) - 50;
        }
        else {
            dataX = 0;
        }

        $('.orgchart').css('transform', 'translate(' + dataX + 'px, 0)  scale(' + xTransform + ', ' + yTransform + ')').attr('data-x', dataX).attr('xTransform', xTransform).attr('yTransform', yTransform);;
    });

    $('.upnav').click(function () {
        var xTransform = $('.orgchart').attr('xTransform');
        if (typeof xTransform !== typeof undefined && xTransform !== false) {
            xTransform = $('.orgchart').attr('xTransform');
        }
        else {
            xTransform = 1;
        }
        
        var yTransform = $('.orgchart').attr('yTransform');
        if (typeof yTransform !== typeof undefined && yTransform !== false) {
            yTransform = $('.orgchart').attr('yTransform');
        }
        else {
            yTransform = 1;
        }
        
        var dataY;
        var attr = $('.orgchart').attr('data-y');
        var DataX = $('.orgchart').attr('data-x');
        if (typeof attr !== typeof undefined && attr !== false) {
            dataY = parseInt(attr) + 50;
        }
        else {
            dataY = 50;
        }

        if (typeof DataX !== typeof undefined && DataX !== false) {
            DataX = parseInt(DataX) + 50;
        }
        else {
            DataX = 0;
        }

        $('.orgchart').css('transform', 'translate( ' + DataX + 'px, ' + dataY + 'px)  scale(' + xTransform + ', ' + yTransform + ')').attr('data-y', dataY).attr('xTransform', xTransform).attr('yTransform', yTransform);;
    });

    $('.downnav').click(function () {
        var xTransform = $('.orgchart').attr('xTransform');
        if (typeof xTransform !== typeof undefined && xTransform !== false) {
            xTransform = $('.orgchart').attr('xTransform');
        }
        else {
            xTransform = 1;
        }
        
        var yTransform = $('.orgchart').attr('yTransform');
        if (typeof yTransform !== typeof undefined && yTransform !== false) {
            yTransform = $('.orgchart').attr('yTransform');
        }
        else {
            yTransform = 1;
        }
        
        var dataY;
        var attr = $('.orgchart').attr('data-y');
        var DataX = $('.orgchart').attr('data-x');
        if (typeof attr !== typeof undefined && attr !== false) {
            dataY = parseInt(attr) - 50;
        }
        else {
            dataY = 0;
        }

        if (typeof DataX !== typeof undefined && DataX !== false) {
            DataX = parseInt(DataX) - 50;
        }
        else {
            DataX = 0;
        }

        $('.orgchart').css('transform', 'translate( ' + DataX + 'px, ' + dataY + 'px)  scale(' + xTransform + ', ' + yTransform + ')').attr('data-y', dataY).attr('xTransform', xTransform).attr('yTransform', yTransform);;
    });

    $('.homeicon').click(function () {
        var xTransform = $('.orgchart').attr('xTransform');
        var yTransform = $('.orgchart').attr('yTransform');
        
        var transdataY;
        if(yTransform === 2) {
            transdataY = 300;
        }
        else if(yTransform < 2 && yTransform > 1.1) {
            transdataY = 200;
        }
        else {
            transdataY = 150;
        }
        
        var bodyWidth = $(window).width();
        var orgchartWidth = $(".orgchart").width();
        var tanslate = -(((orgchartWidth - bodyWidth) / 2) + 64);
        if (orgchartWidth <= 1000) {
            $('.orgchart').css('transform', 'translate(0, 0)  scale(' + xTransform + ', ' + yTransform + ')').attr('data-x', 0).attr('data-y', 0).attr('xTransform', xTransform).attr('yTransform', yTransform);
        }
        else {
            $('.orgchart').css('transform', 'translate(' + tanslate + 'px, ' + transdataY + 'px)  scale(' + xTransform + ', ' + yTransform + ')').attr('data-x', tanslate).attr('data-y', transdataY).attr('xTransform', xTransform).attr('yTransform', yTransform);
        }
    });
    
    
});



// target elements with the "draggable" class
interact('.orgchart').draggable({
    // call this function on every dragmove event
    onmove: function (event) {

        var xTransform = $('.orgchart').attr('xTransform');
        if (typeof xTransform !== typeof undefined && xTransform !== false) {
            xTransform = $('.orgchart').attr('xTransform');
        }
        else {
            xTransform = 1;
        }
        
        var yTransform = $('.orgchart').attr('yTransform');
        if (typeof yTransform !== typeof undefined && yTransform !== false) {
            yTransform = $('.orgchart').attr('yTransform');
        }
        else {
            yTransform = 1;
        }
                
        var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
                target.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(' + xTransform + ', ' + yTransform + ')';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        
    }
});




var htmlElement = document.querySelector(".middle_content_block_tree");
htmlElement.addEventListener("wheel", function(e){
    
    var dataX = $('.orgchart').attr('data-x');
    if (typeof dataX !== typeof undefined && dataX !== false) {
        dataX = $('.orgchart').attr('data-x');
    }
    else {
        dataX = 0;
    }
    
    var dataY = $('.orgchart').attr('data-y');
    if (typeof dataY !== typeof undefined && dataY !== false) {
        dataY = $('.orgchart').attr('data-y');
    }
    else {
        dataY = 0;
    }
    
    if (e.deltaY > 0) {

        var xTransformAttr = $('.orgchart').attr('xTransform');
        if (typeof xTransformAttr !== typeof undefined && xTransformAttr !== false) {
            xTransformValue = parseFloat($('.orgchart').attr('xTransform')) - 0.2;
            xTransformValue = parseFloat(xTransformValue.toFixed(1));
        }
        else {
            xTransformValue = 1;
        }

        var yTransformAttr = $('.orgchart').attr('yTransform');
        if (typeof yTransformAttr !== typeof undefined && yTransformAttr !== false) {
            yTransformValue = parseFloat($('.orgchart').attr('yTransform')) - 0.2;
            yTransformValue = parseFloat(yTransformValue.toFixed(1));
        }
        else {
            yTransformValue = 1;
        }
        
        if(xTransformValue < 0.2 || yTransformValue < 0.2) {
            xTransformValue = 0.2;
            yTransformValue = 0.2;
        }
    }
    else {
        var xTransformAttr = $('.orgchart').attr('xTransform');
        if (typeof xTransformAttr !== typeof undefined && xTransformAttr !== false) {
            xTransformValue = parseFloat($('.orgchart').attr('xTransform')) + 0.2;
            xTransformValue = parseFloat(xTransformValue.toFixed(1));
        }
        else {
            xTransformValue = 1;
        }

        var yTransformAttr = $('.orgchart').attr('yTransform');
        if (typeof yTransformAttr !== typeof undefined && yTransformAttr !== false) {
            yTransformValue = parseFloat($('.orgchart').attr('yTransform')) + 0.2;
            yTransformValue = parseFloat(yTransformValue.toFixed(1));
        }
        else {
            yTransformValue = 1;
        }
        
        if(xTransformValue > 1.1 || yTransformValue > 1.1) {
            xTransformValue = 1.1;
            yTransformValue = 1.1;
        }
    }

    $('.orgchart').css('-moz-transform','translate( ' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('-webkit-transform','translate( ' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('-o-transform','translate( ' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('-ms-transform','translate( ' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('transform','translate( ' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    ChangedSlider(xTransformValue);
    
    $('.orgchart').attr({'xTransform': xTransformValue, 'yTransform': yTransformValue});
    
});

function XYTransform(xTransformValue, yTransformValue) {
    var dataX = $('.orgchart').attr('data-x');
    if (typeof dataX !== typeof undefined && dataX !== false) {
        dataX = $('.orgchart').attr('data-x');
    }
    else {
        dataX = 0;
    }

    var dataY = $('.orgchart').attr('data-y');
    if (typeof dataY !== typeof undefined && dataY !== false) {
        dataY = $('.orgchart').attr('data-y');
    }
    else {
        dataY = 0;
    }
            
    $('.orgchart').css('-moz-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('-webkit-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('-o-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('-ms-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    $('.orgchart').css('transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransformValue+', '+yTransformValue+')');
    
    $('.orgchart').attr({'xTransform': xTransformValue, 'yTransform': yTransformValue});
}


function ChangedSlider(num) {
    var sliderVal = 0;
    if(num === 0.1) {
        sliderVal = 1;
    }
    else if(num === 0.2) {
        sliderVal = 2;
    }
    else if(num === 0.3) {
        sliderVal = 3;
    }
    else if(num === 0.4) {
        sliderVal = 4;
    }
    else if(num === 0.5) {
        sliderVal = 5;
    }
    else if(num === 0.6) {
        sliderVal = 6;
    }
    else if(num === 0.7) {
        sliderVal = 7;
    }
    else if(num === 0.8) {
        sliderVal = 8;
    }
    else if(num === 0.9) {
        sliderVal = 9;
    }
    else if(num === 1.0) {
        sliderVal = 10;
    }
    else if(num === 1.1) {
        sliderVal = 11;
    }
    else if(num === 1.2) {
        sliderVal = 12;
    }
    else if(num === 1.3) {
        sliderVal = 13;
    }
    else if(num === 1.4) {
        sliderVal = 14;
    }
    else if(num === 1.5) {
        sliderVal = 15;
    }
    else if(num === 1.6) {
        sliderVal = 16;
    }
    else if(num === 1.7) {
        sliderVal = 17;
    }
    else if(num === 1.8) {
        sliderVal = 18;
    }
    else if(num === 1.9) {
        sliderVal = 19;
    }
    else if(num === 1.1) {
        sliderVal = 20;
    }
    $( "#slider-horizontal" ).slider( "value",  sliderVal);
}


function updateLocation() {
    var xTransform = $('.orgchart').attr('xTransform');
    if (typeof xTransform !== typeof undefined && xTransform !== false) {
        xTransform = $('.orgchart').attr('xTransform');
    }
    else {
        xTransform = 1;
    }

    var yTransform = $('.orgchart').attr('yTransform');
    if (typeof yTransform !== typeof undefined && yTransform !== false) {
        yTransform = $('.orgchart').attr('yTransform');
    }
    else {
        yTransform = 1;
    }
    
    var dataX = $('.orgchart').attr('data-x');
    if (typeof dataX !== typeof undefined && dataX !== false) {
        dataX = $('.orgchart').attr('data-x');
    }
    else {
        dataX = 0;
    }

    var dataY = $('.orgchart').attr('data-y');
    if (typeof dataY !== typeof undefined && dataY !== false) {
        dataY = $('.orgchart').attr('data-y');
    }
    else {
        dataY = 0;
    }
            
    $('.orgchart').css('-moz-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransform+', '+yTransform+')');
    $('.orgchart').css('-webkit-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransform+', '+yTransform+')');
    $('.orgchart').css('-o-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransform+', '+yTransform+')');
    $('.orgchart').css('-ms-transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransform+', '+yTransform+')');
    $('.orgchart').css('transform','translate(' + dataX + 'px, ' + dataY + 'px) scale('+xTransform+', '+yTransform+')');
}