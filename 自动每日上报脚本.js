(function () {
    if (window.location == "https://app.ncepu.edu.cn/ncov/wap/default/index") {
        console.log("插件执行");
        // vm.setSfzgn(1);
        // vm.getLocation();
        // setTimeout(function(){vm.save()},5000);
        var spons = document.getElementsByTagName("span");
        for (var i = 0; i < spons.length; i++) {
            if (spons[i].innerText.indexOf("中国大陆") != -1) {
                console.log(spons[i]);
                spons[i].click();
                break;
            }
        }
        document.getElementsByName("area")[0].click();
        setTimeout(function () {
            var spons = document.getElementsByTagName("a");
            for (var i = 0; i < spons.length; i++) {
                if (spons[i].innerText.indexOf("提交信息") != -1) {
                    console.log(spons[i]);
                    spons[i].click();
                    break;
                }
            }
            spons = document.getElementsByTagName("div");
            for (i = 0; i < spons.length; i++) {
                if (spons[i].innerText.indexOf("确认") != -1&& spons[i].childElementCount==0) {
                    console.log(spons[i]);
                    spons[i].click();
                    break;
                }
            }
            window.alert("上报完成！");
        }, 5000);
    }
})();

// 我突然发现企业微信的页面是可以浏览器打开的，网址是https://app.ncepu.edu.cn/ncov/wap/default/index，
// 打开后发现原来每日上报的前端是学校自己用vue写的。我根据前端代码写了一个自动每日上报的脚本。
// 第一次要手动登录上报一次，让浏览器记住cookie，下次能够自动登录，并且要赋予该网站获取位置信息的权限
// 首先，将该脚本导入浏览器油猴插件，
// 再写一个开机启动的bat文件如下，每天开机时自动打开这个网址并执行脚本。成功完成任务。

//@echo off
//start firefox.exe https://app.ncepu.edu.cn/ncov/wap/default/index
//exit

// 班长再也不用担心我会忘掉了。。。为什么我没有早发现呀，这都快开学了