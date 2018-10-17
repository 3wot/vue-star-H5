<template>
	<div class="opList">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="操作列表" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
				<!-- <span slot="right" @click="gotoLook">查看资料</span> -->
			</yd-navbar>
			<!-- 底部 -->
			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>
        	 		<yd-button class="bottom-btn" size="large" @click.native="gotoLook">查看资料</yd-button>
        	 		<yd-button class="bottom-btn" size="large" @click.native="gotoAdd">补充资料</yd-button>
		        </yd-flexbox>
			</div>
			<!-- 内容 -->
			<div @click="handleTapOp(index)" v-for="(item,index) in opList" :key="index" class="op-item" :class="{'warn':item.Status == 0}">
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
				// OperationRecordId : 操作在该报单列表里Id
				// OperationId : 操作在操作字典表里Id，及操作类型Id
				// OperationName : 操作名称
				// OperationRoleType : 操作所属角色id
				// CreationDateTime : 操作创建日期时间, 格式：2018-08-01 18:00:00
				// Status : 操作状态，0，未操作，1，已操作
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
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "估值确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "正式报单",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "初审",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "初审确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "立项",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "立项报告",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "二审",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品匹配",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品匹配确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "联系产品供应方",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "补充资料",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "下户",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品终审",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品终审结果确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "打印合同",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品方面签公证",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品方进抵",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品方放款",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "提交收款凭证",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "归档",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				}
			], 
		}
	},
	mounted () {
		// this.testLogin()
		this.getOpList()
	},
	methods:{
		// 查看资料
		gotoLook() {
			const id = this.$route.params.id
			this.$router.push({ name: 'look', params: { id }})
		},
		
		// 补充资料
		gotoAdd() {
			const id = this.$route.params.id
			this.$router.push({ name: 'addData', params: { id }})
		},

		// 首页
		gotoIndex() {
			this.$router.push({ name : 'index' })
		},

		// 获取操作列表
		getOpList () {
			const id = this.$route.params.id
			const param = {
				OrderId: id,
			}
			this.pp('OrderOperationList', param, res => {
				if (res.ret) {
					// this.opList = res.data
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 2000,
					})
				}
			})
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

		// 处理点击操作
		handleTapOp(idx) {
			if (this.opList && idx < this.opList.length) {
				const op = this.opList[idx]
				const { OperationRoleType } = op

				if (OperationRoleType == USER_INFO.OperatorRoleId) {

					const name = op.OperationName
					
					if (name == '估值确认') {
						this.$router.push({ name : 'confirmValuation' })
					}
					if (name == '正式报单') {
						this.$router.push({ name : 'form' })
					}
					if (name == '初审确认') {
						this.$router.push({ name : 'confirmFirstCheck' })
					}
					if (name == '立项') {
						this.$router.push({ name : 'setUpProject' })
					}
					if (name == '产品匹配确认') {
						this.$router.push({ name : 'confirmMatch' })
					}
					if (name == '补充资料') {
						this.$router.push({ name : 'addData' })
					}
					if (name == '产品终审结果确认') {
						this.$router.push({ name : 'confirmLastCheck' })
					}
					if (name == '打印合同') {
						this.$router.push({ name : 'printDeal' })
					}
					if (name == '提交收款凭证') {
						this.$router.push({ name : 'sendDeal' })
					}


				} else {
					this.$dialog.toast({
						mes: "您不能进入此操作",
						icon: 'none',
						timeout: 3000,
					})
				}
				
				
			}
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
