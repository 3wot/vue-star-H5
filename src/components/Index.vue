<template>
	<div class="index">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="销售" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<!-- <yd-icon name="verifycode" slot="right">添加</yd-icon> -->
				<span slot="left" @click="gotoAdd">添加</span>
				<span slot="right" @click="changeType(type)">刷新</span>
			</yd-navbar>

		 	<div slot="top" style="height: 1rem;">
	 		 	<span class="line" :class="{ active: type == 0 }" @click="clickType(0)">进行中的报单</span>
	 		 	<span class="line" :class="{ active: type == 3 }" @click="clickType(3)">历史报单</span>
		 	</div>

		 	<!-- 底部 -->
			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>
        	 		<yd-button class="bottom-btn" :disabled="PageIndex == 1" size="large" @click.native="prevPage">上一页</yd-button>
        	 		<yd-button class="bottom-btn span-btn" disabled size="large">第 {{PageIndex}} 页</yd-button>
        	 		<yd-button class="bottom-btn" :disabled="nextBtnDisable" size="large" @click.native="nextPage">下一页</yd-button>
		        </yd-flexbox>
			</div>

			<div @click="gotoOpList(index)" v-for="(item,index) in orderList" :key="index" class="order-item">
				<yd-icon class="order-item-icon" name="ucenter" color="#ffffff" size=".4rem"></yd-icon>
				<!-- 姓名 -->
				<span v-if="type==0 && item.NeedToOperate" class="need-badge-2"></span>
				<span class="order-item-name">{{item.showTitle}}</span>
				
				<yd-navbar-next-icon class="order-item-next" color="#ffffff"></yd-navbar-next-icon>
			</div>
			
	    </yd-layout>



	</div>
</template>

<script>
// import Router from 'vue-router'
import URLS from '../router/link'
const PAGE_ROWS = 20 // 每页20条

export default {
	components:{
	// Button,Field
	},
	name: 'Index',
	data () {
		return {
			// 0，正在进行中，1，正常结案，2，中途结案 3，历史报单， 不传所有的
			type: 0,
			// 订单列表
			orderList: [
				// {
				// 	"Id" : "111",
				// 	"BorrowerName" : "张三", 
				// 	"BorrowerMobile" : "15111112222", 
				// 	"BorrowerIDNO" : "XXXXXXXXXX", 
				// 	"CreationDateTime" : "2018-08-01 18:00:00", 
				// 	"Status" : 0, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
				// 	"CurrentOperation" : "估值"
				// },
				// {
				// 	"Id" : "22", 
				// 	"BorrowerName" : "", 
				// 	"BorrowerMobile" : "1231241451", 
				// 	"BorrowerIDNO" : "", 
				// 	"CreationDateTime" : "", 
				// 	"Status" : "2", 
				// 	"CurrentOperation" : "估值"
				// },	
			],
			PageIndex: 1,
		}
	},
	computed:{
		nextBtnDisable: function(){
			const len = this.orderList.length
			if (len < PAGE_ROWS) {
				return true
			} else {
				return false
			}
		},
	},
	mounted () {
		// this.testLogin()
		this.changeType(0)
	},
	methods:{

		// 点击进行中或者历史
		clickType(type) {
			this.type = type
			this.PageIndex = 1
			this.changeType(type)
		},

		// 发送请求
		changeType(type) {
			this.type = type
			const PageIndex = this.PageIndex
			const PageRows = PAGE_ROWS
			const param = {
				order_type: type,
				PageIndex,
				PageRows,
			}
			this.pp('OrderList', param, res => {
				// console.log(res)
				if (res.ret) {
					this.orderList = this.format(res.data)
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 3000,
					})
				}
			})
		},

		// 格式化
		format (arr) {
			if (arr) {
				arr.map(item => {
	                const str = item.CurrentOperation ? item.CurrentOperation : item.CreationDateTime
	                if (item.BorrowerName) {
	                	item.showTitle = item.BorrowerName + " / " + str
	                } else {
	                	item.showTitle = str
	                }
				})
				return arr
			}
		},
		
		// 新增
		gotoAdd() {
			// 调到预报单
			window.sessionStorage.setItem('OrderId','null')
			this.$router.push({ name : 'addOrder' })
		},

		// 操作列表页面
		gotoOpList (idx) {
			if (this.orderList && idx < this.orderList.length) {
				const order = this.orderList[idx]
				const id = order.OrderId
				const hid = order.HouseId
				window.sessionStorage.setItem('OrderId',id)
				if (this.type == 0) {
					this.$router.push({ name : 'opList', params: { id, hid }})	
				} else {
					this.$router.push({ name : 'opList1', params: { id, hid }})
				}
				
			}
		},

		// 检测登录
		testLogin () {
			if (USER_INFO.uid && USER_INFO.token) {

			} else {
				this.$router.push({ name : 'login' })
				this.$dialog.toast({
					mes: "您还没有登录哦",
					icon: 'none',
					timeout: 3000,
				})
			}
		},

		// 上一页
		prevPage() {
			const num = this.PageIndex
			if (num > 1) {
				this.PageIndex = num - 1
			} else {
				this.PageIndex = 1
			}
			const type = this.type
			this.changeType(type)
		},

		// 下一页
		nextPage() {
			const num = this.PageIndex
			this.PageIndex = num + 1
			const type = this.type
			this.changeType(type)
		},

	},


}
</script>

<style scoped>
.index {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.line {
	display: inline-block;
	width: 50%;
	height: 1rem;
	line-height: 1rem;
	float: left;
	color: #333333;
	text-align: center;
	font-size: .3rem;
}
.line.active {
	color: #5871f5;
}
.order-item {
	height: 1rem;
	line-height: 1rem;
	margin: 0.2rem;
	background-color: #808eda;
	color: #ffffff;
	text-align: left;
	border-radius: .1rem;
	padding: 0px .2rem;
	margin-top: 0px;
	position: relative;
	font-size: .3rem;
}
.order-item.warn {
	background-color: #ffb400;
}
.order-item.on {

}
.order-item-icon {
	position: absolute;
}
.order-item-name {
	margin-left: .6rem;
}
.order-item-next {
	position: absolute;
	right: .2rem;
}
.span-btn.yd-btn-disabled {
	background-color: rgba(0,0,0,0);
	color: #333333;
}
</style>
