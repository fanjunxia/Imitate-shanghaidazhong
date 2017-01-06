/**
 * Created by admin on 2016/10/14.
 */
"use strict";
(function () {
    /*轮播图函数*/
    function banner(images) {
        var $slider = $('.banner');
        /*拼接字符串*/
        var str = '';
        str += '<div id="html5zoo-1" style="display:block;position:relative;margin:0 auto;">';
        str += '<ul class="html5zoo-slides" style="display:none;">';
        for (var i = 0; i < images.length; i++) {
            str += '<li><a href="###" target="_blank">';
            str += '<img src="images/' + images[i] + '">';
            str += '</a></li>';
        }
        str += '</ul>';
        str += '<ul class = "html5zoo-thumbnails" style = "display:none;" >';
        str += '<li><img src="images/' + images[i] + '"/></li>';
        str += '</ul>';
        str += '</div>';

        $slider.html(str);
    }

    /*轮播图执行*/
    var imgs = [
        '1920_565_1.jpg',
        '1920_565_22.jpg',
        '1920_565_20160825.jpg',
        '1920_565_20160902.jpg',
        '1920_565_20160907.jpg',
        '1920_565_20160928.jpg'
    ];
    banner(imgs);
})();






