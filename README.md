# 百度地图URI封装

    由于自己数次用到百度地图,觉得百度地图做得还是不错的,就对百度地图提供的免费、无需申请ak的URI API进行了封装.由于是个人项目可能存在缺陷,希望大家多多指导

## 封装接口调用方式

    接口封装成一个名为baiduMapUri的函数,里面有三个参数,第一个是服务的名字serviceType(有别于百度地图的service,类型为字符串类型),第二个是服务所需要的必要参数paras(类型为对象),第三个是回调函数.

    `baiduMapUri(serviceType,paras,callback)`

    `serviceType: String;`

        1.'openBaidu' ---- 打开百度地图页面
        2.'marker' ------- 地图标点
        3.'geocoder' ----- 地址解析
        4.'geodecoder' --- 地址逆解析
        5.'search' ------- 地点搜索
        6.'line' --------- 公交地铁线路查询

    `paras: Object;`

        1.'openBaidu':
            不用传paras;

        2.'marker':
             paras {
                location: '精度,维度',                 //String
                title: '标题',                        //String
                content: '内容',                      //String
                appName: '你公司的名字|你应用的名字'     //String
             }

        3.'gecoder':
            paras {
                address: '地址',                      //String
                appName: '你公司的名字|你应用的名字'     //String
            }

        4.'geodecoder':
            paras {
                location: '精度,维度',                 //String
                appName: '你公司的名字|你应用的名字'     //String
            }

        5.'search':
            paras {
                query: '查询关键字',                    //String
                region: '地区或县城名字',               //String
                location: '精度,维度',                 //String
                appName: '你公司的名字|你应用的名字'     //String
            }

        6.'line':
            paras {
                region: '地区或县城名字',               //String
                name: '地铁线路名称或者公交线路号码',     //String
                appName: '你公司的名字|你应用的名字'     //String
            }

    `回调函数`

        执行完成后的回调函数

## 调用例子

    1.openbaiduMapUri
        baiduMapUri('openBaidu');

    2.marker地图标点
        baiduMapUri('marker', {
            location: '39.990912172420714,116.32715863448607',
            title: '这里填标题',
            content: '这里填内容',
            appName: 'yourCompanyName|yourAppName'
        });

    3.gecoder地理定位调用
        baiduMapUri('geocoder',{
            address: '北京海淀区',
            appName: 'yourCompanyName|yourAppName'
        });

    4.geodecoder地址逆解析
        baiduMapUri('geodecoder', {
            location: '39.990912172420714,116.32715863448607',
            appName: 'yourCompanyName|yourAppName'
        });

    5.place/search地点搜索
        baiduMapUri('search', {
            query: '优衣库',
            region: '北京',
            location: '39.990912172420714,116.32715863448607',
            appName: 'yourCompanyName|yourAppName'
        });

    6.line公交地铁线路查询
        baiduMapUri('line', {
            region: '深圳',
            name: '320',
            appName: 'yourCompanyName|yourAppName'
        });

## 插件说明

    由于百度提供的URI API是通过的必须是HTML,若需要返回JSON格式或者XML格式的数据则需要去百度申请ak,并调用Web API.
