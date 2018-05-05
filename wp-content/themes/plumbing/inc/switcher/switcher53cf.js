	jQuery(document).ready(
		function()
		{
 
		jQuery('.wpc_styler').animate({left:'-270px'});
	 
			jQuery('.wpc_styler_toggle').click(function(e)
			{
				e.preventDefault();
				var div=jQuery('.wpc_styler');
				console.log(div.css('left'));
				if(div.css('left')==='-270px')
				{
					jQuery('.wpc_styler').animate({left:'0px'});
					jQuery('.wpc_styler').find('.fa').addClass('fa-spin');
				}
				else
				{
					jQuery('.wpc_styler').animate({left:'-270px'});
					jQuery('.wpc_styler').find('.fa').removeClass('fa-spin');
				}
			});
		
	 var wpc_styler_height=jQuery('.wpc_styler').height();
	 jQuery('.wpc_styler_wrapper').css('height',wpc_styler_height);
	 jQuery('.wpc_styler_switcher').css('height',wpc_styler_height);
	 	 
	 jQuery("#layout").change(function(){
		 var value = jQuery('#layout :selected').val();
	 
		 if(value == 'Wide'){
			jQuery('#wrapper').removeClass('boxed-container');	
			jQuery('#background-image').hide();	
			jQuery('#background-color').hide();
		 } else if(value == 'Box')
		 {
			jQuery('#wrapper').addClass('boxed-container');
			jQuery('#background-image').show();
			jQuery('#background-color').show();
		 }
	 });
		
	jQuery('#background-image1').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg1.jpg) repeat fixed');
		});
	
	jQuery('#background-image2').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg2.jpg)repeat fixed');
		});
		
	jQuery('#background-image3').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg3.jpg) repeat fixed');
		});
	
	jQuery('#background-image4').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg4.jpg) repeat fixed');
		});	
		
	
	jQuery('#background-image5').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg6.jpg) repeat fixed');
		});
	
	jQuery('#background-image6').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg5.jpg)center center / cover no-repeat fixed');
		});
		
	jQuery('#background-image7').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg7.jpg)center center / cover no-repeat fixed');
		});
	
	jQuery('#background-image8').click(function(){
		jQuery('body').css('background','url(http://demos.pixelatethemes.com/plumbingwp/wp-content/themes/plumbing/inc/switcher/colors/bg8.jpg)center center / cover no-repeat fixed');
		});
			
	jQuery("#boxed-background-color").change(function(){		
	  jQuery('body').css('backgroundImage','url()');		
	  jQuery("body").css('background-color', jQuery(this).val());
	});
	
		
	jQuery('.wpc-menu li').each(function(){
		if(jQuery(this).hasClass('menu-features')){jQuery(this).removeClass('current-menu-ancestor');}
	});
		
	});
		
		 
