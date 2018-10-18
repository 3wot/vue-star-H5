<template>
	<div class="confirm-valuation">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="估值确认" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>
			<!-- 脚 -->
			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>
        	 		<yd-button class="bottom-btn" size="large" @click.native="sub">确认</yd-button>	
        	 		<!-- <yd-button class="bottom-btn" size="large" @click.native="finish">拒绝</yd-button> -->
		        </yd-flexbox>
			</div>
			<!-- 内容 -->
			<yd-cell-group>
	            <yd-cell-item>
	                <span slot="left">操作人：</span>
	                <span slot="right">{{HouseValuationOperatorName}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">操作时间：</span>
	                <span slot="right">{{HouseValuationConfirmDateTime}}</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">估值结果：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <img class="cv-img" slot="right" :src="C_HouseValuationImageUrl">
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">备注：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <yd-textarea v-model="HouseValuationConfirmComment" slot="right" placeholder="请输入备注"></yd-textarea>
	            </yd-cell-item>
	        </yd-cell-group>


	    </yd-layout>

	</div>
</template>

<script>

export default {
	components:{

	},
	name: 'ConfirmValuation',
	data () {
		return {
            "C_HouseValuationImageUrl": "http://zx.youzhu.com/uploadfile/2017/0326/20170326104024702.jpg",
            "HouseValuationConfirmDateTime": "",
            "HouseValuationImageUrl": "http://zx.youzhu.com/uploadfile/2017/0326/20170326104024702.jpg",
            "HouseValuationOperatorId": "",
            "HouseValuationOperatorName": "",
            "HouseValuationConfirmComment": "",
		}
	},
	mounted () {
		// this.testLogin()
		this.init()
	},
	methods:{

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
		
		// 跳到首页
		goBack() {
			this.$router.go(-1)
		},

		// 初始化
		init () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				HouseId: hid,
			}
			this.pp('GetConfirmHouseValuationParams', param, res => {
				if (res.ret) {
					const {
					 	C_HouseValuationImageUrl,
			            HouseValuationConfirmDateTime,
			            HouseValuationImageUrl,
			            HouseValuationOperatorId,
			            HouseValuationOperatorName,
					} = res.data || {}
					this.C_HouseValuationImageUrl = C_HouseValuationImageUrl
					this.HouseValuationConfirmDateTime = HouseValuationConfirmDateTime
					this.HouseValuationImageUrl = HouseValuationImageUrl
					this.HouseValuationOperatorId = HouseValuationOperatorId
					this.HouseValuationOperatorName = HouseValuationOperatorName
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 2000,
					})
				}
			})
		},

		// 完成
		finish () {
			// 跳到首页
			this.$router.push({ name : 'opList' })
		},

		// 确认
		sub () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const OperationRecordId = this.$route.params.oprid
			const HouseValuationConfirmComment = this.HouseValuationConfirmComment
			const param = {
				OrderId: id,
				HouseId: hid,
				OperationRecordId,
				HouseValuationConfirmComment,
			}
			this.pp('CompleteConfirmHouseValuation', param, res => {
				if (res.ret) {
					// 跳到操作页面
					this.$router.push({ name : 'opList', params: { id, hid }})
				} else {
					this.$dialog.toast({
						mes: res.msg,
						icon: 'none',
						timeout: 2000,
					})
				}
			})
		},
	},


}
</script>

<style scoped>
.confirm-valuation {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.cv-img {
	width: 100%;
	height: auto;
	margin-bottom: .3rem;
}


</style>
