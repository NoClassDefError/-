<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width initial-scale=1,user-scalable = 0">
    <title>基础信息填报</title>
    <link type="image/png"  href='https://img.ncepu.edu.cn/image/2/027fdd9a7ba63c7f9716761f04a1c83d.png' rel="shortcut icon">
    <link rel="stylesheet" href="/wap/css/common.css">
    <link href="/widgets/photoSwipe/css/photoswipe.css" rel="stylesheet">
    <link href="/widgets/photoSwipe/css/default-skin.css" rel="stylesheet">

    <!-- <style type="text/css">
        html{
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
            filter: gray;
        }
    </style> -->

    <link href="https://app.ncepu.edu.cn/wap/ncov/font/iconfont.css" rel="stylesheet"><link href="https://app.ncepu.edu.cn/wap/ncov/css/default.main.css" rel="stylesheet"><link href="https://app.ncepu.edu.cn/wap/ncov/css/default-skin.css" rel="stylesheet">        <style>
    .wapcf-btn, .wapat-btn {
        background: #4285f4;
    }
    .wapcf-btn-qx {
        background: #d0d0d0;
    }
</style>
    <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.4&key=729923f88542d91590470f613adb27b5&plugin=AMap.Driving"></script>
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?48b682d4885d22a90111e46b972e3268";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
    <script src="/thirdparty/nifty/js/jquery.min.js"></script>
    <script src="/thirdparty/vuejs/v2.1.10/vue.min.js"></script>
    <script src="/wap/js/common.js"></script>
    <script src="/js/face.js"></script>
    <script src="/widgets/photoSwipe/js/photoswipe.min.js"></script>
    <script src="/widgets/photoSwipe/js/photoswipe-ui-default.min.js"></script>
    <!--upload, datepicker, ueditor, baidutemplate, jquery-ui, -->
</head>

<body class="">

