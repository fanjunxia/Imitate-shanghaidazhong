/**
 * Created by admin on 2016/10/16.
 */
"use strict";
(function () {
    /*backTop函数*/
    function backtoTop() {
        var $btn_backTop = $('#backTop');
        /*页面滚动*/
        $(window).scroll(function () {
            var topVal = $(this).scrollTop();
            // console.log(topVal);
            //===显示隐藏按钮
            if (topVal > 50) {
                $btn_backTop.show();
            }
            else {
                $btn_backTop.hide();
            }
        });
        /*按钮点击*/
        $btn_backTop.on('click', function () {
            /*返回页面顶部*/
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        })
    }

    /*backtoTop执行*/
    backtoTop();
})();