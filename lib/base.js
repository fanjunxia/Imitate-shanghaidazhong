/**
 * Created by admin on 2016/10/16.
 */
"use strict";
(function () {
    /*backTop����*/
    function backtoTop() {
        var $btn_backTop = $('#backTop');
        /*ҳ�����*/
        $(window).scroll(function () {
            var topVal = $(this).scrollTop();
            // console.log(topVal);
            //===��ʾ���ذ�ť
            if (topVal > 50) {
                $btn_backTop.show();
            }
            else {
                $btn_backTop.hide();
            }
        });
        /*��ť���*/
        $btn_backTop.on('click', function () {
            /*����ҳ�涥��*/
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        })
    }

    /*backtoTopִ��*/
    backtoTop();
})();