<div class="item-buydate form-detail2" style="display: block;">
    <div>
        <div class="form-detail form-detail2 item-buydate">
            <section>
                <div class="form-detail-img"><img src="https://img.ncepu.edu.cn/image/15/b7b2e18d728c272a319275e419347256.jpg" class="detail-img"></div>
                <div class="form-detail-desc">
                    <div>
                        <div><p>
                            温馨提示： 不外出、不聚集、不吃野味， 戴口罩、勤洗手、咳嗽有礼，开窗通风，发热就诊<br>Tips: In order to prevent and control the novel coronavirus (2019-nCoV) infection and protect your health, it is recommended that you should reduce outdoor activities as much as possible, avoid gathering and eating wild animals, wear masks outdoors, wash your hands frequently and properly, cover your coughs and sneezes with tissue, frequently open the windows of your house for better ventilation, and go to medical institution in a timely manner to seek medical assistance in case of suspicious symptoms.
                        </p></div>
                    </div>
                </div>
                <header class="tabbar">
                    <a href="/ncov/wap/default/index?from=history" class="tab">每日上报<br><em class="tab-title-eng">Daily Report</em></a>
                    <a href="javascript:;" class="tab active">基本信息<br><em class="tab-title-eng">Basic Info</em></a>
                </header>
                <div class="form-detail-desc-line"></div>
                <div class="form">
                    <ul>
                        <li>
                            <div class="text">
                                <span>姓名<em class="tab-title-desc">（Name）</em></span>
                                <input v-model="info.realname" readonly type="text" placeholder=""></div>
                        </li>
                        <li>
                            <div class="text">
                                <span>学工号<em class="tab-title-desc">（Student/Teacher ID）</em></span>
                                <input v-model="info.number" readonly type="text" placeholder=""></div>
                        </li>

                        <li>
                            <div class="text">
                                <span>手机号<em class="tab-title-desc">（Mobile phone number）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <input name="sjh" v-model="info.sjh" readonly type="text" placeholder=""></div>
                        </li>

                        <li>
                            <div class="radio"><span>是否京籍<em class="tab-title-desc">（Are you a Beijing citizen?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div>
                                    <div><span :class="{active: info.sfjj==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                    <div><span :class="{active: info.sfjj==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                </div>
                            </div>
                        </li>

                        <li v-if="info.sfjj == 1">
                            <div class="text">
                                <span>户籍地址<em class="tab-title-desc">（Household registration address）</em></span>
                                <input name="jg" v-model="info.jg" readonly type="text" placeholder=""></div>
                        </li>
                        <li>
                            <div class="text">
                                <span>身份证号/护照号码<em class="tab-title-desc">（ID No./Passport No.）</em></span>
                                <input name="sfzjh" v-model="info.sfzjh" readonly type="text" placeholder=""></div>
                        </li>
                        <li>
                            <div class="multiText"><span>居住住址<em class="tab-title-desc">（Residential address）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div><textarea v-model="info.jtzz" name="jtzz" rows="" cols="" placeholder="校内精确到宿舍/房间号，校外精确到小区（Detailed address including your dormitory / room number（living on campus) or community address ( living off campus)）"></textarea></div>
                            </div>
                            <!--                            <div class="text">-->
                            <!--                                <span>居住住址<em class="tab-title-desc">（Residential address）</em><i class="icon iconfont icon-shuoming"></i></span>-->
                            <!--                                <textarea name="jtzz" v-model="info.jtzz" readonly type="text" placeholder="校内精确到宿舍/房间号，校外精确到小区（Detailed address including your dormitory / room number（living on campus) or community address ( living off campus)）"></textarea></div>-->
                        </li>

                        <li>
                            <div class="radio"><span>现在地点<em class="tab-title-desc">（Current location）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div>
                                    <div><span :class="{active: info.sfzx==2}"><i></i></span> <span>一直在校<em class="tab-title-desc-little">（On campus）</em></span></div>
                                    <div><span :class="{active: info.sfzx==4}"><i></i></span> <span>在校居家观察<em class="tab-title-desc-little">（Staying home for a 14-day medical observation on campus）</em></span></div>
                                    <div><span :class="{active: info.sfzx==1}"><i></i></span>

                                        <span>在校集中隔离<em class="tab-title-desc-little">（Staying on campus in quarantine）</em></span>

                                    </div>
                                    <div><span :class="{active: info.sfzx==3}"><i></i></span> <span>在京不在校<em class="tab-title-desc-little">（Living off-campus in Beijing）</em></span></div>
                                    <div><span :class="{active: info.sfzx==0}"><i></i></span> <span>离京<em class="tab-title-desc-little">（Outside Beijing）</em></span></div>
                                </div>
                            </div>
                        </li>
                        <template v-if="info.sfzx==1 || info.sfzx == 3 || info.sfzx == 4">
                            <li>
                                <div class="radio"><span>14日内是否离过京<em class="tab-title-desc">（Have you ever left Beijing in the past 14 days?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                    <div>
                                        <div><span :class="{active: info.sflgj==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                        <div><span :class="{active: info.sflgj==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                    </div>
                                </div>
                            </li>
                            <template v-if="info.sflgj==1">
                                <li>
                                    <div class="text">
                                        <span>离京日期<em class="tab-title-desc">（Date of departure from Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <input name="ljrq" v-model="info.ljrq" readonly type="date" placeholder=""></div>
                                </li>
                                <li>
                                    <div name="ljjtgj" class="radio"><span>离京交通工具<em class="tab-title-desc">（Type of transportation used when you left Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <div>
                                            <div><span :class="{active: info.ljjtgj=='飞机'}"><i></i></span> <span>飞机<em class="tab-title-desc-little">（Flight）</em></span></div>
                                            <div><span :class="{active: info.ljjtgj=='火车'}"><i></i></span> <span>火车<em class="tab-title-desc-little">（Train）</em></span></div>
                                            <div><span :class="{active: info.ljjtgj=='公共汽车'}"><i></i></span> <span>公共汽车<em class="tab-title-desc-little">（Bus）</em></span></div>
                                            <div><span :class="{active: info.ljjtgj=='自驾'}"><i></i></span> <span>自驾<em class="tab-title-desc-little">（Self-driving）</em></span></div>
                                        </div>
                                    </div>
                                </li>
                                <li v-show="info.ljjtgj!='自驾'">
                                    <div class="text">
                                        <span>离京航班班次/车次<em class="tab-title-desc">（Flight/Train number of departure from Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <input name="ljhbcc" v-model="info.ljhbcc" readonly type="text" placeholder=""></div>
                                </li>
                                <li>
                                    <div class="text">
                                        <span>返京日期<em class="tab-title-desc">（Date of return to Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <input name="fjrq" v-model="info.fjrq" readonly type="date" placeholder=""></div>
                                </li>
                                <li>
                                    <div name="fjjtgj" class="radio"><span>返京交通工具<em class="tab-title-desc">（Type of transportation used when you returned to Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <div>
                                            <div><span :class="{active: info.fjjtgj=='飞机'}"><i></i></span> <span>飞机<em class="tab-title-desc-little">（Flight）</em></span></div>
                                            <div><span :class="{active: info.fjjtgj=='火车'}"><i></i></span> <span>火车<em class="tab-title-desc-little">（Train）</em></span></div>
                                            <div><span :class="{active: info.fjjtgj=='公共汽车'}"><i></i></span> <span>公共汽车<em class="tab-title-desc-little">（Bus）</em></span></div>
                                            <div><span :class="{active: info.fjjtgj=='自驾'}"><i></i></span> <span>自驾<em class="tab-title-desc-little">（Self-driving）</em></span></div>
                                        </div>
                                    </div>
                                </li>
                                <li v-show="info.fjjtgj!='自驾'">
                                    <div class="text">
                                        <span>返京航班班次/车次<em class="tab-title-desc">（Flight/Train number to Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <input name="fjhbcc" v-model="info.fjhbcc" readonly type="text" placeholder=""></div>
                                </li>
                                <li>
                                    <div class="radio"><span>14日内是否在武汉停留（含经停和转车）？<em class="tab-title-desc">（Have you been to Wuhan in the past 14 days (including a stop or a transfer in Wuhan train station or airport)?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <div>
                                            <div><span :class="{active: info.sftjwh==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                            <div><span :class="{active: info.sftjwh==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                        </div>
                                    </div>
                                </li>

                                <li v-if="info.sftjwh == 1">
                                    <div class="text">
                                        <span>最近一次抵达武汉时间<em class="tab-title-desc">（Date of your latest arrival in Wuhan）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <input name="tjwhrq" v-model="info.tjwhrq" readonly type="date" placeholder=""></div>
                                </li>

                                <li>
                                    <div class="radio"><span>14日内是否在湖北其他地区（除武汉）停留（含经停和转车）？<em class="tab-title-desc">（Have you been to other areas in Hubei province (except Wuhan) in the past 14 days (including a stop or a transfer in train station or airport)?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <div>
                                            <div><span :class="{active: info.sftjhb==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                            <div><span :class="{active: info.sftjhb==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                        </div>
                                    </div>
                                </li>
                                <template v-if="info.sftjhb == 1">
                                    <li>
                                        <div class="text">
                                            <span>停留地点<em class="tab-title-desc">（Destination of your stop）</em><i class="icon iconfont icon-shuoming"></i></span>
                                            <input name="tjhbdq" readonly v-model="info.tjhbdq" type="text" placeholder=""></div>
                                    </li>
                                    <li>
                                        <div class="text">
                                            <span>抵达停留地时间<em class="tab-title-desc">（Latest date of your stop）</em><i class="icon iconfont icon-shuoming"></i></span>
                                            <input name="tjhbrq" readonly v-model="info.tjhbrq" type="date" placeholder=""></div>
                                    </li>
                                </template>
                                <li>
                                    <div class="text">
                                        <span>其他停留地点<em class="tab-title-desc">（Other places you have been to in Hubei province）</em></span>
                                        <input v-model="info.qtljdd" readonly type="text" placeholder=""></div>
                                </li>
                            </template>

                        </template>
                        <template v-if="info.sfzx==0">
                            <li>
                                <div class="text">
                                    <span>离京日期<em class="tab-title-desc">（Date of departure from Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                    <input name="fxrq" v-model="info.fxrq" readonly type="date" placeholder=""></div>
                            </li>

                            <li>
                                <div name="fxjtgj" class="radio"><span>离京交通工具<em class="tab-title-desc">（Type of transportation used when you left Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                    <div>
                                        <div><span :class="{active: info.fxjtgj=='飞机'}"><i></i></span> <span>飞机<em class="tab-title-desc-little">（Flight）</em></span></div>
                                        <div><span :class="{active: info.fxjtgj=='火车'}"><i></i></span> <span>火车<em class="tab-title-desc-little">（Train）</em></span></div>
                                        <div><span :class="{active: info.fxjtgj=='公共汽车'}"><i></i></span> <span>公共汽车<em class="tab-title-desc-little">（Bus）</em></span></div>
                                        <div><span :class="{active: info.fxjtgj=='自驾'}"><i></i></span> <span>自驾<em class="tab-title-desc-little">（Self-driving）</em></span></div>
                                    </div>
                                </div>
                            </li>
                            <li v-show="info.fxjtgj!='自驾'">
                                <div class="text">
                                    <span>离京航班班次/车次<em class="tab-title-desc">（Flight/Train number of departure from Beijing）</em><i class="icon iconfont icon-shuoming"></i></span>
                                    <input name="fxhbcc" v-model="info.fxhbcc" readonly type="text" placeholder=""></div>
                            </li>
                            <li>
                                <div class="radio"><span>14日内是否在武汉停留（含经停和转车）？<em class="tab-title-desc">（Have you been to Wuhan in the past 14 days (including a stop or a transfer in Wuhan train station or airport)?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                    <div>
                                        <div><span :class="{active: info.fxsftjwh==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                        <div><span :class="{active: info.fxsftjwh==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                    </div>
                                </div>
                            </li>
                            <li v-if="info.fxsftjwh == 1">
                                <div class="text">
                                    <span>最近一次抵达武汉时间<em class="tab-title-desc">（Date of your latest arrival in Wuhan）</em><i class="icon iconfont icon-shuoming"></i></span>
                                    <input name="fxtjwhrq" v-model="info.fxtjwhrq" readonly type="date" placeholder=""></div>
                            </li>
                            <li>
                                <div class="radio"><span>14日内是否在湖北其他地区（除武汉）停留（含经停和转车）？<em class="tab-title-desc">（Have you been to other areas in Hubei province (except Wuhan) in the past 14 days (include a stop or a transfer in train station or airport)?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                    <div>
                                        <div><span :class="{active: info.fxsftjhb==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                        <div><span :class="{active: info.fxsftjhb==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                    </div>
                                </div>
                            </li>
                            <template v-if="info.fxsftjhb == 1">
                                <li>
                                    <div class="text">
                                        <span>停留地点<em class="tab-title-desc">（Destination of your stop）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <input name="fxtjhbdq" v-model="info.fxtjhbdq" readonly type="text" placeholder=""></div>
                                </li>
                                <li>
                                    <div class="text">
                                        <span>抵达停留地时间<em class="tab-title-desc">（Latest date of your stop）</em><i class="icon iconfont icon-shuoming"></i></span>
                                        <input name="fxtjhbrq" v-model="info.fxtjhbrq" readonly type="date" placeholder=""></div>
                                </li>
                            </template>

                            <li>
                                <div class="text">
                                    <span>计划返京时间<em class="tab-title-desc">（Scheduled date of return to Beijing）</em></span>
                                    <input v-model="info.jhfjrq" name="jhfjrq" type="date" readonly placeholder=""></div>
                            </li>
                            <li>
                                <div class="radio"><span>计划返京交通工具<em class="tab-title-desc">（Scheduled type of transportation to Beijing）</em><i v-show="false" class="icon iconfont icon-shuoming"></i></span>
                                    <div>
                                        <div><span :class="{active: info.jhfjjtgj=='飞机'}"><i></i></span> <span>飞机<em class="tab-title-desc-little">（Flight）</em></span></div>
                                        <div><span :class="{active: info.jhfjjtgj=='火车'}"><i></i></span> <span>火车<em class="tab-title-desc-little">（Train）</em></span></div>
                                        <div><span :class="{active: info.jhfjjtgj=='公共汽车'}"><i></i></span> <span>公共汽车<em class="tab-title-desc-little">（Bus）</em></span></div>
                                        <div><span :class="{active: info.jhfjjtgj=='自驾'}"><i></i></span> <span>自驾<em class="tab-title-desc-little">（Self-driving）</em></span></div>
                                    </div>
                                </div>
                            </li>
                            <li v-show="info.jhfjjtgj!='自驾'">
                                <div class="text">
                                    <span>计划返京航班班次/车次<em class="tab-title-desc">（Scheduled flight/train number to Beijing）</em><i v-show="false" class="icon iconfont icon-shuoming"></i></span>
                                    <input v-model="info.jhfjhbcc" type="text" readonly placeholder=""></div>
                            </li>

                        </template>

                        <li>
                            <div class="radio"><span>14日内是否存在发热情况（高于37.2℃）<em class="tab-title-desc">（Have you had a fever (your body temperature is higher than 37.2℃) in the past 14 days?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div>
                                    <div><span :class="{active: info.sffr==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                    <div><span :class="{active: info.sffr==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="radio"><span>14日内是否与往来武汉人员接触<em class="tab-title-desc">（Have you contacted any people from Wuhan in the past 14 days?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div>
                                    <div><span :class="{active: info.sfjcwhqy==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                    <div><span :class="{active: info.sfjcwhqy==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                </div>
                            </div>
                        </li>
                        <li v-if="info.sfjcwhqy == 1">
                            <div class="text">
                                <span>接触的最近时间<em class="tab-title-desc">（Latest date of your contact with people from Wuhan）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <input name="jcwhqyrq" v-model="info.jcwhqyrq" readonly type="date" placeholder=""></div>
                        </li>
                        <li>
                            <div class="radio"><span>14日内是否与往来湖北其他地区（除武汉）的人员接触<em class="tab-title-desc">（Have you contacted any people who have been to other areas in Hubei province (except Wuhan) in the past 14 days?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div>
                                    <div><span :class="{active: info.sfjchbqy==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                    <div><span :class="{active: info.sfjchbqy==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                </div>
                            </div>
                        </li>
                        <li v-if="info.sfjchbqy == 1">
                            <div class="text">
                                <span>接触的最近时间<em class="tab-title-desc">（Latest date of your contact with people from Hubei province (except Wuhan)）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <input name="jchbqyrq" v-model="info.jchbqyrq" readonly type="date" placeholder=""></div>
                        </li>
                        <li>
                            <div class="radio"><span>14日内是否接触过感染者或疑似患者<em class="tab-title-desc">（Have you contacted any suspected or infected people in the past 14 days?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div>
                                    <div><span :class="{active: info.sfjcgrz==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                    <div><span :class="{active: info.sfjcgrz==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                </div>
                            </div>
                        </li>
                        <li v-if="info.sfjcgrz == 1">
                            <div class="text">
                                <span>接触的最近时间<em class="tab-title-desc">（Latest date of your contact with those people above）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <input name="jcgrzrq" v-model="info.jcgrzrq" readonly type="date" placeholder=""></div>
                        </li>

                        <li>
                            <div class="radio"><span>是否确认感染<em class="tab-title-desc">（Are you diagnosed with the novel coronavirus?）</em><i class="icon iconfont icon-shuoming"></i></span>
                                <div>
                                    <div><span :class="{active: info.sfgr==1}"><i></i></span> <span>是<em class="tab-title-desc-little">（Yes）</em></span></div>
                                    <div><span :class="{active: info.sfgr==0}"><i></i></span> <span>否<em class="tab-title-desc-little">（No）</em></span></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="list-box">
                    <div class="footers">
                        <a style="background: #d0d0d0">您已提交过信息（You have already submitted）</a>
                    </div>
                </div>
            </section>

        </div>
    </div>
</div>




<script type="text/javascript">
    var def = {"id":"11477","uid":"10310","bj":"\u7535\u6c141701","xb":1,"sjh":"18810380138","syd":"","jtzz":"\u5b89\u5fbd\u7701\u961c\u9633\u5e02\u988d\u5dde\u533a\u9896\u6cb3\u897f\u8def\u6e05\u6ce2\u82d110\u5e62402\u5ba4","sfzx":"0","sflgj":"0","ljrq":"","ljjtgj":"","ljhbcc":"","fjrq":"","fjjtgj":"","fjhbcc":"","sftjwh":"0","sftjhb":"0","qtljdd":"","fxrq":"2020-01-10","fxjtgj":"\u706b\u8f66","fxhbcc":"G1577","fxsftjwh":"0","fxsftjhb":"0","jhfjrq":"","jhfjjtgj":"","jhfjhbcc":"","jhfjsftjwh":"0","jhfjsftjhb":"0","sfyljjh":"0","jhljrq":"","jhljjtgj":"","jhljhbcc":"","jhfjsj":"","sfgr":"0","sfjcgrz":"0","sffr":"0","jcjssfgr":"0","sfjchbqy":"0","created":"1582715566","tjwhrq":"","tjhbrq":"","tjhbdq":"","fxtjwhrq":"","fxtjhbrq":"","fxtjhbdq":"","jhfjtjwhrq":"","jhfjtjhbrq":"","jhfjtjhbdq":"","jchbqyrq":"","sfjcwhqy":"","jcwhqyrq":"","jcgrzrq":"","created_uid":"0","jtszd":{"myprovice":"","mycity":"","myarea":"","xxdz":"","sfgn":"","gwdz":""},"dqszd":"1","dqszd_info":{"myprovice":"","mycity":"","myarea":"","xxdz":"","xq":"","ss":"","qs":"","cw":"","sfgn":"","gwdz":""},"lhtlcs":[],"dqjtxx":"","dqjtxx_info":"","dqjcxx":"","dqjcxx_info":"","jcgrhz":"0","jcyshz":"0","sfczfrqk":"0","sfczhxdgr":"0","sfysfy":"0","sfjjgl":"0","sfjj":"0","jg":"","sfzjh":"341003199908170034","number":"120171020201","realname":"\u845b\u7ff0\u81e3"};
    var vm = new Vue({
        el: '.form-detail2',
        data: {
            info: $.extend({sfjj: 1, jg: '', sfzjh: ''} ,def),
            tipMsg: '',
            ajaxLock: false,
            tipMehtod: function () {

            }
        },
        methods: {
        }
    });
</script>
<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>

    <div class="pswp__scroll-wrap">

        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close"></button>

                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip">

                </div>
            </div>

            <button class="pswp__button pswp__button--arrow--left"></button>
            <button class="pswp__button pswp__button--arrow--right"></button>
            <div class="pswp__caption">
                <div class="pswp__caption__center">
                </div>
            </div>
        </div>

    </div>

</div>
</body>
</html>