jQuery(document).ready(function(jQuery) {
		"use strict";

			jQuery("#defualt" ).on('click',function(){
				   				   
				jQuery('head').append('<style>.header-social li a,.welcome-textss .this-title span, .section-title.blue-c, .blog-line a.redirect-link, .bg-post-title a:hover, .bg-post-title a:focus, .bl-post-title a:hover, .bl-post-title a:focus, .widget-footer .menu li a:hover, .widget-footer .menu li a:focus, .socials ul li a:hover, .socials ul li a:focus, .nform-texts, .footer-contact .media-left, .emmergency-leaks h2 span, .vision-list li, .service-grid .this-title a:hover, .service-grid .this-title a:focus, .banner-row .this-title, a.price-grid-title:hover, a.price-grid-title:focus, .blog-loop .this-title a:hover, .blog-loop .this-title a:focus, .blog-loop .this-footer li a:hover, .blog-loop .this-footer li a:focus, .woocommerce ul.products li.product a, .return-customer a, .testimonial-author .loc, .header-contacts2 .this-subtitle, .carousel-prev:hover i, .carousel-next:hover i, .single-service a.read-more2, .single-header-right-info .icon-box i, .single-header-right-info .text-box p, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .blog-loop .this-excerpt a.more-link, .news-sidebar .menu li a:hover, .news-sidebar .menu li a:focus, .recent-posts li a.title:hover, .recent-posts li a.title:focus, .recent-posts li a.read-more, .emmergency-contact-number .this-title span, .our-plumber .inner:hover ul li a:hover, .our-plumber .inner:hover ul li a:focus, .our-plumber .inner:focus ul li a:hover, .our-plumber .inner:focus ul li a:focus{color:#2b9cbe;} </style>');
				   
				jQuery('head').append('<style>.btn-primary:hover, .custom-heading.wpb_content_element h2:after, .section-title:after, .widget-footer .widget-title:after, h4.widget_title.no_stripe:after,.mission-statement .this-title:after, .our-plumber .his-details, .single-services-menu li.active a,.single-services-menu li a:hover, .single-services-menu li a:focus, #comments #submit:hover, .woocommerce ul.products li.product .button, .woocommerce-message a.button.wc-forward, .bottom-box .pull-right input.button, .bottom-box .pull-left input.button, .woocommerce #review_form #respond .form-submit input, .woocommerce a.added_to_cart, .woocommerce #payment #place_order, .woocommerce-page #payment #place_order, .woocommerce form.login .form-row input, .woocommerce .checkout_coupon .form-row-last input, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .left-checkout .woocommerce-billing-fields .section_header.color h2:after, .left-checkout .woocommerce-shipping-fields h3:after, .right-checkout .section_header.color h2:after, .request-service-form, .plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab.vc_active, .single-service a.read-more, .news-sidebar .tag:hover, .news-sidebar .tag:focus, .product-details-content .content-box .cart-btn{background:#2b9cbe;} </style>');		
					
				jQuery('head').append('<style>.socials ul li a:hover, .socials ul li a:focus, .carousel-prev:hover, .carousel-next:hover, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .news-sidebar .tag:hover, .news-sidebar .tag:focus{border-color:#2b9cbe;} </style>');
				
				jQuery('head').append('<style>.plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab  > a:hover{background-color:#2b9cbe;} </style>');
	
					
				//Secondary 
					
					
				jQuery('head').append('<style>.maintance-media .this-title span, .welcome-box a, .woocommerce ul.products li.product .price, .woocommerce ul.products li.product .price{color:#e1444b;}</style>');
					
				jQuery('head').append('<style>.btn-primary, .top-header2 .get-appointment-btn4, .tmc_header_3 .plumber-nav-right, .get-appointment-btn-new{background:#e1444b;}</style>');
									
					
				
			});
			  
			jQuery("#color1" ).on('click',function(){
				   
				jQuery('head').append('<style>.header-social li a,.welcome-textss .this-title span, .section-title.blue-c, .blog-line a.redirect-link, .bg-post-title a:hover, .bg-post-title a:focus, .bl-post-title a:hover, .bl-post-title a:focus, .widget-footer .menu li a:hover, .widget-footer .menu li a:focus, .socials ul li a:hover, .socials ul li a:focus, .nform-texts, .footer-contact .media-left, .emmergency-leaks h2 span, .vision-list li, .service-grid .this-title a:hover, .service-grid .this-title a:focus, .banner-row .this-title, a.price-grid-title:hover, a.price-grid-title:focus, .blog-loop .this-title a:hover, .blog-loop .this-title a:focus, .blog-loop .this-footer li a:hover, .blog-loop .this-footer li a:focus, .woocommerce ul.products li.product a, .return-customer a, .testimonial-author .loc, .header-contacts2 .this-subtitle, .carousel-prev:hover i, .carousel-next:hover i, .single-service a.read-more2, .single-header-right-info .icon-box i, .single-header-right-info .text-box p, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .blog-loop .this-excerpt a.more-link, .news-sidebar .menu li a:hover, .news-sidebar .menu li a:focus, .recent-posts li a.title:hover, .recent-posts li a.title:focus, .recent-posts li a.read-more, .emmergency-contact-number .this-title span, .our-plumber .inner:hover ul li a:hover, .our-plumber .inner:hover ul li a:focus, .our-plumber .inner:focus ul li a:hover, .our-plumber .inner:focus ul li a:focus{color:#fab90a;} </style>');
				   
				jQuery('head').append('<style>.btn-primary:hover, .custom-heading.wpb_content_element h2:after, .section-title:after, .widget-footer .widget-title:after, h4.widget_title.no_stripe:after,.mission-statement .this-title:after, .our-plumber .his-details, .single-services-menu li.active a,.single-services-menu li a:hover, .single-services-menu li a:focus, #comments #submit:hover, .woocommerce ul.products li.product .button, .woocommerce-message a.button.wc-forward, .bottom-box .pull-right input.button, .bottom-box .pull-left input.button, .woocommerce #review_form #respond .form-submit input, .woocommerce a.added_to_cart, .woocommerce #payment #place_order, .woocommerce-page #payment #place_order, .woocommerce form.login .form-row input, .woocommerce .checkout_coupon .form-row-last input, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .left-checkout .woocommerce-billing-fields .section_header.color h2:after, .left-checkout .woocommerce-shipping-fields h3:after, .right-checkout .section_header.color h2:after, .request-service-form, .plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab.vc_active, .single-service a.read-more, .news-sidebar .tag:hover, .news-sidebar .tag:focus, .product-details-content .content-box .cart-btn{background:#fab90a;} </style>');		
					
				jQuery('head').append('<style>.socials ul li a:hover, .socials ul li a:focus, .carousel-prev:hover, .carousel-next:hover, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .news-sidebar .tag:hover, .news-sidebar .tag:focus{border-color:#fab90a;} </style>');
	
				jQuery('head').append('<style>.plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab  > a:hover{background-color:#fab90a;} </style>');	
				//Secondary 
					
					
				jQuery('head').append('<style>.maintance-media .this-title span, .welcome-box a, .woocommerce ul.products li.product .price, .woocommerce ul.products li.product .price{color:#51c5e9;}</style>');
					
				jQuery('head').append('<style>.btn-primary, .top-header2 .get-appointment-btn4, .tmc_header_3 .plumber-nav-right, .get-appointment-btn-new{background:#51c5e9;}</style>');						
			});
			  
			jQuery("#color2" ).on('click',function(){
				
				jQuery('head').append('<style>.header-social li a,.welcome-textss .this-title span, .section-title.blue-c, .blog-line a.redirect-link, .bg-post-title a:hover, .bg-post-title a:focus, .bl-post-title a:hover, .bl-post-title a:focus, .widget-footer .menu li a:hover, .widget-footer .menu li a:focus, .socials ul li a:hover, .socials ul li a:focus, .nform-texts, .footer-contact .media-left, .emmergency-leaks h2 span, .vision-list li, .service-grid .this-title a:hover, .service-grid .this-title a:focus, .banner-row .this-title, a.price-grid-title:hover, a.price-grid-title:focus, .blog-loop .this-title a:hover, .blog-loop .this-title a:focus, .blog-loop .this-footer li a:hover, .blog-loop .this-footer li a:focus, .woocommerce ul.products li.product a, .return-customer a, .testimonial-author .loc, .header-contacts2 .this-subtitle, .carousel-prev:hover i, .carousel-next:hover i, .single-service a.read-more2, .single-header-right-info .icon-box i, .single-header-right-info .text-box p, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .blog-loop .this-excerpt a.more-link, .news-sidebar .menu li a:hover, .news-sidebar .menu li a:focus, .recent-posts li a.title:hover, .recent-posts li a.title:focus, .recent-posts li a.read-more, .emmergency-contact-number .this-title span, .our-plumber .inner:hover ul li a:hover, .our-plumber .inner:hover ul li a:focus, .our-plumber .inner:focus ul li a:hover, .our-plumber .inner:focus ul li a:focus{color:#cf74f6;} </style>');
				   
				jQuery('head').append('<style>.btn-primary:hover, .custom-heading.wpb_content_element h2:after, .section-title:after, .widget-footer .widget-title:after, h4.widget_title.no_stripe:after,.mission-statement .this-title:after, .our-plumber .his-details, .single-services-menu li.active a,.single-services-menu li a:hover, .single-services-menu li a:focus, #comments #submit:hover, .woocommerce ul.products li.product .button, .woocommerce-message a.button.wc-forward, .bottom-box .pull-right input.button, .bottom-box .pull-left input.button, .woocommerce #review_form #respond .form-submit input, .woocommerce a.added_to_cart, .woocommerce #payment #place_order, .woocommerce-page #payment #place_order, .woocommerce form.login .form-row input, .woocommerce .checkout_coupon .form-row-last input, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .left-checkout .woocommerce-billing-fields .section_header.color h2:after, .left-checkout .woocommerce-shipping-fields h3:after, .right-checkout .section_header.color h2:after, .request-service-form, .plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab.vc_active, .single-service a.read-more, .news-sidebar .tag:hover, .news-sidebar .tag:focus, .product-details-content .content-box .cart-btn{background:#cf74f6;} </style>');		
					
				jQuery('head').append('<style>.socials ul li a:hover, .socials ul li a:focus, .carousel-prev:hover, .carousel-next:hover, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .news-sidebar .tag:hover, .news-sidebar .tag:focus{border-color:#cf74f6;} </style>');
	
				jQuery('head').append('<style>.plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab  > a:hover{background-color:#cf74f6;} </style>');	
				//Secondary 
					
					
				jQuery('head').append('<style>.maintance-media .this-title span, .welcome-box a, .woocommerce ul.products li.product .price, .woocommerce ul.products li.product .price{color:#4ace71;}</style>');
					
				jQuery('head').append('<style>.btn-primary, .top-header2 .get-appointment-btn4, .tmc_header_3 .plumber-nav-right, .get-appointment-btn-new{background:#4ace71;}</style>');
				
			});
			  
			jQuery("#color3" ).on('click',function(){
				jQuery('head').append('<style>.header-social li a,.welcome-textss .this-title span, .section-title.blue-c, .blog-line a.redirect-link, .bg-post-title a:hover, .bg-post-title a:focus, .bl-post-title a:hover, .bl-post-title a:focus, .widget-footer .menu li a:hover, .widget-footer .menu li a:focus, .socials ul li a:hover, .socials ul li a:focus, .nform-texts, .footer-contact .media-left, .emmergency-leaks h2 span, .vision-list li, .service-grid .this-title a:hover, .service-grid .this-title a:focus, .banner-row .this-title, a.price-grid-title:hover, a.price-grid-title:focus, .blog-loop .this-title a:hover, .blog-loop .this-title a:focus, .blog-loop .this-footer li a:hover, .blog-loop .this-footer li a:focus, .woocommerce ul.products li.product a, .return-customer a, .testimonial-author .loc, .header-contacts2 .this-subtitle, .carousel-prev:hover i, .carousel-next:hover i, .single-service a.read-more2, .single-header-right-info .icon-box i, .single-header-right-info .text-box p, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .blog-loop .this-excerpt a.more-link, .news-sidebar .menu li a:hover, .news-sidebar .menu li a:focus, .recent-posts li a.title:hover, .recent-posts li a.title:focus, .recent-posts li a.read-more, .emmergency-contact-number .this-title span, .our-plumber .inner:hover ul li a:hover, .our-plumber .inner:hover ul li a:focus, .our-plumber .inner:focus ul li a:hover, .our-plumber .inner:focus ul li a:focus{color:#d7b957;} </style>');
				   
				jQuery('head').append('<style>.btn-primary:hover, .custom-heading.wpb_content_element h2:after, .section-title:after, .widget-footer .widget-title:after, h4.widget_title.no_stripe:after,.mission-statement .this-title:after, .our-plumber .his-details, .single-services-menu li.active a,.single-services-menu li a:hover, .single-services-menu li a:focus, #comments #submit:hover, .woocommerce ul.products li.product .button, .woocommerce-message a.button.wc-forward, .bottom-box .pull-right input.button, .bottom-box .pull-left input.button, .woocommerce #review_form #respond .form-submit input, .woocommerce a.added_to_cart, .woocommerce #payment #place_order, .woocommerce-page #payment #place_order, .woocommerce form.login .form-row input, .woocommerce .checkout_coupon .form-row-last input, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .left-checkout .woocommerce-billing-fields .section_header.color h2:after, .left-checkout .woocommerce-shipping-fields h3:after, .right-checkout .section_header.color h2:after, .request-service-form, .plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab.vc_active, .single-service a.read-more, .news-sidebar .tag:hover, .news-sidebar .tag:focus, .product-details-content .content-box .cart-btn{background:#d7b957;} </style>');		
					
				jQuery('head').append('<style>.socials ul li a:hover, .socials ul li a:focus, .carousel-prev:hover, .carousel-next:hover, .project-filters li.active, .project-filters li:hover, .project-filters li:focus, .news-sidebar .tag:hover, .news-sidebar .tag:focus{border-color:#d7b957;} </style>');
	
				jQuery('head').append('<style>.plumbing-repairing.vc_tta-tabs.vc_tta-tabs-position-left:not([class*="vc_tta-gap"]):not(.vc_tta-o-no-fill) .vc_tta-tab  > a:hover{background-color:#d7b957;} </style>');	
				//Secondary 
					
					
				jQuery('head').append('<style>.maintance-media .this-title span, .welcome-box a, .woocommerce ul.products li.product .price, .woocommerce ul.products li.product .price{color:#1e51a0;}</style>');
					
				jQuery('head').append('<style>.btn-primary, .top-header2 .get-appointment-btn4, .tmc_header_3 .plumber-nav-right, .get-appointment-btn-new{background:#1e51a0;}</style>');
			});			                                           
	});            

jQuery(document).ready(function(){
	jQuery("#header-style").change(function(){
		 var value = jQuery('#header-style :selected').val();
		 if(value == 'Sticky'){
			jQuery(".navhere.porltv").css("position", "fixed");
			jQuery(".plumber-navbar.plumber-n").css("position", "fixed");
			
			  
		 }else if(value == 'Fluid'){
			jQuery(".navhere.porltv").css("position", "relative");
			jQuery(".plumber-navbar.plumber-n").css("position", "absolute");
						
		 }
	});

});		



