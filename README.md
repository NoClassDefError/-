# autoReport
我突然发现企业微信的页面是可以浏览器打开的，网址是https://app.ncepu.edu.cn/ncov/wap/default/index，
打开后发现原来每日上报的前端是学校自己用vue写的。（index.vue和recently.vue）

我于是根据前端代码写了一个自动每日上报的脚本。

班长再也不用担心我会忘掉了。。。为什么我没有早发现呀，这都快开学了(╯°Д°)╯ ┻━┻

**注意：** 第一天要手动登录上报一次，让浏览器记住cookie，下次能够自动登录，并且要赋予该网站获取位置信息的权限。
之后就可以自动上报了。

## 安装方法
  首先，将该脚本导入**浏览器油猴插件** （firefox搜greasemonkey；edge和chrome搜tampermonkey）
  
  再写一个bat文件如下，可以将它放到开机启动文件夹下，每天早晨开机时自动打开这个网址并执行脚本。成功完成任务。
  ```shangbao.bat
  @echo off
  start firefox.exe https://app.ncepu.edu.cn/ncov/wap/default/index
  exit
  ```
  当然你也可以将其改写为每天定时启动。
  
## 经验

我一开始试图直接调用网页里的vue方法：
```
vm.setSfzgn(1);
vm.getLocation();
setTimeout(function(){vm.save()},5000);
```
这些语句在浏览器中的控制台可以直接执行，但在油猴中运行会找不到vm对象，因此只能通过扫描标签的方法操作网页。
这种设计可能是出于浏览器安全策略，外部脚本不能访问网页内部脚本。
