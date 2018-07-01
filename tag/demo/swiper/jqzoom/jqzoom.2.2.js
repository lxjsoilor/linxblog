//**************************************************************
// jQZoom allows you to realize a small magnifier window,close
// to the image or images on your web page easily.
//
// jqZoom version 2.2
// Author Doc. Ing. Renzi Marco(www.mind-projects.it)
// First Release on Dec 05 2007
// i'm looking for a job,pick me up!!!
// mail: renzi.mrc@gmail.com
//**************************************************************
(function($) {
	$.fn.jqzoom = function(options) {
		var settings = {
			xzoom: 200, //zoomed width default width
			yzoom: 200, //zoomed div default width
			offset: 10, //zoomed div default offset
			position: "right", //zoomed div default position,offset position is to the right of the image
			lens: 1 //zooming lens over the image,by default is 1;
		};
		if(options) {
			$.extend(settings, options);
		}
		var noalt = '';
		$(this).hover(function() {
			var imageLeft = $(this).offset().left;
			var imageTop = $(this).offset().top;
			var imageWidth = $(this).children('img').get(0).offsetWidth;
			var imageHeight = $(this).children('img').get(0).offsetHeight;
			noalt = $(this).children("img").attr("alt");
			var bigimage = $(this).children("img").data("img");
			$(this).children("img").attr("alt", '');

			if($(".zoomdiv").get().length == 0) {

				$('body').after("<div class='zoomdiv'><img class='bigimg' src='" + bigimage + "' width='1400px'/ ></div>");
				$(this).append("<div class='jqZoomPup'></div>");
			}

			if(settings.position == "right") {
				if(imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width) {
					leftpos = imageLeft - settings.offset - settings.xzoom;
				} else {
					leftpos = imageLeft + imageWidth + settings.offset;
				}
			} else {
				leftpos = imageLeft - settings.xzoom - settings.offset;
				if(leftpos < 0) {
					leftpos = imageLeft + imageWidth + settings.offset;
				}
			}
			$(".zoomdiv").css({
				top: imageTop,
				left: leftpos
			});
			$(".zoomdiv").width(settings.xzoom);
			$(".zoomdiv").height(settings.yzoom);
			$(".zoomdiv").show();
			if(!settings.lens) {
				$(this).css('cursor', 'crosshair');
			}
			$(document.body).mousemove(function(e) {
				mouse = new MouseEvent(e);
				/*$(".jqZoomPup").hide();*/
				var bigwidth = $(".bigimg").get(0).offsetWidth;
				var bigheight = $(".bigimg").get(0).offsetHeight;
				var scaley = 'x';
				var scalex = 'y';
				if(isNaN(scalex) | isNaN(scaley)) {
					var scalex = (bigwidth / imageWidth);
					var scaley = (bigheight / imageHeight);
					$(".jqZoomPup").width((settings.xzoom) / scalex);
					$(".jqZoomPup").height((settings.yzoom) / scaley);
					if(settings.lens) {
						$(".jqZoomPup").css('visibility', 'visible');
					}
				}
				xpos = mouse.x - $(".jqZoomPup").width() / 2 - imageLeft;
				ypos = mouse.y - $(".jqZoomPup").height() / 2 - imageTop;
				if(settings.lens) {
					xpos = (mouse.x - $(".jqZoomPup").width() / 2 < imageLeft) ? 0 : (mouse.x + $(".jqZoomPup").width() / 2 > imageWidth + imageLeft) ? (imageWidth - $(".jqZoomPup").width() - 2) : xpos;
					ypos = (mouse.y - $(".jqZoomPup").height() / 2 < imageTop) ? 0 : (mouse.y + $(".jqZoomPup").height() / 2 > imageHeight + imageTop) ? (imageHeight - $(".jqZoomPup").height() - 2) : ypos;
				}
				if(settings.lens) {
					$(".jqZoomPup").css({
						top: ypos,
						left: xpos
					});
				}
				scrolly = ypos;
				$(".zoomdiv").get(0).scrollTop = scrolly * scaley;
				scrollx = xpos;
				$(".zoomdiv").get(0).scrollLeft = (scrollx) * scalex;
			});
		}, function() {
			$(this).children("img").attr("alt", noalt);
			$(document.body).unbind("mousemove");
			if(settings.lens) {
				$(".jqZoomPup").remove();
			}
			$(".zoomdiv").remove();
		});
	}
})(jQuery);

function MouseEvent(e) {
	this.x = e.pageX;
	this.y = e.pageY;
}