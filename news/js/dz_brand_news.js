/**
 * Created by admin on 2016/10/16.
 */
"use strict";
(function () {
    var company_news_data = [
        {
            img: '../images/20160928020033352.jpg',
            title: '出游好拍档 家人眼中的全新途安L',
            content: '炎热的高温逐渐被凉爽的秋风所吹散，越来越多的家庭选择驾车出游，享受金秋美好的家庭时光。其乐融融的全家之旅，离不开一辆称职的家用座驾，作为高级家用车的代表，全新途安L凭借灵活的空间设计、强劲的动力表现以及丰富实用的全能配置，满足不同家庭成员的用车需求，成为自驾出游的好拍档。',
            date: '2016年09月28日'
        },
        {
            img: '../images/20160923051038764.jpg',
            title: '节能环保典范 2017款凌渡倾心打造低碳生活',
            content: '在“低碳生活”理念愈加流行的今天，选择一款节能环保的座驾成为消费者的重要考量。自推向市场以来，上汽大众高颜值宽体轿车??Lamando凌渡在节能环保方面的实力获得了广泛认可，并荣膺中国生态汽车评价规程（C-ECAP）首批金牌认证。近日升级而来的2017款凌渡为汽车节能环保再树新典范，其凭借高效的动力总成、优',
            date: '2016年09月23日'
        },
        {
            img: '../images/20160902051349790.jpg',
            title: '新桑塔纳家族成都车展开启新篇章 New Santana新桑塔纳升级而来 Cross Santana跨界上市',
            content: ' 2016年9月2日，第十九届成都国际汽车展览会揭幕。上汽大众New Santana新桑塔纳、Cross Santana携手上市，与Gran Santana桑塔纳?浩纳共同组成阵容强大的新桑塔纳家族，开启家族化发展新篇章。',
            date: '2016年09月02日'
        },
        {
            img: '../images/20160928020033352.jpg',
            title: '出游好拍档 家人眼中的全新途安L',
            content: '炎热的高温逐渐被凉爽的秋风所吹散，越来越多的家庭选择驾车出游，享受金秋美好的家庭时光。其乐融融的全家之旅，离不开一辆称职的家用座驾，作为高级家用车的代表，全新途安L凭借灵活的空间设计、强劲的动力表现以及丰富实用的全能配置，满足不同家庭成员的用车需求，成为自驾出游的好拍档。',
            date: '2016年09月28日'
        },
        {
            img: '../images/20160923051038764.jpg',
            title: '节能环保典范 2017款凌渡倾心打造低碳生活',
            content: '在“低碳生活”理念愈加流行的今天，选择一款节能环保的座驾成为消费者的重要考量。自推向市场以来，上汽大众高颜值宽体轿车??Lamando凌渡在节能环保方面的实力获得了广泛认可，并荣膺中国生态汽车评价规程（C-ECAP）首批金牌认证。近日升级而来的2017款凌渡为汽车节能环保再树新典范，其凭借高效的动力总成、优',
            date: '2016年09月23日'
        },
        {
            img: '../images/20160902051349790.jpg',
            title: '新桑塔纳家族成都车展开启新篇章 New Santana新桑塔纳升级而来 Cross Santana跨界上市',
            content: ' 2016年9月2日，第十九届成都国际汽车展览会揭幕。上汽大众New Santana新桑塔纳、Cross Santana携手上市，与Gran Santana桑塔纳?浩纳共同组成阵容强大的新桑塔纳家族，开启家族化发展新篇章。',
            date: '2016年09月02日'
        },
        {
            img: '../images/20160928020033352.jpg',
            title: '出游好拍档 家人眼中的全新途安L',
            content: '炎热的高温逐渐被凉爽的秋风所吹散，越来越多的家庭选择驾车出游，享受金秋美好的家庭时光。其乐融融的全家之旅，离不开一辆称职的家用座驾，作为高级家用车的代表，全新途安L凭借灵活的空间设计、强劲的动力表现以及丰富实用的全能配置，满足不同家庭成员的用车需求，成为自驾出游的好拍档。',
            date: '2016年09月28日'
        },
        {
            img: '../images/20160923051038764.jpg',
            title: '节能环保典范 2017款凌渡倾心打造低碳生活',
            content: '在“低碳生活”理念愈加流行的今天，选择一款节能环保的座驾成为消费者的重要考量。自推向市场以来，上汽大众高颜值宽体轿车??Lamando凌渡在节能环保方面的实力获得了广泛认可，并荣膺中国生态汽车评价规程（C-ECAP）首批金牌认证。近日升级而来的2017款凌渡为汽车节能环保再树新典范，其凭借高效的动力总成、优',
            date: '2016年09月23日'
        },
        {
            img: '../images/20160902051349790.jpg',
            title: '新桑塔纳家族成都车展开启新篇章 New Santana新桑塔纳升级而来 Cross Santana跨界上市',
            content: ' 2016年9月2日，第十九届成都国际汽车展览会揭幕。上汽大众New Santana新桑塔纳、Cross Santana携手上市，与Gran Santana桑塔纳?浩纳共同组成阵容强大的新桑塔纳家族，开启家族化发展新篇章。',
            date: '2016年09月02日'
        },
        {
            img: '../images/20160928020033352.jpg',
            title: '出游好拍档 家人眼中的全新途安L',
            content: '炎热的高温逐渐被凉爽的秋风所吹散，越来越多的家庭选择驾车出游，享受金秋美好的家庭时光。其乐融融的全家之旅，离不开一辆称职的家用座驾，作为高级家用车的代表，全新途安L凭借灵活的空间设计、强劲的动力表现以及丰富实用的全能配置，满足不同家庭成员的用车需求，成为自驾出游的好拍档。',
            date: '2016年09月28日'
        },
        {
            img: '../images/20160923051038764.jpg',
            title: '节能环保典范 2017款凌渡倾心打造低碳生活',
            content: '在“低碳生活”理念愈加流行的今天，选择一款节能环保的座驾成为消费者的重要考量。自推向市场以来，上汽大众高颜值宽体轿车??Lamando凌渡在节能环保方面的实力获得了广泛认可，并荣膺中国生态汽车评价规程（C-ECAP）首批金牌认证。近日升级而来的2017款凌渡为汽车节能环保再树新典范，其凭借高效的动力总成、优',
            date: '2016年09月23日'
        },
        {
            img: '../images/20160902051349790.jpg',
            title: '新桑塔纳家族成都车展开启新篇章 New Santana新桑塔纳升级而来 Cross Santana跨界上市',
            content: ' 2016年9月2日，第十九届成都国际汽车展览会揭幕。上汽大众New Santana新桑塔纳、Cross Santana携手上市，与Gran Santana桑塔纳?浩纳共同组成阵容强大的新桑塔纳家族，开启家族化发展新篇章。',
            date: '2016年09月02日'
        }
    ];

    for (var i = 0; i < company_news_data.length; i++) {
        var item = company_news_data[i];
        var company_news = new News(item);
    }
})();