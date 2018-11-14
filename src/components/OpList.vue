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
        	 		<yd-button class="bottom-btn" size="large" @click.native="gotoAdd">补充资料<span v-if="needAddTemp" class="need-badge"></span></yd-button>
        	 		<yd-button class="bottom-btn" size="large" @click.native="finish">结案</yd-button>
		        </yd-flexbox>
			</div>
			<!-- 内容 -->
			<div @click="handleTapOp(index)" v-for="(item,index) in opList" :key="index" class="op-item">
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
		
	},
	name: 'OpList',
	data () {
		return {
			needAddTemp: false, // 是否需要补充资料
			// 订单列表
			opList: [
				// OperationRecordId : 操作在该报单列表里Id
				// OperationId : 操作在操作字典表里Id，及操作类型Id
				// OperationName : 操作名称
				// OperationRoleType : 操作所属角色id
				// CreationDateTime : 操作创建日期时间, 格式：2018-08-01 18:00:00
				// Status : 操作状态，0，未操作，1，已操作
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "预报单",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "估值",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "估值确认",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "正式报单",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "初审",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "初审结果确认",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "立项",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "立项报告",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "二审",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品匹配",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品匹配确认",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "联系产品供应方",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "下户",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品终审",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品终审结果确认",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "打印合同",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品方面签公证",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品方进抵",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品方放款",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "提交收款凭证",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "归档",
				// 	"CreationDateTime" : "",
				// 	"OperationRoleType" : 1,
				// 	"OperationRecordId" : "666",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// }
			], 
		}
	},
	mounted () {
		// this.testLogin()
		this.getOpList()
		this.getNeedAddTemp()
	},
	methods:{
		// 查看资料
		gotoLook() {
			const { id, hid, oprid } = this.$route.params
			this.$router.push({ name: 'look', params: { id, hid }})
		},

		// 结案
		finish () {
			const { id, hid, oprid } = this.$route.params
			const param = {
				OrderId: id,
			}
			this.$dialog.confirm({
                title: '警告',
                mes: '点击确定，将直接结案，请您慎重操作！',
                opts: () => {
                    this.pp('CancelOrder', param, res => {
						if (res.ret) {
							this.$dialog.toast({
								mes: '结案成功',
								icon: 'none',
								timeout: 3000,
							})
							this.$router.push({ name : 'index' })
						} else {
							this.$dialog.toast({
								mes: res.msg,
								icon: 'none',
								timeout: 3000,
							})
						}
					})
                }
            })
		},

		// 是否需要补充资料
		getNeedAddTemp () {
			const { id, hid, oprid } = this.$route.params
			const param = {
				OrderId: id,
			}
			this.pp('NeedToSupplementMaterial', param, res => {
				if (res.ret) {
					const { NeedToSupplementMaterial } = res.data
					if (NeedToSupplementMaterial === true) {
						this.needAddTemp = true
					} else {
						this.needAddTemp = false
					}
				} else {
					this.needAddTemp = false
				}
			})
		},
		
		// 补充资料
		gotoAdd() {
			const { id, hid, oprid } = this.$route.params
			const param = {
				OrderId: id,
			}
			this.pp('NeedToSupplementMaterial', param, res => {
				if (res.ret) {
					const { NeedToSupplementMaterial } = res.data
					if (NeedToSupplementMaterial === true) {
						this.$router.push({ name : 'addData', params: { id, hid } })
					} else {
						this.$dialog.toast({
							mes: '暂时不能进行补充资料操作~',
							icon: 'none',
							timeout: 3000,
						})	
					}
				} else {
					this.$dialog.toast({
						mes: '暂时不能进行补充资料操作',
						icon: 'none',
						timeout: 3000,
					})
				}
			})
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
					this.opList = res.data
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 3000,
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
			if (this.opList && idx == this.opList.length-1) {
				const op = this.opList[idx]
				const { OperationRoleType, OperationName, OperationRecordId } = op
				const OperatorRoleId = window.sessionStorage.getItem('OperatorRoleId')
				if (OperationRoleType == OperatorRoleId) {
					this.gotoDetail(OperationName, OperationRecordId)
				} else {
					this.$dialog.toast({
						mes: "您不能进入此操作",
						icon: 'none',
						timeout: 3000,
					})
				}
			} else {
				this.$dialog.toast({
					mes: "您不能进入此操作",
					icon: 'none',
					timeout: 3000,
				})
			}
		},

		// 进入具体操作
		gotoDetail (nameKey, OperationRecordId) {
			// 1	预报单	1	2
			// 2	估值	2	3
			// 3	估值确认	1	4
			// 4	正式报单	1	5
			// 5	初审	2	6
			// 6	初审结果确认	1	7
			// 7	立项	1	8
			// 8	二审	2	9
			// 9	产品匹配	3	10
			// 10	产品匹配确认	1	11
			// 11	联系产品供应方	3	12
			// 12	下户	3	13
			// 13	产品终审	3	14
			// 14	产品终审结果确认	1	15
			// 15	打印合同	3	16
			// 16	产品方面签公证	3	17
			// 17	产品方进抵	3	18
			// 18	产品方放款	3	19
			// 19	提交收款凭证	1	20
			// 20	归档	3	0
			const jsonObj = {
				"估值确认" : "confirmValuation",
				"正式报单" : "form",
				"初审结果确认" : "confirmFirstCheck",
				"立项" : "setUpProject",
				"产品匹配确认" : "confirmMatch",
				"产品终审结果确认" : "confirmLastCheck",
				"提交收款凭证" : "sendDeal",
			}
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const oprid = OperationRecordId
			const name = jsonObj[nameKey]
			// console.log(name)
			if (name) {
				this.$router.push({ name, params: { id, hid, oprid } })
			} else {
				this.$dialog.toast({
					mes: "您不能进入此操作",
					icon: 'none',
					timeout: 3000,
				})
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
