import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import AddOrder from '@/components/AddOrder'
import OpList from '@/components/OpList'
import OpList1 from '@/components/OpList1'
import Look from '@/components/Look'
import ConfirmValuation from '@/components/ConfirmValuation'
import Form from '@/components/Form'
import ConfirmFirstCheck from '@/components/ConfirmFirstCheck'
import SetUpProject from '@/components/SetUpProject'
import ConfirmMatch from '@/components/ConfirmMatch'
import AddData from '@/components/AddData'
import ConfirmLastCheck from '@/components/ConfirmLastCheck'
import PrintDeal from '@/components/PrintDeal'
import SendDeal from '@/components/SendDeal'


Vue.use(Router)

export default new Router({
	routes: [
		// {
		//   path: '/',
		//   name: 'HelloWorld',
		//   component: HelloWorld
		// },
		{
			// 登录
			path: '/',
			name: 'login',
			component: Login
		},
		{
			// 首页
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			// 预报单
			path: '/addOrder',
			name: 'addOrder',
			component: AddOrder
		},
		{
			// 操作列表
			path: '/opList/:id/:hid',
			name: 'opList',
			component: OpList
		},
		{
			// 操作列表1
			path: '/opList1/:id/:hid',
			name: 'opList1',
			component: OpList1
		},
		{
			// 查看所有资料
			path: '/look/:id/:hid',
			name: 'look',
			component: Look
		},
		{
			// 估值确认
			path: '/confirmValuation/:id/:hid/:oprid',
			name: 'confirmValuation',
			component: ConfirmValuation
		},
		{
			// 正式报单
			path: '/form/:id/:hid/:oprid',
			name: 'form',
			component: Form
		},
		{
			// 初审确认
			path: '/confirmFirstCheck/:id/:hid/:oprid',
			name: 'confirmFirstCheck',
			component: ConfirmFirstCheck
		},
		{
			// 立项
			path: '/setUpProject/:id/:hid/:oprid',
			name: 'setUpProject',
			component: SetUpProject
		},
		{
			// 产品匹配确认
			path: '/confirmMatch/:id/:hid/:oprid',
			name: 'confirmMatch',
			component: ConfirmMatch
		},
		{
			// 补充资料
			path: '/addData/:id/:hid',
			name: 'addData',
			component: AddData
		},
		{
			// 产品终审结果确认
			path: '/confirmLastCheck/:id/:hid/:oprid',
			name: 'confirmLastCheck',
			component: ConfirmLastCheck
		},
		// {
		// 	// 打印合同
		// 	path: '/printDeal/:id/:hid/:oprid',
		// 	name: 'printDeal',
		// 	component: PrintDeal
		// },
		{
			// 提交收款凭证
			path: '/sendDeal/:id/:hid/:oprid',
			name: 'sendDeal',
			component: SendDeal
		},
	]
})
