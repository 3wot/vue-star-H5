
// 域名
const HOST = 'http://aaa.com'

// 相对地址
const urls = {
	'login' : '/login'
}

// 外部方法
const URLS = (key) => {
	if (key && urls[key]) {
		return HOST + urls[key];
	} else {
		console.log("URLS没有当前地址")
		return ''
	}
}
export default URLS