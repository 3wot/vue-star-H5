<template>
	<div class="opList">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="操作列表" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
				<span slot="right" @click="gotoLook">查看资料</span>
			</yd-navbar>

			<div arrow v-for="(item,index) in opList" :key="index" class="op-item" :class="{'warn':item.Status == 0}">
				<yd-icon v-if="item.Status != 0" class="op-item-icon" color="#ffffff" size=".4rem" name="shield-outline"></yd-icon>
				<yd-icon v-if="item.Status == 0" class="op-item-icon" color="#ffffff" size=".4rem" name="time"></yd-icon>
				<!-- 姓名 -->
				<span class="op-item-name">{{item.OperationName}}</span>
				<yd-navbar-next-icon class="op-item-next" color="#ffffff"></yd-navbar-next-icon>
			</div>


	    </yd-layout>



	</div>
</template>

<script>

export default {
	components:{
	// Button,Field
	},
	name: 'OpList',
	data () {
		return {
			// 订单列表
			opList: [
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "预报单",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "估值",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "预报单",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "预报单",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "预报单",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// }
			], 
		}
	},
	mounted () {
		console.log(this.$route.params.id)
	},
	methods:{

		
		
		gotoLook() {
			// 调到预报单
			const id = this.$route.params.id
			console.log(id)
			this.$router.push({ name: 'look', params: { id }})
		},
		
		// 首页
		gotoIndex() {
			this.$router.push({ name : 'index' })
		},

	},


}
</script>

<style scoped>
.opList {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.op-item {
	height: 1rem;
	line-height: 1rem;
	margin: 0.2rem;
	background-color: #808eda;
	color: #ffffff;
	text-align: left;
	border-radius: .1rem;
	padding: 0px .2rem;
	position: relative;
}
.op-item.warn {
	background-color: #ffb400;
}
.op-item.on {

}
.op-item-icon {
	position: absolute;
}
.op-item-name {
	margin-left: .6rem;
}
.op-item-next {
	position: absolute;
	right: .2rem;
}

</style>
