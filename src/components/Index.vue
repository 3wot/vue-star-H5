<template>
	<div class="index">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="销售" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<!-- <yd-icon name="verifycode" slot="right">添加</yd-icon> -->
				<span slot="right" @click="gotoAdd">添加</span>
			</yd-navbar>

		 	<div slot="top" style="height: 1rem;">
	 		 	<span class="line" :class="{ active: type == 1 }" @click="changeType(1)">进行中的报单</span>
	 		 	<span class="line" :class="{ active: type == 2 }" @click="changeType(2)">历史报单</span>
		 	</div>




	    </yd-layout>



	</div>
</template>

<script>
// import Router from 'vue-router'
import URLS from '../router/link'

export default {
	components:{
	// Button,Field
	},
	name: 'Index',
	data () {
		return {
			// 1 进行 2 历史
			type: 1,
			// 订单列表
			orderList: [
				{
					"Id" : "",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 0, 
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 0, 
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 0, 
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 0, 
					"CurrentOperation" : "估值"
				}
			], 
		}
	},
	mounted () {
		
	},
	methods:{

		changeType(type) {
			this.type = type
			const url = URLS('OrderList')
			const param = {
				uid: 'AAA',
				token: "bbb",
				order_type: type,
			}
			this.$http.get(url,param).then(res => {
				console.log(res)
			})
		},
		
		gotoAdd() {
			// 调到预报单
			this.$router.push({ name : 'addOrder' })
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



</style>
