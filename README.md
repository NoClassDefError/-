# autoReport


我突然发现企业微信的页面是可以浏览器打开的，网址是https://app.ncepu.edu.cn/ncov/wap/default/index，
打开后发现原来每日上报的前端是学校自己用vue写的。我根据前端代码写了一个自动每日上报的脚本。

注意：第一天要手动登录上报一次，让浏览器记住cookie，下次能够自动登录，并且要赋予该网站获取位置信息的权限。

## 安装方法
  首先，将该脚本导入浏览器油猴插件（火狐搜greasymonkey,edge和chrome搜tampermonkey），
  再写一个开机启动的bat文件如下，每天开机时自动打开这个网址并执行脚本。成功完成任务。
  
