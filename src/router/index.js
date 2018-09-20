import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import AddOrder from '@/components/AddOrder'
import OpList from '@/components/OpList'
import Look from '@/components/Look'

Vue.use(Router)

export default new Router({
	routes: [
		// {
		//   path: '/',
		//   name: 'HelloWorld',
		//   component: HelloWorld
		// },
		{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			path: '/addOrder',
			name: 'addOrder',
			component: AddOrder
		},
		{
			path: '/opList',
			name: 'opList',
			component: OpList
		},
		{
			path: '/look',
			name: 'look',
			component: Look
		},
	]
})
