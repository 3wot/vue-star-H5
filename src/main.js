// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GETJSON from './router/service'
import JCACHE from './router/cache'
import '@/index.css'
// 引入UI
import YDUI from 'vue-ydui' /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'
Vue.use(YDUI)

// 全局变量
window.USER_INFO = {
    uid : '',
    token: '',
    OperatorRoleId: '',
    OperatorRoleName: '',
}
window.UPLOAD_NUM = 0

Vue.prototype.pp = GETJSON
Vue.prototype.JCACHE = JCACHE

// Vue.prototype.test = function() {
// 	if (USER_INFO.uid && USER_INFO.token) {

// 	} else {
// 		this.$router.push({ name : 'login' })
// 		this.$dialog.toast({
// 			mes: "您还没有登录哦",
// 			icon: 'none',
// 			timeout: 3000,
// 		})
// 	}
// }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})

