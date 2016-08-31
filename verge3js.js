
    $('.menu_icon').click(function() {
        $('.animated_vertical_navbar ').removeClass('transform_left');
        $('.animated_vertical_navbar ').addClass('transform_right');
        $('.animated_vertical_navbar_shadow ').addClass('display_class');
    });

    $('.animated_vertical_navbar_shadow').click(function() {
        $('.animated_vertical_navbar_shadow ').removeClass('display_class');
        $('.animated_vertical_navbar ').removeClass('transform_right');
        $('.animated_vertical_navbar ').addClass('transform_left');
      

    });

    $('#new_articles').click(function() {

        // $('.right_vertical_navbar_shadow').removeClass('display_class');
        $('.right_vertical_navbar ').removeClass('right_vertical_navbar_transform_right');

        $('.right_vertical_navbar').addClass('right_vertical_navbar_transform_left');
         $('.animated_vertical_navbar_shadow ').addClass('display_class');
    });

    $('.animated_vertical_navbar_shadow').click(function() {

        
        $('.animated_vertical_navbar_shadow ').removeClass('display_class');
        $('.right_vertical_navbar ').removeClass('right_vertical_navbar_transform_left');
        $('.right_vertical_navbar').addClass('right_vertical_navbar_transform_right');
        // $('.right_vertical_navbar_shadow').addClass('right_vertical_navbar_shadow_transform_right');
    });


    var flag = true;

    $('.drop_down').click(function() {

        if (flag === true) {


            $(".drop_down_image_default").html("&#9652");


            $(".drop_down").css("background-color", "#fa4b2a");
            $(".drop_down_image_default").css("color", "white");
            $(".drop_down_list").addClass("drop_down_list_display");
            flag = false;
            return false;

        }
        if (flag === false) {

            $(".drop_down_image_default").html("&#9662");

            $(".drop_down_image_default").css("color", "black")
            $(".drop_down_list").removeClass("drop_down_list_display");
            $(".drop_down").css("background-color", "#f0f0f0");
            flag = true;
            return false;

        }
    });

    $('.video_scroll_elements_list_video_link_image_play ').click(function() {
        location.href = "http://www.theverge.com/video/2016/8/23/12615600/smart-lights-best-you-can-buy";


    });
