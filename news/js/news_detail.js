/**
 * Created by admin on 2016/10/16.
 */
"use strict";

(function () {
    /*新闻推荐列表函数*/
    function newsRecList(data) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            /*拼接字符串*/
            str += '<li class="news-recommend-list">';
            str += '<div class="news-list-con"><a href="#">' + item.title + '</a></div>';
            str += '<div class="news-recommend-date"><span>' + item.date + '</span></div>';
            str += '</li>';
        }
        /*添加到文档里*/
        $('.news-recommend-con').html(str);
    }

    /*执行新闻推荐列表函数*/
    var news_detail_data = [
        {
            img: '../images/20160505025733380.jpg',
            title: '上汽大众1-4月销量再创佳绩 继续领跑国内乘用车市场',
            content: '继一季度摘得国内乘用车市场销量冠军后，上汽大众再创佳绩，1-4月实现销售674,230辆，继续领跑国内乘用车市场。同时，在4月的零售市场，上汽大众也以143,492辆的成绩，蝉联了国内乘用车市场月度销量冠军。',
            date: '2016年09月08日'
        },
        {
            img: '../images/20160905033909530.jpg',
            title: '超越新里程 上汽大众迎来第1500万辆汽车下线',
            content: '8月31日，随着一辆天鹅绒棕的PHIDEON辉昂驶下生产线，上汽大众迎来了第1500万辆汽车下线，成为国内首家产量突破1500万辆的乘用车生产企业。1500万辆的里程不仅仅是数字上的超越，更是上汽大众通过在产能布局、产品研发、生产制造、质量保障、营销服务等各个环节持续发展，构建起的强大体系竞争力。',
            date: '2016年08月31日'
        },
        {
            img: '../images/20161013050935600.jpg',
            title: '2016年车市半年报 上汽大众销量夺冠',
            content: '7月8日，全国乘用车市场信息联席会发布2016年上半年销售数据，上汽大众实现销售970,018辆，位列国内乘用车市场第一，在2016年上半年继续领跑国内市场。',
            date: '2016年08月31日'
        },
        {
            img: '../images/20160505025733380.jpg',
            title: '上汽大众1-4月销量再创佳绩 继续领跑国内乘用车市场',
            content: '继一季度摘得国内乘用车市场销量冠军后，上汽大众再创佳绩，1-4月实现销售674,230辆，继续领跑国内乘用车市场。同时，在4月的零售市场，上汽大众也以143,492辆的成绩，蝉联了国内乘用车市场月度销量冠军。',
            date: '2016年09月08日'
        },
    ];
    newsRecList(news_detail_data);
})();





