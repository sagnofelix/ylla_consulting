(function(a){"use strict";var d='',f=0,c,b,e;a(window).on('load',function(){a(".ct-loader").fadeOut("slow"),c=a(window).width(),h(),g(),j(),k(),i(),l(),setTimeout(function(){a('body:not(.elementor-editor-active) .ct-slick-slider').css('height','auto'),a('body:not(.elementor-editor-active) .ct-slick-slider').css('overflow','visible'),a('body:not(.elementor-editor-active) .ct-slick-slider').css('opacity','1')},100)}),a(window).on('resize',function(){c=a(window).width(),h(),i()}),a(window).on('scroll',function(){b=a(window).scrollTop(),e=a(window).height(),c=a(window).width(),b<f?d='up':d='down',f=b,g(),j()}),a(document).on('click','.h-btn-search',function(){a('.ct-modal-search').addClass('open').removeClass('remove'),a('body').addClass('ov-hidden'),setTimeout(function(){a('.ct-modal-search .search-field').focus()},1e3)}),a(document).ready(function(){var g=a('.ct-main-navigation'),d,b,e,h,f,i;g.find('.ct-main-menu li').each(function(){var b=a(this).find('> ul.sub-menu');b.length==1&&a(this).hover(function(){b.offset().left+b.width()>a(window).width()?b.addClass('back'):b.offset().left<0&&b.addClass('back')},function(){b.removeClass('back')})}),a('.ct-main-navigation li.menu-item-has-children').append('<span class="ct-menu-toggle far fac-angle-down"></span>'),a('.ct-menu-toggle').on('click',function(){a(this).toggleClass('toggle-open'),a(this).parent().find('> .sub-menu').toggleClass('submenu-open'),a(this).parent().find('> .sub-menu').slideToggle()}),a(".ct-main-menu li a.is-one-page").on('click',function(){a(this).parents('.ct-header-navigation').removeClass('navigation-open'),a(this).parents('.ct-header-main').find('.btn-nav-mobile').removeClass('opened')}),a("#ct-menu-mobile .open-menu").on('click',function(){a(this).toggleClass('opened'),a('.ct-header-navigation').toggleClass('navigation-open')}),a(".ct-menu-close").on('click',function(){a(this).parents('.header-navigation').removeClass('navigation-open'),a('.ct-menu-overlay').removeClass('active'),a('#ct-menu-mobile .open-menu').removeClass('opened'),a('body').removeClass('ovhidden')}),a(".ct-menu-overlay").on('click',function(){a(this).parents('#header-main').find('.header-navigation').removeClass('navigation-open'),a(this).removeClass('active'),a('#ct-menu-mobile .open-menu').removeClass('opened'),a('.header-navigation').removeClass('navigation-open'),a('body').removeClass('ovhidden')}),c<1199&&a('.ct-main-menu li.menu-item-has-children > a').on("click",function(b){b.preventDefault(),a(this).parent().find('> .sub-menu, > .children').toggleClass('submenu-open'),a(this).parent().find('> .sub-menu, > .children').slideToggle(),a(this).parent().find('> .ct-menu-toggle').toggleClass('toggle-open')}),a('.h-btn-form').click(function(b){b.preventDefault(),a('.ct-modal-contact-form').removeClass('remove').toggleClass('open')}),setTimeout(function(){a('.ct-close, .ct-close .ct-icon-close').click(function(b){b.preventDefault(),a(this).parents('.ct-widget-cart-wrap').removeClass('open'),a(this).parents('.ct-modal').addClass('remove').removeClass('open'),a(this).parents('#page').find('.site-overlay').removeClass('open'),a(this).parents('body').removeClass('ov-hidden')})},300),a('.ct-hidden-sidebar-overlay, .ct-widget-cart-overlay').click(function(b){b.preventDefault(),a(this).parent().toggleClass('open'),a(this).parents('body').removeClass('ov-hidden')}),a('.entry-video iframe').each(function(){var b=a(this).width();b=b/(16/9),a(this).attr('height',b+35)}),a('.ct-video-button, .btn-video, .slider-video').magnificPopup({type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:!1,fixedContentPos:!1}),a('.scroll-top').click(function(){return a('html, body').animate({scrollTop:0},800),!1}),a('.wpcf7-select').parent().addClass('wpcf7-menu'),d=a('.owl-active-click'),d.children().each(function(b){a(this).attr('data-position',b)}),a(document).on('click','.owl-active-click .owl-item > div',function(){d.trigger('to.owl.carousel',a(this).data('position'))}),a('form:not(.wpforms-form) select').each(function(){a(this).niceSelect()}),a('.ct-modal-close').on('click',function(){a(this).parent().removeClass('open').addClass('remove'),a(this).parents('body').removeClass('ov-hidden')}),a(document).on('click',function(b){b.target.className=='ct-modal ct-modal-search open'&&a('.ct-modal-search').removeClass('open').addClass('remove'),b.target.className=='ct-hidden-sidebar open'&&a('.ct-hidden-sidebar').removeClass('open')}),a(".h-btn-sidebar").on('click',function(b){b.preventDefault(),a('.ct-hidden-sidebar-wrap').toggleClass('open'),a(this).parents('body').addClass('ov-hidden')}),a(".ct-hidden-close").on('click',function(b){b.preventDefault(),a(this).parents('.ct-hidden-sidebar-wrap').removeClass('open'),a(this).parents('body').removeClass('ov-hidden')}),a(".h-btn-cart, .btn-nav-cart").on('click',function(b){b.preventDefault(),a('.ct-widget-cart-wrap').toggleClass('open'),a('.ct-header-navigation').removeClass('navigation-open'),a('#ct-menu-mobile .open-menu').removeClass('opened'),a(this).parents('body').addClass('ov-hidden')}),b=a(".ct-footer-year"),e=b.parents(".site").find('.ct-year'),e.after(b.clone()),b.remove(),e.remove(),a('.comment-reply a').append('<i class="fa fa-angle-right"></i>'),setTimeout(function(){a('.revslider-initialised').each(function(){a(this).find('.ct-slider-nav .slider-nav-right').on('click',function(){a(this).parents('.revslider-initialised').find('.tp-rightarrow').trigger('click')}),a(this).find('.ct-slider-nav .slider-nav-left').on('click',function(){a(this).parents('.revslider-initialised').find('.tp-leftarrow').trigger('click')})}),a('.ct-slider-nav').parents('.revslider-initialised').find('.tparrows').addClass('arrow-hidden')},300),setTimeout(function(){a('.input-filled').each(function(){var b=a(this).find(".input-icon"),c=a(this).find('.wpcf7-form-control');c.before(b.clone()),b.remove()})},200),a('.same-height').matchHeight(),a('.ct-counter-layout3 .ct-counter-inner').matchHeight(),a('.ct-client-grid1 .grid-item').matchHeight(),a(".choose-demo").on('click',function(){a(this).parents('.ct-demo-bar').toggleClass('active')}),a('.animate-time').each(function(){var b=100,d=a(this).children().length,c=d-1;a(this).find('> .grid-item > .wow').each(function(e,f){a(this).css('animation-delay',b+'ms'),c===e?(b=100,c=c+d):b=b+80})}),a('.case-animate-time').each(function(){var b=0,d=a(this).children().length,c=d-1;a(this).find('> .slide-in-container > .wow').each(function(e,f){a(this).css('transition-delay',b+'ms'),c===e?(b=0,c=c+d):b=b+150})}),a('.ct-showcase-link').each(function(){a(this).hover(function(){a(this).parents('.ct-showcase-image').find('.ct-showcase-link').removeClass('active'),a(this).addClass('active')})}),a(".ct-blog-grid-layout1 .grid-item-inner, .ct-blog-carousel-layout1 .grid-item-inner").hover(function(){a(this).find('.item--readmore').slideToggle(300),a(this).find('.item--meta').slideToggle(300)},function(){a(this).find('.item--readmore').slideToggle(300),a(this).find('.item--meta').slideToggle(300)}),a(".ct-team-grid1 .item--inner, .ct-team-carousel2 .item--inner").hover(function(){a(this).find('.item--description').slideToggle(200)},function(){a(this).find('.item--description').slideToggle(200)}),a(".ct-fancy-box-layout5").hover(function(){a(this).find('.item--title').slideToggle(300)},function(){a(this).find('.item--title').slideToggle(300)}),a('.ct-point-item, .ct-branche1').each(function(){var c=a(this).children("div").attr('class'),b=a(this).children("div").attr('class');a("."+c).hover(function(){a(this).parents('.site-content').find(".ct-branche1 ."+b).addClass('active-point')},function(){a(this).parents('.site-content').find(".ct-branche1 ."+b).removeClass('active-point')})}),h=240,f=440,i=a('.page-title-inner'),a(window).bind('scroll',function(){var b=a(document).scrollTop(),c=0;b<=h?c=1:b<=f&&(c=1-b/f),i.css('opacity',c)}),setTimeout(function(){a('.elementor-section-wrap > .elementor-element').each(function(){var b=a(this).find(".ct-particle-animate"),e=b.parents(".elementor-container"),c,f,d,g;e.before(b.clone()),b.remove(),c=a(this).find(".ct-background-animate"),f=c.parents(".elementor-container"),f.before(c.clone()),c.remove(),d=a(this).find(".ct-text"),g=d.parents(".elementor-container"),g.before(d.clone()),d.remove()})},200),a('.mega-2-columns').parents('.sub-menu').addClass('ct-mega-2-columns'),a('.mega-2-columns').parents('li.megamenu').addClass('ct-megamenu-columns'),a(".ct-pricing-tab-active .ct-pricing-tab-item").on('click',function(){a(this).parent().find('.ct-pricing-tab-item').removeClass('active'),a(this).addClass('active')}),a(".ct-pricing-tab-active .title-tab-monthly").on('click',function(){a(this).parents('.ct-pricing').find('.ct-pricing-monthly').removeClass('ct-pricing-hide'),a(this).parents('.ct-pricing').find('.ct-pricing-year').addClass('ct-pricing-hide')}),a(".ct-pricing-tab-active .title-tab-year").on('click',function(){a(this).parents('.ct-pricing').find('.ct-pricing-year').removeClass('ct-pricing-hide'),a(this).parents('.ct-pricing').find('.ct-pricing-monthly').addClass('ct-pricing-hide')})});function g(){var e=a('#ct-header-wrap').outerHeight(),i=e+100,f,g,h,j;a('#ct-header-wrap').hasClass('is-sticky')&&(b>e?a('#ct-header').addClass('h-fixed'):a('#ct-header').removeClass('h-fixed')),a('.fixed-height #ct-header-top').length?f=a('.fixed-height #ct-header-top').outerHeight():f=0,a('.fixed-height #ct-header-middle').length?g=a('.fixed-height #ct-header-middle').outerHeight():g=0,a('.fixed-height #ct-header').length?h=a('.fixed-height #ct-header').outerHeight():h=0,j=f+g+h,c>1200&&a('.fixed-height').css({height:j}),c>1200&&a('.fixed-height').css({'max-height':e}),c>1200&&a('.fixed-height-h').css({height:e}),d=='up'&&b>0?a('#ct-header').addClass('scroll-up'):a('#ct-header').removeClass('scroll-up'),d=='down'?a('#ct-header').addClass('scroll-down'):a('#ct-header').removeClass('scroll-down'),d=='down'&&b>i?a('#ct-header').addClass('scroll-animate'):a('#ct-header').removeClass('scroll-animate')}function l(){if(a('#ct-mouse-move').hasClass('ct-mouse-move')){var b,g,c,d,e,f;b=document.getElementById('ct-mouse-move'),c=a=>a.clientX,d=a=>a.clientY,e=e=>{var a;return a={x:c(e),y:d(e)},b.style.top=a.y+'px',b.style.left=a.x+'px'},f=!1,window.onmousemove=g=b=>{var a;return a=b,f=setTimeout(()=>e(a),0)}}}function h(){var b=(a('#content').width()-1200)/2;c>1200&&(a('body:not(.rtl) .col-offset-left > .elementor-column-wrap > .elementor-widget-wrap').css('padding-left',b+'px'),a('body:not(.rtl) .col-offset-right > .elementor-column-wrap > .elementor-widget-wrap').css('padding-right',b+'px'),a('.rtl .col-offset-left > .elementor-column-wrap > .elementor-widget-wrap').css('padding-right',b+'px'),a('.rtl .col-offset-right > .elementor-column-wrap > .elementor-widget-wrap').css('padding-left',b+'px'))}function i(){setTimeout(function(){var b=a('.fixed-footer .site-footer-custom').outerHeight()-1;a('.fixed-footer .site-content').css('margin-bottom',b+'px')},300)}function j(){b<e&&a('.scroll-top').addClass('off').removeClass('on'),b>e&&a('.scroll-top').addClass('on').removeClass('off')}function k(){a('#content .quantity').append('<span class="quantity-icon"><i class="quantity-down fa fa-sort-desc"></i><i class="quantity-up fa fa-sort-asc"></i></span>'),a('.quantity-up').on('click',function(){a(this).parents('.quantity').find('input[type="number"]').get(0).stepUp()}),a('.quantity-down').on('click',function(){a(this).parents('.quantity').find('input[type="number"]').get(0).stepDown()}),a('.woocommerce-cart-form .actions .button').removeAttr('disabled')}a(document).ajaxComplete(function(){k()})})(jQuery)