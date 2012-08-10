jQuery(document).ready(function(){

	// Menu Navigation
	jQuery('#main-superfish-wrapper ul.sf-menu').supersubs({
		minWidth: 14.5,
		maxWidth: 27,
		extraWidth: 1
	}).superfish({
		delay: 100,
		speed: 'fast',
		animation: {opacity:'show',height:'show'}
	});
	
	// Accordion
	jQuery("ul.gdl-accordion li").each(function(){
		//jQuery(this).children(".accordion-content").css('height', function(){ 
		//	return jQuery(this).height(); 
		//});
		
		if(jQuery(this).index() > 0){
			jQuery(this).children(".accordion-content").css('display','none');
		}else{
			jQuery(this).find(".accordion-head-image").addClass('active');
		}
		
		jQuery(this).children(".accordion-head").bind("click", function(){
			jQuery(this).children().addClass(function(){
				if(jQuery(this).hasClass("active")) return "";
				return "active";
			});
			jQuery(this).siblings(".accordion-content").slideDown();
			jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
			jQuery(this).parent().siblings("li").find(".active").removeClass("active");
		});
	});
	
	// Toggle Box
	jQuery("ul.gdl-toggle-box li").each(function(){
		//jQuery(this).children(".toggle-box-content").css('height', function(){ 
		//	return jQuery(this).height(); 
		//});
		jQuery(this).children(".toggle-box-content").not(".active").css('display','none');
		
		jQuery(this).children(".toggle-box-head").bind("click", function(){
			jQuery(this).children().addClass(function(){
				if(jQuery(this).hasClass("active")){
					jQuery(this).removeClass("active");
					return "";
				}
				return "active";
			});
			jQuery(this).siblings(".toggle-box-content").slideToggle();
		});
	});
	
	// Social Hover
	jQuery(".social-icon").hover(function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 0.55 }, 150);
	});
	
	// Scroll Top
	jQuery('div#back-to-top-button, div.divider .scroll-top').click(function() {
		  jQuery('html, body').animate({ scrollTop:0 }, 1000, 'easeOutExpo');
		  return false;
	});
	
	// Gallery Hover
	jQuery("img.gdl-gallery-image").hover(function(){
		jQuery(this).animate({ opacity: 0.55 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	});
	
	// Blog Hover
	jQuery(".blog-thumbnail-image img").hover(function(){
		jQuery(this).animate({ opacity: 0.55 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	});
	
	// Element Hover
	jQuery(".gdl-hover").hover(function(){
		jQuery(this).animate({ opacity: 0.8 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	});	
	
	// Port Hover
	jQuery("#portfolio-item-holder .portfolio-thumbnail-image-hover").hover(function(){
		jQuery(this).animate({ opacity: 0.55 }, 400, 'easeOutExpo');
		jQuery(this).find('span').animate({ left: '50%'}, 300, 'easeOutExpo');
	}, function(){
		jQuery(this).find('span').animate({ left: '150%'}, 300, 'easeInExpo', function(){
			jQuery(this).css('left','-50%');
		});
		jQuery(this).animate({ opacity: 0 }, 400, 'easeInExpo');
	});
	
	// Price Table
	jQuery(".gdl-price-item").each(function(){
		var max_height = 0;
		jQuery(this).find('.price-item').each(function(){
			if( max_height < jQuery(this).height()){
				max_height = jQuery(this).height();
			}
		});
		jQuery(this).find('.price-item').height(max_height);
		
	});
	
	jQuery('#gdl-search-input').setBlankText();
	jQuery('#searchsubmit').click(function(){
		var search_input = jQuery(this).siblings('#gdl-search-input');
		if( search_input.attr('data-default') == search_input.val() ){
			return false;
		}
	});

});

jQuery(window).load(function(){

	// Set Portfolio Max Height
	jQuery('div#portfolio-item-holder').equalHeights();
	jQuery(window).resize(function(){
		jQuery('div#portfolio-item-holder').autoHeights();
		jQuery('div#portfolio-item-holder').equalHeights();
	});

	// Set Blog Max Height
	jQuery('div.blog-item-holder.grid-style').equalHeights();
	jQuery(window).resize(function(){
		jQuery('div.blog-item-holder.grid-style').autoHeights();
		jQuery('div.blog-item-holder.grid-style').equalHeights();
	});
	
});


/* Tabs Activiation
================================================== */
jQuery(document).ready(function() {
	var tabs = jQuery('ul.tabs');

	tabs.each(function(i) {

		//Get all tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function(e) {

			//Get Location of tab's content
			var contentLocation = jQuery(this).attr('href');

			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {

				e.preventDefault();

				//Make Tab Active
				tab.removeClass('active');
				jQuery(this).addClass('active');

				//Show Tab Content & add active class
				jQuery(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

			}
		});
	});
});

/* Equal Height Function
================================================== */
(function($) {
	$.fn.equalHeights = function(px) {
		$(this).each(function(){
			var currentTallest = 0;
			$(this).children().not('.sixteen').each(function(i){
				if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
			});
			$(this).children().not('.sixteen').each(function(){
				$(this).css('height', currentTallest);
				$(this).children('.bkp-frame-wrapper').addClass('absolute');
			}); 
		});
		return this;
	};
	
	$.fn.autoHeights = function(){
		$(this).each(function(){
			$(this).children().each(function(){
				$(this).children('.bkp-frame-wrapper').removeClass('absolute');
				$(this).css('height', 'auto');
			});
		});
	};
	
	$.fn.setBlankText = function(){
		this.live("blur", function(){
			var default_value = $(this).attr("data-default");
			if ($(this).val() == ""){
				$(this).val(default_value);
			}
			
		}).live("focus", function(){
			var default_value = $(this).attr("data-default");
			if ($(this).val() == default_value){
				$(this).val("");
			}
		});
	}	
})(jQuery);
