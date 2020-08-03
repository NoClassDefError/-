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
            spons = document.getElementsByClassName("wapcf-btn wapcf-btn-ok");
            for (i = 0; i < spons.length; i++) {
                if (spons[i].innerText.indexOf("确认") != -1 && spons[i].innerText.indexOf("Submit") != -1) {
                    console.log(spons[i]);
                    spons[i].click();
                    break;
                }
            }
            window.alert("上报完成！");
        }, 5000);
    }
})();