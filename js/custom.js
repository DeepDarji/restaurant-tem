/*
Copyright (c) 2017
------------------------------------------------------------------
[Master Javascript]

Project: Catering Website Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var Catering = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- projectname Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Stellar();
            this.Wow();
            this.Testimonial_slider();
            this.Navigation_menu();
            this.News_slider();
            this.About_slider();
            this.Counter();
            this.Onclick_popup();
            this.Gallery();
            this.Selectpicker();
            this.Datepicker();
            this.Rv_slider();
            this.Subscribe_AjaxMail();
            this.Mailfunction();
            this.Bookmailfunction();
            this.Bookonemailfunction();
            this.Booktwomailfunction();
            this.Bookthreemailfunction();
            this.Preloader();

        },

        /*-------------- projectname Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            // On Right-to-left(RTL) add class 
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Stellar
        Stellar: function() {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });

        },
        // wow
        Wow: function() {
            new WOW().init();

        },
        // Testimonial slider
        Testimonial_slider: function() {
            if ($('#owl-testimonial').length > 0) {
                $("#owl-testimonial").owlCarousel({
                    navigation: true,
                    loop: true,
                    items: 1,
                    autoplay: true,
                    speed: 1000,
                    singleItem: true,
                    animateIn: 'fadeinanim',
                    animateOut: 'fadeOut'

                });
            }
        },
        // Navigation Slider
        Navigation_menu: function() {

            $(".menu_toggle").on('click', function(e) {
                e.preventDefault();
                $(".cat_menu").addClass('open_menu');
            });
            $(".menu_overlay").on('click', function() {
                $(".cat_menu.open_menu").removeClass('open_menu');

            });

            $(".close_btn").on('click', function() {
                $(".cat_menu.open_menu").removeClass('open_menu');
            });

            //Onclick small menu
            if ($(window).width() < 992) {
                $(".cat_menu ul.sub-menu").parents("li").addClass("dropdown_menu");
                $(".cat_menu ul.sub-menu").parents("li.dropdown_menu").prepend("<i></i>");
                $(".cat_menu ul li.dropdown_menu i").attr("class", "fa fa-caret-down");
            } else {

            }

            //Responsive menu
            $('.nav').find('>li.dropdown_menu').on('click', function() {
                if ($(window).width() < 992) {
                    $('.cat_menu ul >li > ul').not($(this).children(".cat_menu >ul >li >ul").slideToggle()).hide();
                } else {
                    $('.nav >li >ul').hide();
                }
            });

            //Fixed menu
            if ($(window).width() < 992) {
                $(".cat_top_wrapper").removeClass("fixed-top")

            } else {
                $(window).scroll(function() {
                    $(".cat_top_wrapper").removeClass("fixed-top")
                    var scroll = $(window).scrollTop();
                    if (scroll > 200) {
                        $(".cat_top_wrapper").addClass("fixed-top").delay(1000).fadeIn();
                    }
                });
            }
            // add class on custom radio button
            $('.book_check').on('click', function() {
                $('.book_check:not(:checked)').parent().removeClass("check_border_color");
                $('.book_check:checked').parent().addClass("check_border_color");
            });
        },

        // News Slider
        News_slider: function() {
            if ($('.owl-carousel-news').length > 0) {
                $(".owl-carousel-news").owlCarousel({
                    navigation: true,
                    loop: true,
                    items: 1,
                    autoplay: false,
                    slideSpeed: 1000,
                    singleItem: true,
                    animateIn: 'fadeInUp',
                    animateOut: 'fadeOut'

                });
            }
        },
        // About slider
        About_slider: function() {
            if ($('.owl-carousel-about').length > 0) {
                $(".owl-carousel-about").owlCarousel({
                    navigation: true,
                    loop: true,
                    items: 1,
                    autoplay: true,
                    slideSpeed: 1000,
                    singleItem: true,
                    animateIn: 'zoomIn',
                    animateOut: 'fadeOut'

                });
            }
        },
        // Counter
        Counter: function() {
            if ($('.appear-count').length > 0) {
                $('.appear-count').appear(function() {
                    $('.count_no').countTo();
                });
            }
        },
        //Onclick popup
        Onclick_popup: function() {
            $('.cat_quote_btn a').on('click', function() {
                $('.cat_menu_package').addClass('cat_open_popup');
                $('.cat_bookform_overlay').addClass('cat_bookform_overlay_open');
            });
            $('.cat_popup_close').on('click', function() {
                $('.cat_menu_package').removeClass('cat_open_popup');
                $('.cat_bookform_overlay').removeClass('cat_bookform_overlay_open');
            });

        },
        //Magnific Popup
        //Magnifiv Video
        Gallery: function() {
            $('.catering-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'catering_popup',
                removalDelay: 160,
                preloader: false,

                fixedContentPos: false
            });
            //Magnific Gallery
            $('.cat_img_gallery').magnificPopup({
                type: 'image',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                midClick: true,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },

                removalDelay: 300,
                mainClass: 'cat_zoom'
            });
            //Instagram Magnific Gallery
            $('.cat_insta_gallery').magnificPopup({
                type: 'image',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                midClick: true,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                removalDelay: 300,
                mainClass: 'cat_zoom_in'
            });
            //About Cook Magnific Gallery
            $('.cat_cook_gallery').magnificPopup({
                type: 'image',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                midClick: true,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                removalDelay: 300,
                mainClass: 'cat_zoom_in'
            });
        },
        //Selectpicker
        Selectpicker: function() {
            if ($('.selectpicker').length > 0) {
                $('.selectpicker').selectpicker({
                    size: 4
                });
            }
        },
        //Datetpicker
        Datepicker: function() {
            if ($('.datepicker').length > 0) {
                $(".datepicker").datepicker({
                    inline: true
                });
            }
        },
        //Revolution slider
        Rv_slider: function() {
            var tpj = jQuery;
            var rvcatering;
            if ($('#cat_rvslider').length > 0) {
                tpj(document).ready(function() {
                    if (tpj("#cat_rvslider").revolution == undefined) {
                        revslider_showDoubleJqueryError("#cat_rvslider");
                    } else {
                        rvcatering = tpj("#cat_rvslider").show().revolution({
                            sliderType: "auto",
                            jsFileLocation: "../../revolution/js/",
                            dottedOverlay: "none",
                            delay: 9000,
                            fullScreenOffsetContainer: ".header",
                            fullScreenOffset: "10px",
                            minHeight: 720,
                            navigation: {
                                keyboardNavigation: "on",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "horizontal",
                                    drag_block_vertical: false
                                },
                                thumbnails: {
                                    style: "gyges",
                                    enable: false,
                                    width: 100,
                                    height: 50,
                                    min_width: 100,
                                    wrapper_padding: 5,
                                    wrapper_color: "transparent",
                                    wrapper_opacity: "1",
                                    tmp: '<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
                                    visibleAmount: 5,
                                    hide_onmobile: false,
                                    hide_onleave: false,
                                    direction: "horizontal",
                                    span: false,
                                    position: "inner",
                                    space: 5,
                                    h_align: "left",
                                    v_align: "bottom",
                                    h_offset: 0,
                                    v_offset: 20
                                },
                                tabs: {
                                    style: "gyges",
                                    enable: false,
                                    width: 350,
                                    height: 80,
                                    min_width: 350,
                                    wrapper_padding: 0,
                                    wrapper_color: "#333333",
                                    wrapper_opacity: "1",
                                    tmp: '<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{title}}</span></div><div class="tp-tab-image"></div>',
                                    visibleAmount: 10,
                                    hide_onmobile: true,
                                    hide_under: 776,
                                    hide_onleave: false,
                                    hide_delay: 200,
                                    direction: "vertical",
                                    span: true,
                                    position: "outer-right",
                                    space: 0,
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 0,
                                    v_offset: 0
                                }
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            gridwidth: [1400, 1240, 778, 480],
                            gridheight: [800, 768, 960, 720],
                            lazyType: "none",
                            parallax: {
                                type: "mouse+scroll",
                                origo: "slidercenter",
                                speed: 2000,
                                levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50],
                                disable_onmobile: "on"
                            },
                            shadow: 0,
                            spinner: "off",
                            autoHeight: "off",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                disableFocusListener: false,
                            }
                        });
                    }

                });
            }
        },
        Subscribe_AjaxMail: function() {
            //Subscribe form submition
            $('#subscribe_email').keypress(function(e) {
                var key = e.which;
                if (key == 13) // the enter key code
                {
                    $('#subscribe_form_submit').onclick();
                    return false;
                }
            });

            $("#subscribe-button").on("click", function() {
                var e = $("#subscribe_email").val();
                $.ajax({
                    type: "POST",
                    url: "subscribe_ajaxmail.php",
                    data: {
                        useremail: e
                    },
                    success: function(contact) {
                        var subscribe_error = contact.split("#");
                        if (subscribe_error[0] == "1") {
                            $("#subscribe_email").val("");
                            $("#err").html(subscribe_error[1]);
                            $(".subscribe_form .input_wrapper").addClass('success');
                            setTimeout(function() {
                                $(".subscribe_form .input_wrapper").removeClass('success');
                            }, 2500);
                            setTimeout(function() {
                                $(".subscribe_form .input_wrapper").removeClass('error');
                            }, 2000);
                        } else {
                            $("#subscribe_email").val(e);
                            $("#err").html(subscribe_error[1]);

                            $(".subscribe_form .input_wrapper").addClass('error');
                            setTimeout(function() {
                                $(".subscribe_form .input_wrapper").removeClass('error');
                            }, 2000);

                        }
                    }
                })
            });

        },
        Mailfunction: function() {
            $('#cat_submit').on('click', function() {
                var un = $('#uname').val();
                var em = $('#uemail').val();
                var sub = $('#subj').val();
                var meesg = $('#mesg').val();
                console.log(un + ' ' + em + ' ' + sub + ' ' + meesg);
                $.ajax({
                    type: "POST",
                    url: "ajaxmail.php",
                    data: {
                        'username': un,
                        'useremail': em,
                        'usersub': sub,
                        'mesg': meesg,
                    },
                    success: function(msg) {
                        console.log(msg);
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#uname').val("");
                            $('#uemail').val("");
                            $('#subj').val("");
                            $('#s').val("");
                            $('#err1').html(full_msg[1]);
                        } else {
                            $('#uname').val(un);
                            $('#uemail').val(em);
                            $('#subj').val("");
                            $('#mesg').val(meesg);
                            $('#err1').html(full_msg[1]);
                        }
                    }
                });
            });
        },
        Bookmailfunction: function() {
            $('#book_submit').on('click', function() {
                var eventStr = '';
                $('.book_check').each(function() {
                    if ($(this).is(':checked')) {
                        var tittle = $(this).attr('title');
                        eventStr += tittle + ' , ';
                    }
                });
                eventStr = $.trim(eventStr);
                eventStr = eventStr.replace(/(^,)|(,$)/g, "");

                var dt = $('#book_date').val();
                var ev = $('#select_event').val();
                var pp = $('#select_ppl').val();
                var ar = $('#select_area').val();
                var b_un = $('#book_name').val();
                var b_no = $('#book_no').val();
                var b_em = $('#book_email').val();
                console.log(b_em);
                console.log(dt + ' ' + ev + ' ' + pp + ' ' + ar + ' ' + b_un + ' ' + b_no + ' ' + b_em);
                $.ajax({
                    type: "POST",
                    url: "book_ajaxmail.php",
                    data: {
                        'bookdate': dt,
                        'selectevent': ev,
                        'selectppl': pp,
                        'selectarea': ar,
                        'bookname': b_un,
                        'bookno': b_no,
                        'bookmail': b_em,
                        'eventStr': eventStr,
                    },
                    success: function(msg) {
                        console.log(msg);
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#book_date').val("");
                            $('#select_event').val("");
                            $('#select_ppl').val("");
                            $('#select_area').val("");
                            $('#book_name').val("");
                            $('#book_no').val("");
                            $('#book_mail').val("");
                            $('#err1').html(full_msg[1]);
                        } else {
                            $('#book_date').val(dt);
                            $('#select_event').val(ev);
                            $('#select_ppl').val(pp);
                            $('#select_area').val(ar);
                            $('#book_name').html(b_un);
                            $('#book_no').html(b_no);
                            $('#book_mail').html(b_em);
                            $('#err1').html(full_msg[1]);
                        }
                    }
                });

            });

        },
        Bookonemailfunction: function() {
            $('#buk-submit').on('click', function() {
                var name = $('#u_name').val();
                var u_date = $('#u_date').val();
                var num = $('#u_num').val();
                var email = $('#u_email').val();
                console.log(name + ' ' + u_date + ' ' + num + ' ' + email);
                $.ajax({
                    type: "POST",
                    url: "book1_ajaxmail.php",
                    data: {
                        'username': name,
                        'userdate': u_date,
                        'usernum': num,
                        'uemail': email,
                    },
                    success: function(msg) {
                        console.log(msg);
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#u_name').val("");
                            $('#u_date').val("");
                            $('#u_num').val("");
                            $('#u_email').val("");
                            $('#err2').html(full_msg[1]);
                        } else {
                            $('#uname').val(name);
                            $('#uemail').val(u_date);
                            $('#subj').val(num);
                            $('#mesg').val(email);
                            $('#err2').html(full_msg[1]);
                        }
                    }
                });
            });
        },
		    Booktwomailfunction: function() {
            $('#us-submit').on('click', function() {
                var uname = $('#us_name').val();
                var udate = $('#us_date').val();
                var unum = $('#us_num').val();
                var uemail = $('#us_email').val();
                console.log(uname + ' ' + udate + ' ' + unum + ' ' + uemail);
                $.ajax({
                    type: "POST",
                    url: "book2_ajaxmail.php",
                    data: {
                        'username': uname,
                        'userdate': udate,
                        'usernum': unum,
                        'uemail': uemail,
                    },
                    success: function(msg) {
                        console.log(msg);
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#us_name').val("");
                            $('#us_date').val("");
                            $('#us_num').val("");
                            $('#us_email').val("");
                            $('#err3').html(full_msg[1]);
                        } else {
                            $('#us_name').val(uname);
                            $('#us_name').val(udate);
                            $('#us_name').val(unum);
                            $('#us_name').val(uemail);
                            $('#err3').html(full_msg[1]);
                        }
                    }
                });
            });
        },
			Bookthreemailfunction: function() {
            $('#service-submit').on('click', function() {
				var cdate = $('#cus_date').val();
				var cevent = $('#cus_event').val();
				var cppl = $('#cus_ppl').val();
				var carea = $('#cus_area').val();
                var cname = $('#cus_name').val();
                var cnum = $('#cus_num').val();
                var cemail = $('#cus_email').val();
                console.log(cdate + ' ' + cevent + ' ' + cppl + ' ' + carea + ' ' + cname + ' ' + cnum + ' ' + cemail);
                $.ajax({
                    type: "POST",
                    url: "book3_ajaxmail.php",
                    data: {
                        'username': cname,
                        'userdate': cdate,
                        'usernum': cnum,
                        'uevent': cevent,
                        'uarea': carea,
                        'uemail': cemail,
                        'uppl': cppl,
                    },
                    success: function(msg) {
                        console.log(msg);
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#cus_date').val("");
                            $('#cus_event').val("");
                            $('#cus_ppl').val("");
                            $('#cus_area').val("");
                            $('#cus_name').val("");
                            $('#cus_num').val("");
                            $('#cus_email').val("");
                            $('#err3').html(full_msg[1]);
                        } else {
                            $('#cus_date').val(cdate);
							$('#cus_event').val(cevent);
							$('#cus_ppl').val(cppl);
							$('#cus_name').val(cname);
							$('#cus_num').val(cnum);
                            $('#cus_email').val(cemail);
                            $('#err3').html(full_msg[1]);
                        }
                    }
                });
            });
        },
        //Prealoader
        Preloader: function() {
            jQuery("#status").fadeOut();
            jQuery("#preloader").delay(350).fadeOut("slow");
        },
    };

    Catering.init();

    $(document).ready(function($) {
        var w = window.innerWidth;
        if (w >= 767) {
            var height = $(".cat_banner2 .cat_book_service_wrapper").outerHeight();
            $(".cat_banner2 .cat_book_service_wrapper").css("margin-top", height);
        }
    });

    // Load Event
    $(window).on('load', function() {
        //Color picker
        var colorcode = document.cookie;
        if (colorcode != "") {
            var cname = "colorcssfile";
            var name = cname + "=";
            var cssname = '';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) {
                    cssname = c.substring(name.length, c.length);
                }
            }

            if (cssname != '') {
                var new_style = 'css/' + cssname + '.css';
                $('#color-change').attr('href', new_style);
            }
        }


    });

    // Scroll Event
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $(".totop").css({
                bottom: "14px"
            });
        } else {
            $(".totop").css({
                bottom: "-100px"
            });
        }

    });

     $(".totop").on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false
        });

})(jQuery);