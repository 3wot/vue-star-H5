# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

沟通记录：

--------------------------

预报单页面：提交-》保存，完成-》提交
保存和提交按钮风格进行设计
估值确认页面有两个按钮，确认和拒绝，有备注输入框
初审确认页面估值结果改成初审报告
产品匹配确认页面估值结果改成产品匹配结果
补充资料只有一个提交按钮，补充资料出现的选项由客服人员后台选择控制
产品终审页面批贷函只展示，提交完成按钮改成确认和拒绝
操作列表页面将查看资料和补充资料全局按钮放在页面底部fixed
在产品方放款页面后加入提交收款凭证页面（销售操作），产品放款页面现场照片删除

==前端
预报单只有一个完成按钮
==后端

当前操作null
房屋估值确认页面参数HouseValuationConfirmDateTime-》HouseValuationDateTime
房屋估值页面三个接口，上传估值报告和完成估值操作合并成一个接口
pc端联系产品方补充资料按钮点击之后页面：
接口1：获取所有所有补充资料备选项
接口2：提交勾选，备注
接口3：是否可以点击补充资料


--------------------------

1.销售是否可以一直点击进入补充资料页面
2.获取所有的操作列表，接口不见了？是不要了吗？
3.当前用户的角色，登录接口需要返回，方便对操作列表的能否点击控制

