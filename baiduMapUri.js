(function(window){

    'use strict';

    //openBaidu打开百度地图页面,marker地图标点,geocoder地址解析,geodecoder地址逆解析,place/search地点搜索,line公交地铁线路查询
    function baiduMapUri(serviceType,paras,callback) {

        //定义一些变量
        var hostname = 'http://api.map.baidu.com/';
        var temp = {};
        var query = '';
        var service = '';
        var postUrl = '';

        //根据传入的服务选择相应的服务
        switch(serviceType) {

            case 'openBaidu':
                service = '';
                //根据是否为使用手机返回相应的url
                var openUrl = isMobile()?'http://map.baidu.com/mobile/':'http://map.baidu.com/';
                //在新的窗口打开百度地图页面
                window.open(openUrl);
                break;

            case 'marker':
                service = 'marker';
                temp = {
                    location: paras.location,//必填,地图经纬度
                    title: paras.title,//必填,标注点标题
                    content: paras.content,//必填,标注点内容
                    output: 'html',//必填
                    src: paras.appName//必填,appName
                };
                break;

            case 'geocoder':
                service = 'geocoder';
                temp = {
                    address: paras.address,//必填,地址名称
                    output: 'html',//必填
                    src: paras.appName //必填,appName
                };
                break;

            case 'geodecoder':
                service = 'geocoder';
                temp = {
                    location: paras.location,//必填,地图经纬度
                    output: 'html',//必填
                    src: paras.appName//必填,appName
                };
                break;

            case 'search':
                service = 'place/search';
                temp = {
                    query: paras.query,//必填,关键词
                    region: paras.region,//必填,城市名或县城名字
                    location: paras.location,//必填,经纬度
                    radius: '1000',
                    output: 'html',//必填
                    src: paras.appName//必填,appName
                };
                break;

            case 'line':
                service = 'line';
                temp = {
                    region: paras.region,//必填,城市名或县城名称
                    name: paras.name,//必填,线路名称
                    output: 'html',//必填
                    src: paras.appName//必填,appName
                };
                break;
            default:
                window.alert('请确保serviceType正确');
                break;
        }

        //如果有参数的话
        if (service!='') {
            //处理temp字符拼接
            for (var i in temp) {
                query += i +'=' + temp[i] + '&';
            }
            //删除末尾的&
            query = query.substring(0, query.length - 1);

            //拼接URL并打开
            postUrl = hostname + service + '?' + query;
            window.open(postUrl);
        }

        if(callback) {
            callback();
        }



        //清空service,query,temp内容和postUrl
        service = '';
        query = '';
        temp = {};
        postUrl = '';



        //判断是否为手机函数
        function isMobile() {
            //获取浏览器的代理名称
            var ua = navigator.userAgent;
            //正则匹配ua信息,判断用户使用的设备
            var      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
                isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
                isAndroid = ua.match(/(Android)\s+([\d.]+)/),
                isMobile = isIphone || isAndroid;
            //如果用户使用的设备判断为手机则函数返回true,否则返回false
            if(isMobile) {
                return true;
            } else {
                return false;
            }
        }


    }

    window.baiduMapUri = baiduMapUri;

})(window);