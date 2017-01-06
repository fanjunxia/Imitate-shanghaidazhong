/**
 * Created by admin on 2016/10/15.
 * 编码GB2312
 */
"use strict";
function News(json) {
    this.img = json.img;
    this.title = json.title;
    this.content = json.content;
    this.date = json.date;
    this.params = {
        $wrap: $('.news-con')
    };
    this.init();
}
News.prototype = {
    //==================初始化
    init: function () {
        this.bindDOM();
        this.bindEvents();
    },
    //==================绑定DOM元素
    bindDOM: function () {
        var str = '';
        str += '<div class="news-list">';
        str += '<div class="news-img"><a href="#"><img src="' + this.img + '" alt=""></a></div>';
        str += '<div class="news-message">';
        str += '<div class="news-list-title"><a href="#">' + this.title + '</a></div>';
        str += '<div class="news-list-text"><p>' + this.content + '</p></div>';
        str += '<div class="news-list-bottom clearfix">';
        str += '<span class="news-list-date">' + this.date + '</span>';
        str += '<span class="news-list-share">分享';
        str += '<a href="#"><img src="../images/xinlangweibo2.jpg" alt=""></a><a href="#"><img src="../images/qqweibo2.jpg" alt=""></a>';
        str += '</span>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        this.params.$wrap.append(str);
    },
    //=================?????
    bindEvents: function () {

    }
};



















